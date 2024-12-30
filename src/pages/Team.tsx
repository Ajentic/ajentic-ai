import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { LinkedinIcon } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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

const TeamMemberCard = ({ member }) => (
  <Card className="card-hover">
    <CardHeader className="text-center">
      <HoverCard>
        <HoverCardTrigger>
          <Avatar className="h-32 w-32 mx-auto mb-4">
            <AvatarImage src={member.image} alt={member.name} />
            <AvatarFallback className="text-2xl">
              {member.initials}
            </AvatarFallback>
          </Avatar>
        </HoverCardTrigger>
        <HoverCardContent className="w-80">
          <div className="flex justify-between space-x-4">
            <div className="space-y-1">
              <h4 className="text-sm font-semibold">{member.name}</h4>
              <p className="text-sm text-muted-foreground">
                {member.role}
              </p>
            </div>
          </div>
        </HoverCardContent>
      </HoverCard>
      <CardTitle className="text-xl mb-1">{member.name}</CardTitle>
      <CardDescription className="text-lg">{member.role}</CardDescription>
    </CardHeader>
    <CardContent className="text-center">
      <a
        href={member.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors"
      >
        <LinkedinIcon className="h-5 w-5" />
        <span>View Profile</span>
      </a>
    </CardContent>
  </Card>
);

const Team = () => {
  return (
    <div className="min-h-screen">
      <section className="py-20 gradient-bg">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Our Unique Selling Proposition
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-center mb-12">
            Building Teams to Build Great Products
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
                alt="Team Building"
                className="w-full h-48 object-cover rounded-lg mb-6"
              />
              <p className="text-lg text-gray-700">
                At Ajentic AI, we understand that while it may seem like you're building a technology company, the real challenge is building the team behind the product—and ultimately, the company itself.
              </p>
            </Card>

            <Card className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf"
                alt="Vision and Execution"
                className="w-full h-48 object-cover rounded-lg mb-6"
              />
              <p className="text-lg text-gray-700">
                Our team members excel at bridging the gap between vision and execution. They bring expertise in answering the "hows" to their colleagues' "whats," taking ownership of development, implementation, sustainability, and beyond.
              </p>
            </Card>

            <Card className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978"
                alt="Partnership Success"
                className="w-full h-48 object-cover rounded-lg mb-6"
              />
              <p className="text-lg text-gray-700">
                With Ajentic AI, you gain more than a consulting partner—you gain a team dedicated to turning ambitious ideas into enduring success.
              </p>
            </Card>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Meet Our Team
          </h2>

          <Tabs defaultValue="leadership" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="leadership">Co-Founders</TabsTrigger>
              <TabsTrigger value="regional">India Team</TabsTrigger>
              <TabsTrigger value="advisors">Advisors</TabsTrigger>
            </TabsList>

            <TabsContent value="leadership">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {teamMembers.leadership.map((member) => (
                  <TeamMemberCard key={member.name} member={member} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="regional">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {teamMembers.regional.map((member) => (
                  <TeamMemberCard key={member.name} member={member} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="advisors">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {teamMembers.advisors.map((member) => (
                  <TeamMemberCard key={member.name} member={member} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
};

export default Team;