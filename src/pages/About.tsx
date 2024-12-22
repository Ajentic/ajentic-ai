import { Brain, Building, Users, Trophy } from "lucide-react";
import USPCard from "@/components/USPCard";

const About = () => {
  return (
    <div className="min-h-screen">
      <section className="py-20 gradient-bg">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Transform ideas into thriving ventures with AI Venture Builder
          </h1>
          <p className="text-xl text-center text-gray-600 max-w-3xl mx-auto">
            AI Venture Builder is a venture builder that develops AI solutions for Retail and many more, that address specific needs that are expressed by the market.
            Once each solution becomes a marketable product, it creates a spin-off product based on it.
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