from flask import Flask, request, jsonify
from flask_cors import CORS
import requests
from langfuse import Langfuse
from datetime import datetime
from typing import Dict, Any
import threading
import logging


app = Flask(__name__)
CORS(app, resources={r"/score-lead": {"origins": ["http://localhost:8000"]}})




langfuse = Langfuse(
    public_key="public_key",
    secret_key="secret_key",
    host="host_name"
)


HUGGINGFACE_API_URL = "url"


API_KEY = "key"
HEADERS = {
    "Authorization": f"Bearer {API_KEY}",
    "Content-Type": "application/json"
}


def create_lead_scoring_prompt(comment: str) -> str:
    """
    Creates an advanced prompt for lead scoring using specific criteria, 
    with a special emphasis on penalizing vague or generic comments.
    """
    # If the comment is vague or missing, explicitly set a very low score.
    if not comment or comment.lower() in ["nothing", "none", "n/a", "no comment"]:
        return f"""You are a lead scoring assistant for household services. The following customer inquiry is too vague or non-specific:

    INQUIRY: {comment}

    SCORING CRITERIA:
    - Urgency (40%): Words like "urgent", "asap", "immediately", "this week/month"
    - Project Scope (30%): Size/complexity of the project mentioned
    - Budget Indicators (20%): Mentions of "high-end", "luxury", "budget-friendly"
    - Readiness (10%): Clear intent vs. just exploring

    RESPONSE FORMAT:
    Only provide a number between 0-100.

    EXAMPLES:
    - "Need urgent kitchen renovation before holidays" → 95
    - "Just exploring options for future renovation" → 30
    - "Looking for high-end complete kitchen remodel" → 85
    - "Want to repair a small scratch on cabinet" → 40

    STRICT RULES:
    1. Only respond with a number between 0-100
    2. Only score household-related inquiries
    3. Ignore non-household queries
    4. Consider seasonality and timing

    Please analyze the inquiry and provide only a numeric score. Since the inquiry is too vague or missing critical details, assign a score below 5, indicating no immediate interest or priority."""
    else:
        return f"""You are a lead scoring assistant for household services. Given the following customer inquiry, analyze it and provide a lead score between 0-100 based on these criteria:

    INQUIRY: {comment}

    SCORING CRITERIA:
    - Urgency (40%): Words like "urgent", "asap", "immediately", "this week/month"
    - Project Scope (30%): Size/complexity of the project mentioned
    - Budget Indicators (20%): Mentions of "high-end", "luxury", "budget-friendly"
    - Readiness (10%): Clear intent vs. just exploring

    RESPONSE FORMAT:
    Only provide a number between 0-100.

    EXAMPLES:
    - "Need urgent kitchen renovation before holidays" → 95
    - "Just exploring options for future renovation" → 30
    - "Looking for high-end complete kitchen remodel" → 85
    - "Want to repair a small scratch on cabinet" → 40

    STRICT RULES:
    1. Only respond with a number between 0-100
    2. Only score household-related inquiries
    3. Ignore non-household queries
    4. Consider seasonality and timing

    Please analyze the inquiry and provide only a numeric score."""





def get_llm_score(comment: str, trace_id: str) -> Dict[str, Any]:
    span = langfuse.span(
        name="llm_scoring",
        trace_id=trace_id,
    )
    
    retries = 3  
    delay = 5  
    for attempt in range(retries):
        try:
            prompt = create_lead_scoring_prompt(comment)
            payload = {
                "model": "model_name",  
                "inputs": prompt,
                "temperature": 0.3,
                "max_tokens": 10
            }

            response = requests.post(
                HUGGINGFACE_API_URL,
                json=payload,
                headers=HEADERS
            )
            
            if response.status_code == 503:  
                print(f"Attempt {attempt + 1}/{retries}: Model is loading, retrying...")
                time.sleep(delay)
                continue
            
            if response.status_code != 200:
                raise ValueError(f"Request failed with status code {response.status_code}")
            
            response_json = response.json()
            print("Raw API Response:", response_json)
            
           
            score_text = response_json[0].get("generated_text", "").strip()
            score = None
            
            
            for word in score_text.split():
                if word.isdigit():
                    score = int(word)
                    break
            
           
            if score is None:
                print("No numeric score found in response. Applying fallback logic.")
                if any(word in comment.lower() for word in ["urgent", "asap", "immediately"]):
                    score = 90  
                elif any(word in comment.lower() for word in ["exploring", "future", "maybe"]):
                    score = 30  
                elif any(word in comment.lower() for word in ["high-end", "luxury", "premium"]):
                    score = 80 
                else:
                    score = 50
            
            
            score = max(0, min(100, score))
            print("Final Score:", score)
            
            span.end(
                status="success",
                metadata={
                    "score": score,
                    "prompt": prompt,
                    "response": response_json
                }
            )
            
            return {"score": score, "status": "success"}
        
        except Exception as e:
            print(f"Error on attempt {attempt + 1}/{retries}: {str(e)}")
            span.end(
                status="error",
                metadata={
                    "error": str(e),
                    "prompt": prompt
                }
            )
            if attempt == retries - 1:  
                return {"score": 0, "status": "error", "error": str(e)}
            
    return {"score": 0, "status": "error", "error": "Max retries exceeded"}



@app.route('/score-lead', methods=['POST'])

def score_lead():
    print("Received request")
    data = request.get_json()
    print("Request data:", data)
    comment = data.get('comment', '')
    print("Comment:", comment)
    
    if not comment:
        return jsonify({"error": "Comment is required"}), 400

    
    trace = langfuse.trace(
        name="lead_scoring",
        metadata={
            "comment": comment,
            "timestamp": datetime.utcnow().isoformat(),
            "user_agent": request.headers.get('User-Agent')
        }
    )

    
    result = get_llm_score(comment, trace.id)
    print("Result from LLM:", result)

    if result["status"] == "success":
        score = result["score"]
        print("Score:", score)

        
        langfuse.score(
            name="lead_score",
            value=score,
            trace_id=trace.id,
            metadata={
                "comment": comment,
                "score": score
            }
        )

        
        langfuse.trace(
            name="score_analysis",
            metadata={
                "score_category": "high" if score >= 80 else "medium" if score >= 50 else "low",
                "contains_urgency": any(word in comment.lower() for word in ["urgent", "asap", "immediately"]),
                "project_scope": "large" if "complete" in comment.lower() or "full" in comment.lower() else "medium"
            }
        )

        return jsonify({
            "score": score,
            "trace_id": trace.id
        })
    else:
        return jsonify({
            "error": "Failed to generate score",
            "details": result.get("error"),
            "trace_id": trace.id
        }), 500




def run_flask():
    print("Starting Flask server on port 5003...")
    app.logger.setLevel(logging.DEBUG)
    app.run(host='0.0.0.0', port=5003, debug=True, use_reloader=False)
    

flask_thread = threading.Thread(target=run_flask, daemon=True)
flask_thread.start()