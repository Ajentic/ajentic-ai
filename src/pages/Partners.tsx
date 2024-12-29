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
              src="https://www.iterate.ai/wp-content/themes/iterate/images/iterate-logo.svg" 
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
              src="https://upload.wikimedia.org/wikipedia/commons/9/9c/Fujifilm_logo.svg" 
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