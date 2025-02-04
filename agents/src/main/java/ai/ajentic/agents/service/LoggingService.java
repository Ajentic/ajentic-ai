package ai.ajentic.agents.service;

import ai.ajentic.agents.producer.LogProducer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LoggingService {
    @Autowired
    private LogProducer logProducer;

    public void log(String message) {
        logProducer.sendLogMessage(message);
    }
}

