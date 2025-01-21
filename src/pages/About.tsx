import { Cloud, Smartphone, Share2, Bot } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import USPCard from "@/components/USPCard";
import PageHeader from "@/components/PageHeader";
import EraCard from "@/components/EraCard";
import PillarCard from "@/components/PillarCard";
import Logo from "@/components/Logo";

const About = () => {
  return (
    <div className="min-h-screen font-alegreya">
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-center mb-8">
            <Logo />
          </div>
          <PageHeader 
            title="The Dawn of Agent Economy"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <EraCard
              title="Cloud Era"
              description="Public Cloud unleashed the SaaS Economy"
              icon={Cloud}
              image="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
              imageAlt="Cloud Era"
            />
            <EraCard
              title="Mobile Era"
              description="The iPhone ushered in the App Economy"
              icon={Smartphone}
              image="https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5"
              imageAlt="Mobile Era"
            />
            <EraCard
              title="Social Era"
              description="Social media enabled the Creator Economy"
              icon={Share2}
              image="https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0"
              imageAlt="Social Era"
            />
          </div>

          <div className="mt-8">
            <Card className="transform transition-all duration-300 hover:scale-105 max-w-2xl mx-auto">
              <CardContent className="p-6">
                <div className="mb-6">
                  <img 
                    src="/lovable-uploads/c5449c15-1bf6-44fd-a9fb-bb8669fcff72.png"
                    alt="AI Era - Agent Economy"
                    className="w-full h-auto aspect-video object-cover rounded-lg shadow-md"
                    loading="lazy"
                  />
                </div>
                <div className="bg-primary/5 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Bot className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-center">AI Era</h3>
                <p className="text-gray-600 text-center">
                  AI brings a similar tectonic shift, entering the Agent Economy
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <PageHeader 
            title="Transform Your Business with Ajentic AI"
          />
          <div className="max-w-7xl mx-auto mb-12">
            <div className="grid md:grid-cols-3 gap-8">
              <PillarCard
                image="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
                imageAlt="Team Collaboration"
                description="At Ajentic AI, we are committed to shaping the future of artificial intelligence through innovation, collaboration, and strategic investments. Our mission is to drive technological progress with cutting-edge AI solutions that foster a better world for everyone."
              />
              <PillarCard
                image="https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
                imageAlt="Team Innovation"
                description="As an AI consulting company, we address critical challenges that organizations are not yet equipped to handle internally. We specialize in designing and implementing transformative solutions and ensuring a seamless handoff to permanent teams, guided by our philosophy of effective self-replacement."
              />
              <PillarCard
                image="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
                imageAlt="Code Development"
                description="We thrive on taking projects from concept to reality, excelling at building robust foundations and transitioning with grace once the groundwork is established. Ajentic AI is where pioneering vision meets purposeful execution."
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
