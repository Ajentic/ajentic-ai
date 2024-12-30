import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PartnerCard from "./PartnerCard";

const TechnologyPartners = () => {
  return (
    <section id="technology" className="mb-20">
      <h1 className="text-4xl md:text-5xl font-bold text-primary text-center mb-12">
        Technology Partners
      </h1>
      <div className="max-w-4xl mx-auto">
        <Tabs defaultValue="sales" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="sales">Sales</TabsTrigger>
            <TabsTrigger value="manufacturing">Manufacturing</TabsTrigger>
            <TabsTrigger value="retail">Retail</TabsTrigger>
          </TabsList>
          <TabsContent value="sales">
            <PartnerCard
              logoSrc="/lovable-uploads/41fe9399-14c4-4f5d-b3ef-1aa73aba5490.png"
              logoAlt="Amolino.ai Logo"
              description="Transforming sales processes with AI-driven solutions"
            />
          </TabsContent>
          <TabsContent value="manufacturing">
            <PartnerCard
              logoSrc="/lovable-uploads/77833e33-f7f4-4580-943b-96751692e676.png"
              logoAlt="Prodle.ai Logo"
              description="Revolutionizing manufacturing with intelligent automation"
            />
          </TabsContent>
          <TabsContent value="retail">
            <PartnerCard
              logoSrc="/lovable-uploads/bc266af7-66b3-4367-844b-60402e9d394b.png"
              logoAlt="Iterate.ai Logo"
              description="Enhancing retail experiences through AI innovation"
            />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default TechnologyPartners;