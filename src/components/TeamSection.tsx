import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TeamMemberCard from "./TeamMemberCard";

interface TeamMember {
  name: string;
  role: string;
  linkedin: string;
  image: string;
  initials: string;
}

interface TeamSectionProps {
  leadership: TeamMember[];
  regional: TeamMember[];
  advisors: TeamMember[];
}

const TeamSection = ({ leadership, regional, advisors }: TeamSectionProps) => {
  return (
    <Tabs defaultValue="leadership" className="w-full max-w-6xl mx-auto">
      <TabsList className="grid w-full grid-cols-3 mb-8">
        <TabsTrigger value="leadership">Co-Founders</TabsTrigger>
        <TabsTrigger value="regional">India Team</TabsTrigger>
        <TabsTrigger value="advisors">Advisors</TabsTrigger>
      </TabsList>

      <TabsContent value="leadership">
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 ${leadership.length === 1 ? 'md:grid-cols-1 place-items-center' : 'justify-items-center'}`}>
          {leadership.map((member) => (
            <TeamMemberCard key={member.name} member={member} />
          ))}
        </div>
      </TabsContent>

      <TabsContent value="regional">
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ${regional.length === 1 ? 'md:grid-cols-1 place-items-center' : 'justify-items-center'}`}>
          {regional.map((member) => (
            <TeamMemberCard key={member.name} member={member} />
          ))}
        </div>
      </TabsContent>

      <TabsContent value="advisors">
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ${advisors.length === 1 ? 'md:grid-cols-1 place-items-center' : 'justify-items-center'}`}>
          {advisors.map((member) => (
            <TeamMemberCard key={member.name} member={member} />
          ))}
        </div>
      </TabsContent>
    </Tabs>
  );
};

export default TeamSection;