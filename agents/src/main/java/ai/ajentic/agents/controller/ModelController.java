package ai.ajentic.agents.controller;

import ai.ajentic.agents.config.ModelRequest;
import ai.ajentic.agents.config.ModelResponse;
import ai.ajentic.agents.enums.PromptType;
import io.swagger.v3.oas.annotations.Parameter;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ModelController {

    @PostMapping("/v1/model")
    public String promptClassifier(
            //Alternate - @RequestBody ModelRequest modelRequest
            @Parameter(description = "ID of the user to be retrieved", required = true)
            @PathVariable Integer id,
            @PathVariable String prompt,
            @PathVariable PromptType type) {
        validateInput(prompt, type);


        return "Need to implement";
    }

    //this is for input validator
    public void validateInput(String prompt,
                             PromptType type){
        //check whether the prompt in the right format, length, language
        processPrompt(prompt, type);
    }

    //check whether multiple models need to be run. In parallel or not
    public boolean isMultipleModelExecutionRequired(ModelRequest modelRequest){
        return true;
    }

    //This function will process the inbound request
    public void processPrompt( String prompt,
                               PromptType type){
        //check for task specific prompt[eg- kitchen furniture ]
        ModelRequest modelRequest = new ModelRequest(prompt, type);
        //Asusme multipe always run in paralle
        if(isMultipleModelExecutionRequired(modelRequest)){
            executeModels(modelRequest);
        }else{
            executeModel(modelRequest);
        }
    }


    //run a single model
    public void executeModel(ModelRequest modelRequest){
       //need to call process model response
        //call fastapi here
        ModelResponse modelResponse = new ModelResponse();
        processModelResponse(modelResponse);
    }

    //run multiple models concurrently
    public void executeModels(ModelRequest modelRequest){
        //need to call process model responses
        //call fastapi here
        ModelResponse modelResponse = new ModelResponse();
        processModelResponses(modelResponse);
    }

    public void processModelResponse(ModelResponse modelResponse){
        //need to call evaluate model response
        evaluateModelResponse(modelResponse);
    }


    public void processModelResponses(ModelResponse modelResponse){
        //need to call evaluate model responses
        evaluateModelResponses(modelResponse);
    }


    public void evaluateModelResponse(ModelResponse modelResponse){
        constructModelResponse();
    }

    public void evaluateModelResponses(ModelResponse modelResponse){
        constructModelResponse();
    }

    public void constructModelResponse(){

    }





}
