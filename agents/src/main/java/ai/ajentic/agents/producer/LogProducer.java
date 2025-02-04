package ai.ajentic.agents.producer;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jms.core.JmsTemplate;
import org.springframework.stereotype.Service;

@Service
public class LogProducer {
    @Autowired
    private JmsTemplate jmsTemplate;

    public void sendLogMessage(String message) {
        jmsTemplate.convertAndSend("logQueue", message);
    }
}

