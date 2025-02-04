const commentInput = document.getElementById("commentInput");
const charCount = document.querySelector(".char-count");
const submitBtn = document.getElementById("submitBtn");
const loading = document.getElementById("loading");
const result = document.getElementById("result");
const error = document.getElementById("error");

commentInput.addEventListener("input", function () {
  const count = this.value.length;
  charCount.textContent = `${count}/500`;

  charCount.style.color = count >= 450 ? "#ff5656" : "#64748b";
});

async function getLeadScore() {
  const comment = commentInput.value.trim();
  if (!comment) {
    showError("Please enter a comment to analyze.");
    return;
  }

  loading.style.display = "block";
  result.style.display = "none";
  error.style.display = "none";
  submitBtn.disabled = true;

  try {
    const response = await fetch("http://localhost:5003/score-lead", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ comment: comment }),
    });

    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

    const data = await response.json();
    showResult(data.score);
  } catch (err) {
    showError(
      "Failed to connect to the scoring service. Please check if the server is running."
    );
    console.error("API Error:", err);
  } finally {
    loading.style.display = "none";
    submitBtn.disabled = false;
  }
}

function showResult(score) {
  const scoreElement = result.querySelector(".score");
  const interpretationElement = result.querySelector(".interpretation");

  scoreElement.textContent = score;

  interpretationElement.textContent =
    score >= 80
      ? "Hot Lead - Immediate Follow-up Required"
      : score >= 50
      ? "Warm Lead - Follow-up Soon"
      : "Cold Lead - Nurturing Required";

  result.style.display = "block";
}

function showError(message) {
  error.textContent = message;
  error.style.display = "block";
}
