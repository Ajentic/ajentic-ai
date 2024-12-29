import { Card, CardContent } from "@/components/ui/card";

const Partners = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl md:text-5xl font-bold text-primary text-center mb-12">
        Our Partners
      </h1>
      
      <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
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
    </div>
  );
};

export default Partners;