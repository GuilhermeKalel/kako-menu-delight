import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, MapPin, Mail, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // WhatsApp integration
    const whatsappMessage = `Olá! Meu nome é ${formData.name}.\n\nEmail: ${formData.email}\nTelefone: ${formData.phone}\n\nMensagem: ${formData.message}`;
    const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(whatsappMessage)}`;
    
    window.open(whatsappUrl, "_blank");
    
    toast({
      title: "Redirecionando para WhatsApp",
      description: "Você será direcionado para conversar conosco pelo WhatsApp",
    });

    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleWhatsAppDirect = () => {
    const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent("Olá! Gostaria de fazer um pedido.")}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Entre em{" "}
            <span className="bg-[image:var(--gradient-warm)] bg-clip-text text-transparent">
              Contato
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tem alguma dúvida ou quer fazer um pedido? Estamos aqui para ajudar!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6 animate-slide-in-left">
            <Card className="hover:shadow-[var(--shadow-medium)] transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Telefone</h3>
                    <p className="text-muted-foreground">(11) 99999-9999</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-[var(--shadow-medium)] transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Email</h3>
                    <p className="text-muted-foreground">contato@kakomenu.com.br</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-[var(--shadow-medium)] transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Endereço</h3>
                    <p className="text-muted-foreground">
                      Rua das Delícias, 123 - Centro
                      <br />
                      São Paulo - SP, 01234-567
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Button
              variant="hero"
              size="lg"
              className="w-full"
              onClick={handleWhatsAppDirect}
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Falar pelo WhatsApp
            </Button>
          </div>

          {/* Contact Form */}
          <div className="animate-fade-in">
            <Card className="shadow-[var(--shadow-medium)]">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Nome</label>
                    <Input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Seu nome completo"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <Input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="seu@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Telefone</label>
                    <Input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="(11) 99999-9999"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Mensagem</label>
                    <Textarea
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Como podemos ajudar?"
                      rows={4}
                    />
                  </div>

                  <Button type="submit" variant="hero" size="lg" className="w-full">
                    Enviar Mensagem
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
