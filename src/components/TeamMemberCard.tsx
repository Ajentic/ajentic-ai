import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { LinkedinIcon } from "lucide-react";

interface TeamMemberProps {
  member: {
    name: string;
    role: string;
    linkedin: string;
    image: string;
    initials: string;
  };
}

const TeamMemberCard = ({ member }: TeamMemberProps) => {
  return (
    <Card className="card-hover">
      <CardHeader className="text-center">
        <HoverCard>
          <HoverCardTrigger>
            <Avatar className="h-32 w-32 mx-auto mb-4">
              <AvatarImage src={member.image} alt={member.name} />
              <AvatarFallback className="text-2xl">{member.initials}</AvatarFallback>
            </Avatar>
          </HoverCardTrigger>
          <HoverCardContent className="w-80">
            <div className="flex justify-between space-x-4">
              <div className="space-y-1">
                <h4 className="text-sm font-semibold">{member.name}</h4>
                <p className="text-sm text-muted-foreground">{member.role}</p>
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
};

export default TeamMemberCard;