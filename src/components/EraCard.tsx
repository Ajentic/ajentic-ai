import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface EraCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  image: string;
  imageAlt: string;
}

const EraCard = ({ title, description, icon: Icon, image, imageAlt }: EraCardProps) => {
  return (
    <Card className="transform transition-all duration-300 hover:scale-105">
      <CardContent className="p-6">
        <div className="aspect-w-16 aspect-h-9 mb-6">
          <img 
            src={image} 
            alt={imageAlt}
            className="w-full h-48 object-cover rounded-lg shadow-md"
            loading="lazy"
          />
        </div>
        <div className="bg-primary/5 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
          <Icon className="w-8 h-8 text-primary" />
        </div>
        <h3 className="text-xl font-bold mb-2 text-center">{title}</h3>
        <p className="text-gray-600 text-center">{description}</p>
      </CardContent>
    </Card>
  );
};

export default EraCard;