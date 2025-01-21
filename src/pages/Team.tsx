import PageHeader from "@/components/PageHeader";
import PillarCard from "@/components/PillarCard";
import TeamSection from "@/components/TeamSection";
import Logo from "@/components/Logo";

const teamMembers = {
  leadership: [
    {
      name: "Ravi Pangal",
      role: "Co-Founder",
      linkedin: "https://www.linkedin.com/in/ravi-pangal-7121871/",
      image: "/lovable-uploads/6bc5dc54-3757-4b53-b4c5-c4cac51418fe.png",
      initials: "RP",
    },
    {
      name: "Vasanth Chetan",
      role: "Co-Founder",
      linkedin: "https://www.linkedin.com/in/vasanthchetan/",
      image: "/lovable-uploads/c51ea647-c944-4e60-8861-96d30595f4f6.png",
      initials: "VC",
    },
  ],
  regional: [
    {
      name: "Sundararajan Kalidasan",
      role: "India Head",
      linkedin: "https://www.linkedin.com/in/sundararajan2008/",
      image: "/lovable-uploads/92261bfc-4c32-4acf-ab36-8e8f143b3700.png",
      initials: "SK",
    },
  ],
  advisors: [
    {
      name: "Jai Desai",
      role: "Advisor COO",
      linkedin: "https://www.linkedin.com/in/jaidesai/",
      image: "/lovable-uploads/b33b5093-10d4-40aa-b5fb-ffdedc8690ab.png",
      initials: "JD",
    },
  ],
};

const Team = () => {
  return (
    <div className="min-h-screen">
      <section className="py-20 gradient-bg">
        <div className="container mx-auto px-4">
          <div className="flex justify-center mb-8">
            <Logo />
          </div>
          <PageHeader 
            title="Our Unique Selling Proposition"
            subtitle="Building Teams to Build Great Products"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <PillarCard
              image="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
              imageAlt="Team Building"
              description="At Ajentic AI, we understand that while it may seem like you're building a technology company, the real challenge is building the team behind the product—and ultimately, the company itself."
            />
            <PillarCard
              image="https://images.unsplash.com/photo-1600880292203-757bb62b4baf"
              imageAlt="Vision and Execution"
              description="Our team members excel at bridging the gap between vision and execution. They bring expertise in answering the 'hows' to their colleagues' 'whats,' taking ownership of development, implementation, sustainability, and beyond."
            />
            <PillarCard
              image="https://images.unsplash.com/photo-1552664730-d307ca884978"
              imageAlt="Partnership Success"
              description="With Ajentic AI, you gain more than a consulting partner—you gain a team dedicated to turning ambitious ideas into enduring success."
            />
          </div>

          <PageHeader 
            title="Meet Our Team"
          />

          <TeamSection 
            leadership={teamMembers.leadership}
            regional={teamMembers.regional}
            advisors={teamMembers.advisors}
          />
        </div>
      </section>
    </div>
  );
};

export default Team;
