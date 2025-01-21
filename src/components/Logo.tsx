import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="flex items-center space-x-3">
      <img 
        src="/lovable-uploads/317831b9-b40c-4849-8987-4eed90f32f0f.png" 
        alt="Ajentic Logo" 
        className="h-12 md:h-16"
      />
    </Link>
  );
};

export default Logo;