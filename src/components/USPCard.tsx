import { LucideIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface USPCardProps {
  title: string;
  description: string;
  Icon: LucideIcon;
}

const USPCard = ({ title, description, Icon }: USPCardProps) => {
  return (
    <Card className="card-hover">
      <CardHeader>
        <Icon className="h-8 w-8 text-primary mb-2" />
        <CardTitle className="text-xl font-medium">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  );
};

export default USPCard;