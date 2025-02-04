package ai.ajentic.agents.controller;

import ai.ajentic.agents.DTO.UserCheckRequestDTO;
import ai.ajentic.agents.DTO.UserCreateRequestDTO;
import ai.ajentic.agents.model.User;
import ai.ajentic.agents.service.LoggingService;
import ai.ajentic.agents.service.UserService;
import lombok.extern.slf4j.Slf4j;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;

import java.util.Optional;


@RestController
@RequestMapping("v1/users")
@Tag(name = "User API", description = "API for managing users")
public class UserController {

    @Autowired
    private UserService userService;
    @Autowired
    private LoggingService loggingService;

    private static final Logger logger = LoggerFactory.getLogger(UserController.class);

    @Operation(summary = "Analyze prompt by the user", description = "Analyze incoming prompt given by the user.")
    @ApiResponse(responseCode = "201", description = "Prompt captured successfully")
    @PostMapping("promptanalyzer")
    public String prompt(
            @Parameter(description = "ID of the new user", required = true)
            @RequestParam Integer id,
            @Parameter(description = "Prompt coming in", required = true)
            @RequestParam String prompt) {
        //Need to implement business logic
        loggingService.log("logiing");
        return "Prompt analyzed successfully";//value needs to be filled in
    }



    @Operation(summary = "Add a new user", description = "Add a user with a unique ID.")
    @ApiResponse(responseCode = "201", description = "User created successfully")
    @ApiResponse(responseCode = "400", description = "User already exists")
    @PostMapping("/create")
    public ResponseEntity<String> createUser(
            @Parameter(description = "User data required for creating a new user. The object contains fields such as username, email, and password.",
                    required = true)
            @RequestBody UserCreateRequestDTO userCreateRequestDTO) {
        try {
            User createUser = userService.createUser(userCreateRequestDTO);
            logger.info("User "+createUser.getUsername()+" created successfully!!!");
            return ResponseEntity.ok("User created successfully");
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @Operation(summary = "Check whether a user exists or not", description = "Check whether a user exists or not. Display appropriate message based on search outcome.")
    @ApiResponse(responseCode = "201", description = "User present")
    @ApiResponse(responseCode = "404", description = "User not found")
    @PostMapping("/check")
    public ResponseEntity<String> checkUser(
            @Parameter(description = "User data required for checking a user. The object contains username field.",
                    required = true)
            @RequestBody UserCheckRequestDTO userCheckRequestDTO) {
        Optional<User> existingUser = userService.getUserByUsername(userCheckRequestDTO.getUsername());
        if (existingUser.isPresent()) {
            logger.warn("User already exists!!!");
            return ResponseEntity.ok("User exists");
        } else {
            return ResponseEntity.status(404).body("User not found");
        }
    }

}
