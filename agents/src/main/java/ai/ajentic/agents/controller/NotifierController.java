package ai.ajentic.agents.controller;

import ai.ajentic.agents.enums.NotificationSourceType;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/v1/notifier")
public class NotifierController {

    @Operation(summary = "Notification system to notify lead score to desired client",
            description = "Notification system which accepts different sources to notify and returns the notification to the client"
            )
    @ApiResponse(responseCode = "201", description = "Notification sent successfully")
    @PostMapping("/")
    public String Notifier(
            @Parameter(description = "Valuation from the lead scorer", required = true)
            @RequestParam String leadScorer, //TODO: Need to evaluate the object type
            @Parameter(description = "Notifying sources", required = true)
            @RequestParam NotificationSourceType notificationSourceType //TODO: DETERMINE THE OBJECT TYPE
           ) {
        //Implement busiess logic
        return "Prompt analyzed successfully";//value needs to be filled in
    }
}
