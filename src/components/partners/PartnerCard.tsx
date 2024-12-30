import { Card, CardContent } from "@/components/ui/card";

interface PartnerCardProps {
  logoSrc: string;
  logoAlt: string;
  description: string;
}

const PartnerCard = ({ logoSrc, logoAlt, description }: PartnerCardProps) => {
  return (
    <Card className="card-hover">
      <CardContent className="p-8 flex flex-col items-center">
        <img src={logoSrc} alt={logoAlt} className="h-12 mb-6" />
        <p className="text-gray-600 text-center">{description}</p>
      </CardContent>
    </Card>
  );
};

export default PartnerCard;