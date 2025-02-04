package ai.ajentic.agents.consumer;

import ai.ajentic.agents.model.Log;
import ai.ajentic.agents.repository.LogRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jms.annotation.JmsListener;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

@Service
public class LogListener {
    @Autowired
    private LogRepository logRepository;

    @JmsListener(destination = "logQueue")
    public void receiveLogMessage(String message) {
        Log log = new Log();
        log.setMessage(message);
        log.setTimestamp(LocalDateTime.now().format(DateTimeFormatter.ISO_DATE_TIME));
        logRepository.save(log);
    }
}
