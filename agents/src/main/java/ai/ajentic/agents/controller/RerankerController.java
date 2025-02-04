package ai.ajentic.agents.controller;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/v1/reranker")
public class RerankerController {

    @Operation(summary = "Re ranks the evaluated lead score", description = "Re-rank the evaluated lead score and provide the updated info to lead scorer" +
            "and insert the re ranked value to the database" )
    @ApiResponse(responseCode = "201", description = "Re-rank evaluation completed")
    @PostMapping("/rerankereval")
    public String LeadScorer(
            @Parameter(description = "Lead scorer value", required = true)
            @RequestParam String leadScorer//TODO:Unsure about the type and the param naming convention
//            @Parameter(description = "Database instance", required = true)
//            @RequestParam Database model //TODO: DETERMINE THE OBJECT TYPE
            ) {
        //Implement busiess logic
        return "re ranked value";//value needs to be filled in
    }
}
