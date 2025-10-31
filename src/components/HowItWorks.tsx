import { QrCode, ShoppingBag, CheckCircle, Bell } from "lucide-react";

const steps = [
  {
    number: 1,
    title: "Escaneie o QR Code",
    description: "Acesse o cardápio digital direto do seu celular",
    icon: QrCode,
  },
  {
    number: 2,
    title: "Escolha os Itens",
    description: "Navegue pelo cardápio e adicione ao carrinho",
    icon: ShoppingBag,
  },
  {
    number: 3,
    title: "Finalize o Pedido",
    description: "Confirme e envie diretamente para a cozinha",
    icon: CheckCircle,
  },
  {
    number: 4,
    title: "Acompanhe o Status",
    description: "Receba notificações do preparo até a entrega",
    icon: Bell,
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
            Como Funciona
          </h2>
          <p className="text-lg text-muted-foreground">
            Processo simples e rápido para fazer seu pedido
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="text-center p-6 rounded-lg bg-card border hover:shadow-lg hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-3xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent mb-2">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">
                  {step.title}
                </h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
