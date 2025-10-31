import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import heroImage from "@/assets/hero-food.jpg";

const Hero = () => {
  const scrollToMenu = () => {
    const element = document.getElementById("menu");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/50 z-10" />
        <img
          src={heroImage}
          alt="Delicious gourmet burger"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20 pt-20">
        <div className="max-w-2xl">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
            Sabores que{" "}
            <span className="bg-[image:var(--gradient-warm)] bg-clip-text text-transparent">
              Conquistam
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 animate-fade-in [animation-delay:200ms]">
            Descubra nosso cardápio completo com pratos irresistíveis, feitos com ingredientes
            frescos e muito amor. Do clássico ao contemporâneo, temos opções para todos os gostos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in [animation-delay:400ms]">
            <Button variant="hero" size="lg" onClick={scrollToMenu}>
              Ver Cardápio
              <ChevronRight className="ml-2" />
            </Button>
            <Button variant="secondary" size="lg">
              Fazer Pedido Agora
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-20" />
    </section>
  );
};

export default Hero;
