import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronDown } from "lucide-react";
import { Link } from "react-scroll";

const Partners = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <nav className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50">
        <div className="flex flex-col gap-4">
          <Link
            to="reseller"
            spy={true}
            smooth={true}
            duration={500}
            className="bg-primary/10 hover:bg-primary/20 p-2 rounded-full cursor-pointer"
          >
            1
          </Link>
          <Link
            to="technology"
            spy={true}
            smooth={true}
            duration={500}
            className="bg-primary/10 hover:bg-primary/20 p-2 rounded-full cursor-pointer"
          >
            2
          </Link>
          <Link
            to="cloud"
            spy={true}
            smooth={true}
            duration={500}
            className="bg-primary/10 hover:bg-primary/20 p-2 rounded-full cursor-pointer"
          >
            3
          </Link>
        </div>
      </nav>

      <section id="reseller" className="mb-20">
        <h1 className="text-4xl md:text-5xl font-bold text-primary text-center mb-12">
          Reseller Partners
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="card-hover">
            <CardContent className="p-8 flex flex-col items-center">
              <img 
                src="/lovable-uploads/bc266af7-66b3-4367-844b-60402e9d394b.png" 
                alt="Iterate.ai Logo" 
                className="h-12 mb-6"
              />
              <p className="text-gray-600 text-center">
                Leading the way in AI innovation and digital transformation
              </p>
            </CardContent>
          </Card>

          <Card className="card-hover">
            <CardContent className="p-8 flex flex-col items-center">
              <img 
                src="/lovable-uploads/db8143d8-dc52-47fb-b78e-03487627ac30.png" 
                alt="Fujifilm Logo" 
                className="h-12 mb-6"
              />
              <p className="text-gray-600 text-center">
                Pioneering imaging and healthcare solutions
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

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
              <Card>
                <CardContent className="p-8 flex flex-col items-center">
                  <img 
                    src="/lovable-uploads/1fcced45-da7f-4037-bfe6-0808c9cecd22.png" 
                    alt="Amolino.ai Logo" 
                    className="h-12 mb-6"
                  />
                  <p className="text-gray-600 text-center">
                    Transforming sales processes with AI-driven solutions
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="manufacturing">
              <Card>
                <CardContent className="p-8 flex flex-col items-center">
                  <img 
                    src="/lovable-uploads/77833e33-f7f4-4580-943b-96751692e676.png" 
                    alt="Prodle.ai Logo" 
                    className="h-12 mb-6"
                  />
                  <p className="text-gray-600 text-center">
                    Revolutionizing manufacturing with intelligent automation
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="retail">
              <Card>
                <CardContent className="p-8 flex flex-col items-center">
                  <img 
                    src="/lovable-uploads/bc266af7-66b3-4367-844b-60402e9d394b.png" 
                    alt="Iterate.ai Logo" 
                    className="h-12 mb-6"
                  />
                  <p className="text-gray-600 text-center">
                    Enhancing retail experiences through AI innovation
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section id="cloud" className="mt-20">
        <h1 className="text-4xl md:text-5xl font-bold text-primary text-center mb-12">
          Cloud Partners
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="card-hover">
            <CardContent className="p-8 flex flex-col items-center">
              <img 
                src="/lovable-uploads/631cd443-3245-4796-9636-202d10b65952.png" 
                alt="AWS Logo" 
                className="h-12 mb-6"
              />
              <p className="text-gray-600 text-center">
                Leading cloud computing and AI services
              </p>
            </CardContent>
          </Card>

          <Card className="card-hover">
            <CardContent className="p-8 flex flex-col items-center">
              <img 
                src="/lovable-uploads/c5449c15-1bf6-44fd-a9fb-bb8669fcff72.png" 
                alt="IBM Logo" 
                className="h-12 mb-6"
              />
              <p className="text-gray-600 text-center">
                Enterprise cloud solutions and AI technologies
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Partners;