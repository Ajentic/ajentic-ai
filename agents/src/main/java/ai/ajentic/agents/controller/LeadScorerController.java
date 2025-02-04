package ai.ajentic.agents.controller;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("v1/leadscorer")
public class LeadScorerController {

    @Operation(summary = "Computes lead score for the enhanced prompt", description = "Lead Scorer captures the information from the " +
            "context enhancer and computes the lead score for the user prompt." +
            "The computed score will be sent to notifier to notify target customers" +
            "The score will be sent back to Machine Learning Models if further enhancement is required and re-ranked and stored in the " +
            "vector database")
    @ApiResponse(responseCode = "201", description = "Lead score computed")
    @PostMapping("/leadscorereval")
    public String LeadScorer(
            @Parameter(description = "Context Enhancer object", required = true)
            @RequestParam String contextEnhancer,
            @Parameter(description = "Model if further evaluation is required", required = true)
            @RequestParam String model) //TODO: DETERMINE THE OBJECT TYPE
//            @Parameter(description = "Info sent back to Cyncly", required = true)
//            @RequestParam Cycnly cynclyObj) {
        //Implement busiess logic
    {
        return "Prompt analyzed successfully";//value needs to be filled in
    }


}