import { Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-[image:var(--gradient-warm)] bg-clip-text text-transparent">
              KakoMenu
            </h3>
            <p className="text-secondary-foreground/80">
              Sabores que conquistam. Qualidade que você merece.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-secondary-foreground/80 hover:text-primary transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#menu" className="text-secondary-foreground/80 hover:text-primary transition-colors">
                  Cardápio
                </a>
              </li>
              <li>
                <a href="#contact" className="text-secondary-foreground/80 hover:text-primary transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4">Redes Sociais</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="bg-secondary-foreground/10 p-2 rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-secondary-foreground/10 p-2 rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-secondary-foreground/10 p-2 rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 pt-8 text-center text-sm text-secondary-foreground/60">
          <p>&copy; 2025 KakoMenu. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
