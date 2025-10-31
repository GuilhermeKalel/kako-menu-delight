import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const About = () => {
  const benefits = [
    "Redução de erros nos pedidos",
    "Comunicação eficiente entre salão e cozinha",
    "Experiência mais ágil e moderna para o cliente",
  ];

  const handleContact = () => {
    window.open("https://wa.me/5511999999999", "_blank");
  };

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-foreground text-center">
            Sobre o Sistema
          </h2>
          
          <div className="bg-card rounded-lg p-8 shadow-md mb-8">
            <p className="text-lg text-foreground mb-8 leading-relaxed">
              Desenvolvemos uma solução moderna para restaurantes que desejam otimizar o 
              atendimento e proporcionar uma experiência única aos clientes. Com nosso sistema 
              de cardápio digital, os pedidos são realizados de forma rápida, reduzindo erros e 
              melhorando a comunicação entre salão e cozinha.
            </p>

            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-foreground text-lg">{benefit}</p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Button size="lg" onClick={handleContact}>
                Entre em Contato
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
