package ai.ajentic.agents.repository;

import ai.ajentic.agents.model.Log;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LogRepository extends JpaRepository<Log, Long> {
}

