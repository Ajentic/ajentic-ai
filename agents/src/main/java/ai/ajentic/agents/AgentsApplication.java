package ai.ajentic.agents;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.jms.annotation.EnableJms;

@SpringBootApplication
@EnableJms
public class AgentsApplication implements CommandLineRunner {

	final static Logger log = LoggerFactory.getLogger(AgentsApplication.class);

	public static void main(String[] args) {
		log.info("This is an INFO log");
		log.debug("This is a DEBUG log");
		log.error("This is an ERROR log");
		SpringApplication.run(AgentsApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {

	}
}
