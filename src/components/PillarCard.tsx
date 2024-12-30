import { Card } from "@/components/ui/card";

interface PillarCardProps {
  image: string;
  imageAlt: string;
  description: string;
}

const PillarCard = ({ image, imageAlt, description }: PillarCardProps) => {
  return (
    <Card className="bg-white p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105">
      <img
        src={`${image}?w=800&auto=format&fit=crop`}
        alt={imageAlt}
        className="w-full h-48 object-cover rounded-lg mb-6"
        loading="lazy"
      />
      <p className="text-lg text-gray-700">{description}</p>
    </Card>
  );
};

export default PillarCard;