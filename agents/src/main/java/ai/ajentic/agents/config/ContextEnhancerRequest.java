package ai.ajentic.agents.config;

public class ContextEnhancerRequest {

    public String enhancedPromptString;

    public Metadata metadata;

    public ContextEnhancerRequest(String enhancedPromptString, Metadata metadata){
        this.enhancedPromptString = enhancedPromptString;
        this.metadata = metadata;
    }
}
