import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToMenu = () => {
    const element = document.getElementById("menu");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToHow = () => {
    const element = document.getElementById("how-it-works");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 via-background to-accent/10 pt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-foreground">
            Sistema Digital de Pedidos
          </h1>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-primary">
            Cardápio Digital Moderno e Prático
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Acesse nosso cardápio via QR Code, faça pedidos direto do seu celular e acompanhe o status em tempo real. Experiência única e sem espera!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={scrollToMenu}>
              Ver Cardápio
            </Button>
            <Button variant="outline" size="lg" onClick={scrollToHow}>
              Saiba Mais
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
