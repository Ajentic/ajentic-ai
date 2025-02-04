package ai.ajentic.agents.config;

import ai.ajentic.agents.enums.PromptType;

public class ModelRequest {
    public String prompt;
    public PromptType type;

    public ModelRequest(String prompt, PromptType type){
        this.prompt = prompt;
        this.type = type;
    }
}
