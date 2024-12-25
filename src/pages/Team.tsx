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

const teamMembers = [
  {
    name: "Jai Desai",
    role: "Advisor COO",
    linkedin: "https://www.linkedin.com/in/jaidesai/",
    image: "/placeholder.svg",
    initials: "JD",
  },
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
  {
    name: "Sundararajan Kalidasan",
    role: "India Head",
    linkedin: "https://www.linkedin.com/in/sundararajan2008/",
    image: "/placeholder.svg",
    initials: "SK",
  },
];

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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <Card key={member.name} className="card-hover">
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
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;