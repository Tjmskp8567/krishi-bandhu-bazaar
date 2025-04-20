
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { LanguageToggle } from "@/components/LanguageToggle";
import { useLanguage } from "@/contexts/LanguageContext";
import { Menu, X, User } from "lucide-react";

export default function Header() {
  const { t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: t("nav.home"), path: "/" },
    { name: t("nav.farmers"), path: "/farmers" },
    { name: t("nav.investors"), path: "/investors" },
    { name: t("nav.marketplace"), path: "/marketplace" },
    { name: t("nav.retailers"), path: "/retailers" },
    { name: t("nav.education"), path: "/education" }
  ];

  return (
    <header className="bg-white shadow-sm fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-agri-green-DEFAULT">
              {t("app.name")}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-gray-700 hover:text-agri-green-DEFAULT transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Right section - Auth & Language */}
          <div className="hidden md:flex items-center space-x-4">
            <LanguageToggle />
            <Button variant="outline" size="sm">
              {t("nav.login")}
            </Button>
            <Button size="sm" className="bg-agri-green-DEFAULT hover:bg-agri-green-dark">
              {t("nav.signup")}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-4 md:hidden">
            <LanguageToggle />
            <Button variant="ghost" size="icon" onClick={toggleMenu}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white py-2 px-4 animate-fade-in">
            <nav className="flex flex-col space-y-3 pt-2 pb-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-gray-700 hover:text-agri-green-DEFAULT px-2 py-1 rounded transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex flex-col space-y-2 pt-2 border-t">
                <Button variant="outline" size="sm" className="justify-start">
                  <User className="h-4 w-4 mr-2" />
                  {t("nav.login")}
                </Button>
                <Button 
                  size="sm" 
                  className="bg-agri-green-DEFAULT hover:bg-agri-green-dark justify-start"
                >
                  {t("nav.signup")}
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
