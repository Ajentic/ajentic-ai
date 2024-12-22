import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className="w-full bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-3">
            <img src="/lovable-uploads/a0ee3f29-b6f2-48d4-a993-24a3eb22e46d.png" alt="Ajentic Logo" className="h-8" />
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link
              to="/ajentic-ai"
              className={`${
                isActive("/ajentic-ai")
                  ? "text-primary border-b-2 border-primary"
                  : "text-gray-600 hover:text-primary"
              } px-3 py-2 text-sm font-medium transition-colors duration-200`}
            >
              AjenticAI
            </Link>
            <Link
              to="/agentic-ai"
              className={`${
                isActive("/agentic-ai")
                  ? "text-primary border-b-2 border-primary"
                  : "text-gray-600 hover:text-primary"
              } px-3 py-2 text-sm font-medium transition-colors duration-200`}
            >
              AgenticAI
            </Link>
            <Link
              to="/about"
              className={`${
                isActive("/about")
                  ? "text-primary border-b-2 border-primary"
                  : "text-gray-600 hover:text-primary"
              } px-3 py-2 text-sm font-medium transition-colors duration-200`}
            >
              About Us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;