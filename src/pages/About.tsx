import { Brain, Building, Users, Trophy } from "lucide-react";
import USPCard from "@/components/USPCard";
import VennDiagram from "@/components/VennDiagram";

const About = () => {
  return (
    <div className="min-h-screen font-alegreya">
      <section className="py-16 gradient-bg">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-primary text-center mb-6">
            Shaping the Future Through AI Innovation
          </h1>
          <div className="text-xl text-gray-600 text-center max-w-3xl mx-auto space-y-6">
            <p>
              At Ajentic AI, we are committed to shaping the future of artificial intelligence through innovation, collaboration, and strategic investments. Our mission is to drive technological progress with cutting-edge AI solutions that foster a better world for everyone.
            </p>
            <p>
              As an AI consulting company, we address critical challenges that organizations are not yet equipped to handle internally. We specialize in designing and implementing transformative solutions and ensuring a seamless handoff to permanent teams, guided by our philosophy of effective self-replacement.
            </p>
            <p>
              We thrive on taking projects from concept to reality, excelling at building robust foundations and transitioning with grace once the groundwork is established. Ajentic AI is where pioneering vision meets purposeful execution.
            </p>
          </div>
          <VennDiagram />
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#062E4B] text-center mb-12">
            Our Unique Selling Proposition: Building Teams to Build Great Products
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
                  At Ajentic AI, we understand that while it may seem like you're building a technology company, the real challenge is building the team behind the product—and ultimately, the company itself.
                </p>
              </div>
              <div className="bg-[#FAFAFA] p-6 rounded-lg shadow-lg flex flex-col h-full">
                <img
                  src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
                  alt="Team Innovation"
                  className="rounded-lg shadow-md mb-6 w-full h-48 object-cover"
                />
                <p className="text-lg text-[#112B3D] text-center flex-grow">
                  Our team members excel at bridging the gap between vision and execution. They bring expertise in answering the "hows" to their colleagues' "whats," taking ownership of development, implementation, sustainability, and beyond.
                </p>
              </div>
              <div className="bg-[#FAFAFA] p-6 rounded-lg shadow-lg flex flex-col h-full">
                <img
                  src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
                  alt="Code Development"
                  className="rounded-lg shadow-md mb-6 w-full h-48 object-cover"
                />
                <p className="text-lg text-[#112B3D] text-center flex-grow">
                  With Ajentic AI, you gain more than a consulting partner—you gain a team dedicated to turning ambitious ideas into enduring success.
                </p>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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

      <section className="py-16 gradient-bg">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-primary text-center mb-6">
            Transform ideas into thriving ventures with Ajentic AI
          </h2>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
            Ajentic AI is a venture builder that develops AI solution for Retail vertical and many more, addressing specific needs expressed by the market.
            Once each solution becomes a marketable product, it creates a spin-off company based on it.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
