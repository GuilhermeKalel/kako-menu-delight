import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-card/95 backdrop-blur-md shadow-[var(--shadow-soft)]"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl sm:text-3xl font-bold bg-[image:var(--gradient-warm)] bg-clip-text text-transparent">
              KakoMenu
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection("menu")}
              className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
            >
              Cardápio
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
            >
              Contato
            </button>
            <Button variant="hero" size="default">
              Fazer Pedido
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-card/95 backdrop-blur-md border-t border-border animate-fade-in">
          <div className="px-4 pt-2 pb-4 space-y-2">
            <button
              onClick={() => scrollToSection("home")}
              className="block w-full text-left px-4 py-3 text-foreground hover:bg-muted rounded-lg transition-colors"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection("menu")}
              className="block w-full text-left px-4 py-3 text-foreground hover:bg-muted rounded-lg transition-colors"
            >
              Cardápio
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left px-4 py-3 text-foreground hover:bg-muted rounded-lg transition-colors"
            >
              Contato
            </button>
            <Button variant="hero" size="default" className="w-full">
              Fazer Pedido
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
