package ai.ajentic.agents.controller;

import ai.ajentic.agents.DTO.DataRequestDTO;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/v1/admin")
public class AdminAPIController {

    // GET Operation: Fetch all data for a given user ID or enquirer
    @GetMapping("/data/{userId}")
    public ResponseEntity<?> getDataByUserId(@PathVariable String userId) {
        // TODO: Add logic to fetch and return all data for the given userId
        return ResponseEntity.ok("Fetched data for userId: " + userId);
    }

    // POST Operation: Add or update data for a user
    @PostMapping("/data")
    public ResponseEntity<?> postDataForUser(@RequestBody DataRequestDTO dataRequest) {
        // TODO: Add logic to save or update the data for the user
        return ResponseEntity.ok("Data saved/updated successfully for userId: " + dataRequest);
    }
}
