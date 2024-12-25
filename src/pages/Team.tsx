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
      image: "/placeholder.svg",
      initials: "RP",
    },
    {
      name: "Vasanth Chetan",
      role: "Co-Founder",
      linkedin: "https://www.linkedin.com/in/vasanthchetan/",
      image: "/placeholder.svg",
      initials: "VC",
    },
  ],
  regional: [
    {
      name: "Sundararajan Kalidasan",
      role: "India Head",
      linkedin: "https://www.linkedin.com/in/sundararajan2008/",
      image: "/placeholder.svg",
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
            Our Leadership Team
          </h1>
          <p className="text-xl text-center text-gray-600 max-w-3xl mx-auto mb-12">
            Meet the innovative minds behind Ajentic AI
          </p>

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