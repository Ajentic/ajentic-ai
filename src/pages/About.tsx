import { Brain, Building, Users, Trophy } from "lucide-react";
import USPCard from "@/components/USPCard";

const About = () => {
  return (
    <div className="min-h-screen">
      <section className="py-20 gradient-bg">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Shaping the Future Through AI Innovation
          </h1>
          <p className="text-xl text-center text-gray-600 max-w-3xl mx-auto">
            Welcome to Ajentic AI, where we are dedicated to shape the world of artificial intelligence through innovation, collaboration, and investments. Our mission is to revolutionize the future with cutting-edge AI solutions that drive technological advancement and create a better world for all.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our unique selling proposition
          </h2>
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
    </div>
  );
};

export default About;