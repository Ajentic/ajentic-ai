import { Cloud, Smartphone, Share2, Bot } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import USPCard from "@/components/USPCard";
import PageHeader from "@/components/PageHeader";
import EraCard from "@/components/EraCard";
import PillarCard from "@/components/PillarCard";

const About = () => {
  return (
    <div className="min-h-screen font-alegreya">
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <PageHeader 
            title="Market Opportunity: The Dawn of Agent Economy"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <EraCard
              title="Cloud Era"
              description="Public Cloud unleashed the SaaS Economy"
              icon={Cloud}
              image="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop"
              imageAlt="Cloud Era"
            />
            <EraCard
              title="Mobile Era"
              description="The iPhone ushered in the App Economy"
              icon={Smartphone}
              image="https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=800&auto=format&fit=crop"
              imageAlt="Mobile Era"
            />
            <EraCard
              title="Social Era"
              description="Social media enabled the Creator Economy"
              icon={Share2}
              image="https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&auto=format&fit=crop"
              imageAlt="Social Era"
            />
          </div>

          <div className="mt-8">
            <Card className="transform transition-all duration-300 hover:scale-105 max-w-2xl mx-auto">
              <CardContent className="p-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <img 
                    src="https://images.unsplash.com/photo-1676299081847-824916de030a?w=800&auto=format&fit=crop"
                    alt="OpenAI"
                    className="w-full h-24 object-cover rounded-lg shadow-md"
                    loading="lazy"
                  />
                  <img 
                    src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop"
                    alt="Anthropic"
                    className="w-full h-24 object-cover rounded-lg shadow-md"
                    loading="lazy"
                  />
                  <img 
                    src="https://images.unsplash.com/photo-1685094488371-5e70d30f5a8d?w=800&auto=format&fit=crop"
                    alt="Google Gemini"
                    className="w-full h-24 object-cover rounded-lg shadow-md"
                    loading="lazy"
                  />
                  <img 
                    src="https://images.unsplash.com/photo-1684163761859-461e7d1fd523?w=800&auto=format&fit=crop"
                    alt="Meta LLaMA"
                    className="w-full h-24 object-cover rounded-lg shadow-md"
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