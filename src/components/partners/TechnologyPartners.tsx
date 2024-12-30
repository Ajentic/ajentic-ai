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
      <div className="max-w-4xl mx-auto px-4">
        <Tabs defaultValue="sales" className="w-full">
          <TabsList className="flex flex-col md:grid md:grid-cols-3 w-full gap-2 md:gap-0 bg-white/80 backdrop-blur-sm rounded-lg p-2 shadow-md">
            <TabsTrigger 
              value="sales"
              className="w-full py-4 text-base font-medium rounded-md bg-[#9b87f5]/10 hover:bg-[#9b87f5]/20 data-[state=active]:bg-[#9b87f5] data-[state=active]:text-white transition-all"
            >
              Sales
            </TabsTrigger>
            <TabsTrigger 
              value="manufacturing"
              className="w-full py-4 text-base font-medium rounded-md bg-[#33C3F0]/10 hover:bg-[#33C3F0]/20 data-[state=active]:bg-[#33C3F0] data-[state=active]:text-white transition-all"
            >
              Manufacturing
            </TabsTrigger>
            <TabsTrigger 
              value="retail"
              className="w-full py-4 text-base font-medium rounded-md bg-[#7E69AB]/10 hover:bg-[#7E69AB]/20 data-[state=active]:bg-[#7E69AB] data-[state=active]:text-white transition-all"
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