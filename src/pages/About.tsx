import { Brain, Building, Users, Trophy } from "lucide-react";
import USPCard from "@/components/USPCard";
import VennDiagram from "@/components/VennDiagram";

const About = () => {
  return (
    <div className="min-h-screen font-alegreya">
      <section className="py-20 gradient-bg">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-primary text-center mb-6">
            Shaping the Future Through AI Innovation
          </h1>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Welcome to Ajentic AI, where we are dedicated to shape the world of artificial intelligence through innovation, collaboration, and investments. Our mission is to revolutionize the future with cutting-edge AI solutions that drive technological advancement and create a better world for all.
          </p>
          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-xl text-gray-600 text-center mb-6">
              Our role as an AI Consulting company is to tackle the critical challenges that companies haven't yet staffed for. We excel at building solutions and then thoughtfully transitioning them to permanent teams, embodying the principle of effective self-replacement.
            </p>
            <p className="text-xl text-gray-600 text-center">
              At Ajentic AI, we specialize in taking projects from zero to one, embracing our unique position as pioneers who excel at building foundations and gracefully stepping aside.
            </p>
          </div>
          <VennDiagram />
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary text-center mb-8">
            Our unique selling proposition
          </h2>
          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-xl text-gray-600 text-center mb-6">
              At a startup, you can be tricked into thinking you're building a technology company, so you focus a lot on the product. But ultimately, you're really building a team to build the product and then the company.
            </p>
            <p className="text-xl text-gray-600 text-center">
              That individual will figure out a lot of the "hows" to their colleagues' "whats," and will also take care of administrative contracts (esp SaaS agreements), finance, hiring, vendors, process development, and more.
            </p>
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

      <section className="py-20 gradient-bg">
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