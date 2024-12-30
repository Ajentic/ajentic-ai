import { Brain, Building, Users, Trophy } from "lucide-react";
import USPCard from "@/components/USPCard";
import VennDiagram from "@/components/VennDiagram";
import { Card, CardContent } from "@/components/ui/card";
import { Cloud, Smartphone, Share2, Bot as BotIcon } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen font-alegreya">
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
            Market Opportunity: The Dawn of Agent Economy
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {[
              {
                era: "Cloud Era",
                description: "Public Cloud unleashed the SaaS Economy",
                icon: Cloud,
                iconBg: "bg-blue-50",
                iconColor: "text-blue-500",
                image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop"
              },
              {
                era: "Mobile Era",
                description: "The iPhone ushered in the App Economy",
                icon: Smartphone,
                iconBg: "bg-purple-50",
                iconColor: "text-purple-500",
                image: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=800&auto=format&fit=crop"
              },
              {
                era: "Social Era",
                description: "Social media enabled the Creator Economy",
                icon: Share2,
                iconColor: "text-green-500",
                iconBg: "bg-green-50",
                image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&auto=format&fit=crop"
              }
            ].map((era, index) => (
              <Card key={index} className="transform transition-all duration-300 hover:scale-105">
                <CardContent className="p-6">
                  <div className="aspect-w-16 aspect-h-9 mb-6">
                    <img 
                      src={era.image} 
                      alt={`${era.era} illustration`} 
                      className="w-full h-48 object-cover rounded-lg shadow-md"
                    />
                  </div>
                  <div className={`w-16 h-16 rounded-full ${era.iconBg} flex items-center justify-center mb-4 mx-auto`}>
                    <era.icon className={`w-8 h-8 ${era.iconColor}`} />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-center">{era.era}</h3>
                  <p className="text-gray-600 text-center">{era.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8">
            <Card className="transform transition-all duration-300 hover:scale-105 max-w-2xl mx-auto">
              <CardContent className="p-6">
                <div className="aspect-w-16 aspect-h-9 mb-6">
                  <img 
                    src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop"
                    alt="AI Era illustration"
                    className="w-full h-64 object-cover rounded-lg shadow-md"
                  />
                </div>
                <div className="bg-primary/5 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <BotIcon className="w-8 h-8 text-primary" />
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
          <h2 className="text-3xl font-bold text-primary text-center mb-12">
            Transform Your Business with Ajentic AI
          </h2>
          <div className="max-w-7xl mx-auto mb-12">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-[#FAFAFA] p-6 rounded-lg shadow-lg flex flex-col h-full">
                <img
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
                  alt="Team Collaboration"
                  className="rounded-lg shadow-md mb-6 w-full h-48 object-cover"
                />
                <p className="text-lg text-[#112B3D] text-center flex-grow">
                  At Ajentic AI, we are committed to shaping the future of artificial intelligence through innovation, collaboration, and strategic investments. Our mission is to drive technological progress with cutting-edge AI solutions that foster a better world for everyone.
                </p>
              </div>
              <div className="bg-[#FAFAFA] p-6 rounded-lg shadow-lg flex flex-col h-full">
                <img
                  src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
                  alt="Team Innovation"
                  className="rounded-lg shadow-md mb-6 w-full h-48 object-cover"
                />
                <p className="text-lg text-[#112B3D] text-center flex-grow">
                  As an AI consulting company, we address critical challenges that organizations are not yet equipped to handle internally. We specialize in designing and implementing transformative solutions and ensuring a seamless handoff to permanent teams, guided by our philosophy of effective self-replacement.
                </p>
              </div>
              <div className="bg-[#FAFAFA] p-6 rounded-lg shadow-lg flex flex-col h-full">
                <img
                  src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
                  alt="Code Development"
                  className="rounded-lg shadow-md mb-6 w-full h-48 object-cover"
                />
                <p className="text-lg text-[#112B3D] text-center flex-grow">
                  We thrive on taking projects from concept to reality, excelling at building robust foundations and transitioning with grace once the groundwork is established. Ajentic AI is where pioneering vision meets purposeful execution.
                </p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <USPCard
              title="Shape the future of AI with us"
              description="We work with the best AI professionals and research centers."
              Icon={Brain}
            />
            <USPCard
              title="We are a venture builder"
              description="Less risky, more effective and disruptive approach than the usual VC model"
              Icon={Building}
            />
            <USPCard
              title="Join us on the cutting edge of innovation"
              description="Many big companies and managers are working and partnering with us."
              Icon={Users}
            />
            <USPCard
              title="Unlock success with our C-level management"
              description="C-level management with specific knowledge to lead our spin-off companies and finding the best exit strategies."
              Icon={Trophy}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;