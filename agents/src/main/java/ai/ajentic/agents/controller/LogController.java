package ai.ajentic.agents.controller;

import ai.ajentic.agents.producer.LogProducer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LogController {
    @Autowired
    private LogProducer logProducer;

    @PostMapping("/api/logs")
    public String createLog(@RequestBody String logMessage) {
        logProducer.sendLogMessage(logMessage);
        return "Log message sent to queue.";
    }
}

