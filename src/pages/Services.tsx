import { ArrowRight, Bot, LineChart, Network, Workflow } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Logo from "@/components/Logo";

const Services = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex justify-center mb-8">
        <Logo />
      </div>
      <h1 className="text-4xl md:text-5xl font-bold text-primary text-center mb-12">
        Our Services
      </h1>
      
      <div className="max-w-4xl mx-auto mb-16">
        <Card className="bg-gradient-to-br from-primary/5 to-secondary/5">
          <CardContent className="p-8">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
              Custom Solutions leveraging LLMs
            </h2>
            <p className="text-gray-600 mb-8">
              Whether it is building AI-powered assistants that elevate your customer service or automating workflows with AI agents, we provide large-scale AI solutions that help you stay ahead of the AI competition. We guide you through every step of your Data and AI journey, ensuring that AI is both easy and safe to use.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {[
          {
            title: "Custom AI Assistants for Enterprises",
            icon: Bot,
            description: "Intelligent assistants tailored to your business needs"
          },
          {
            title: "Workflow Automation by AI Agents",
            icon: Workflow,
            description: "Streamline operations with AI-powered automation"
          },
          {
            title: "LLM-Powered Data Visualization",
            icon: LineChart,
            description: "Transform complex data into actionable insights"
          },
          {
            title: "Seamless System Integration",
            icon: Network,
            description: "Connect and optimize your business systems"
          }
        ].map((service, index) => (
          <Card key={index} className="card-hover">
            <CardContent className="p-6">
              <div className="mb-4">
                <service.icon className="w-12 h-12 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="relative py-12">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-around">
            {["Discovery", "Development", "Deployment", "Support"].map((phase, index) => (
              <div key={index} className="flex items-center">
                <div className="bg-white px-4">
                  <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center">
                    {index + 1}
                  </div>
                  <div className="text-sm font-medium mt-2">{phase}</div>
                </div>
                {index < 3 && (
                  <ArrowRight className="text-primary absolute -right-4 top-1/2 transform -translate-y-1/2" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
