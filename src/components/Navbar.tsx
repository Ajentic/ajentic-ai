import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const isActive = (path: string) => location.pathname === path;
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  return (
    <nav className="w-full bg-white shadow-sm relative">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-3">
            <img src="/lovable-uploads/a0ee3f29-b6f2-48d4-a993-24a3eb22e46d.png" alt="Ajentic Logo" className="h-8" />
          </Link>
          
          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-primary hover:bg-gray-100"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
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
            <Link
              to="/services"
              className={`${
                isActive("/services")
                  ? "text-primary border-b-2 border-primary"
                  : "text-gray-600 hover:text-primary"
              } px-3 py-2 text-sm font-medium transition-colors duration-200`}
            >
              Services
            </Link>
            <Link
              to="/partners"
              className={`${
                isActive("/partners")
                  ? "text-primary border-b-2 border-primary"
                  : "text-gray-600 hover:text-primary"
              } px-3 py-2 text-sm font-medium transition-colors duration-200`}
            >
              Partners
            </Link>
            <Link
              to="/team"
              className={`${
                isActive("/team")
                  ? "text-primary border-b-2 border-primary"
                  : "text-gray-600 hover:text-primary"
              } px-3 py-2 text-sm font-medium transition-colors duration-200`}
            >
              Team
            </Link>
            <Link
              to="/contact"
              className={`${
                isActive("/contact")
                  ? "text-primary border-b-2 border-primary"
                  : "text-gray-600 hover:text-primary"
              } px-3 py-2 text-sm font-medium transition-colors duration-200`}
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg z-50">
            <div className="flex flex-col space-y-2 px-4 py-4">
              <Link
                to="/about"
                onClick={toggleMenu}
                className={`${
                  isActive("/about")
                    ? "bg-primary text-white"
                    : "text-gray-600 hover:bg-primary/5"
                } px-4 py-3 rounded-md text-base font-medium transition-colors duration-200`}
              >
                About Us
              </Link>
              <Link
                to="/services"
                onClick={toggleMenu}
                className={`${
                  isActive("/services")
                    ? "bg-primary text-white"
                    : "text-gray-600 hover:bg-primary/5"
                } px-4 py-3 rounded-md text-base font-medium transition-colors duration-200`}
              >
                Services
              </Link>
              <Link
                to="/partners"
                onClick={toggleMenu}
                className={`${
                  isActive("/partners")
                    ? "bg-primary text-white"
                    : "text-gray-600 hover:bg-primary/5"
                } px-4 py-3 rounded-md text-base font-medium transition-colors duration-200`}
              >
                Partners
              </Link>
              <Link
                to="/team"
                onClick={toggleMenu}
                className={`${
                  isActive("/team")
                    ? "bg-primary text-white"
                    : "text-gray-600 hover:bg-primary/5"
                } px-4 py-3 rounded-md text-base font-medium transition-colors duration-200`}
              >
                Team
              </Link>
              <Link
                to="/contact"
                onClick={toggleMenu}
                className={`${
                  isActive("/contact")
                    ? "bg-primary text-white"
                    : "text-gray-600 hover:bg-primary/5"
                } px-4 py-3 rounded-md text-base font-medium transition-colors duration-200`}
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;