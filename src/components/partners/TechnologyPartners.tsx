import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PartnerCard from "./PartnerCard";
import { useIsMobile } from "@/hooks/use-mobile";

const TechnologyPartners = () => {
  const isMobile = useIsMobile();

  return (
    <section id="technology" className="mb-20">
      <h1 className="text-4xl md:text-5xl font-bold text-primary text-center mb-12">
        Technology Partners
      </h1>
      <div className="max-w-4xl mx-auto">
        <Tabs defaultValue="sales" className="w-full">
          <TabsList className={`grid w-full ${isMobile ? 'grid-cols-1 gap-2' : 'grid-cols-3'}`}>
            <TabsTrigger 
              value="sales"
              className={`${isMobile ? 'py-3 text-base' : ''}`}
            >
              Sales
            </TabsTrigger>
            <TabsTrigger 
              value="manufacturing"
              className={`${isMobile ? 'py-3 text-base' : ''}`}
            >
              Manufacturing
            </TabsTrigger>
            <TabsTrigger 
              value="retail"
              className={`${isMobile ? 'py-3 text-base' : ''}`}
            >
              Retail
            </TabsTrigger>
          </TabsList>
          <TabsContent value="sales" className="mt-6">
            <a 
              href="https://amolino.ai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block hover:opacity-90 transition-opacity"
            >
              <PartnerCard
                logoSrc="/lovable-uploads/41fe9399-14c4-4f5d-b3ef-1aa73aba5490.png"
                logoAlt="Amolino.ai Logo"
                description="Transforming sales processes with AI-driven solutions"
              />
            </a>
          </TabsContent>
          <TabsContent value="manufacturing" className="mt-6">
            <a 
              href="https://prodle.ai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block hover:opacity-90 transition-opacity"
            >
              <PartnerCard
                logoSrc="/lovable-uploads/4dbf2868-09a2-4654-b035-7addd43d5cb2.png"
                logoAlt="Prodle.ai Logo"
                description="Revolutionizing manufacturing with intelligent automation"
              />
            </a>
          </TabsContent>
          <TabsContent value="retail" className="mt-6">
            <a 
              href="https://iterate.ai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block hover:opacity-90 transition-opacity"
            >
              <PartnerCard
                logoSrc="/lovable-uploads/bc266af7-66b3-4367-844b-60402e9d394b.png"
                logoAlt="Iterate.ai Logo"
                description="Enhancing retail experiences through AI innovation"
              />
            </a>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default TechnologyPartners;