import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import burgerClassico from "@/assets/burger-classico.jpg";
import pizzaMargherita from "@/assets/pizza-margherita.jpg";
import pastaCarbonara from "@/assets/pasta-carbonara.jpg";
import saladaCaesar from "@/assets/salada-caesar.jpg";
import baconBurger from "@/assets/bacon-burger.jpg";
import pizzaPepperoni from "@/assets/pizza-pepperoni.jpg";
import frangoGrelhado from "@/assets/frango-grelhado.jpg";
import batataFrita from "@/assets/batata-frita.jpg";
import veggieBurger from "@/assets/veggie-burger.jpg";
import xTudo from "@/assets/x-tudo.jpg";
import pizzaCalabresa from "@/assets/pizza-calabresa.jpg";
import pizza4Queijos from "@/assets/pizza-4queijos.jpg";
import pizzaPortuguesa from "@/assets/pizza-portuguesa.jpg";
import penneMolhoBranco from "@/assets/penne-molho-branco.jpg";
import espagueteBolonhesa from "@/assets/espaguete-bolonhesa.jpg";
import lasagna from "@/assets/lasagna.jpg";
import saladaTropical from "@/assets/salada-tropical.jpg";
import saladaCaprese from "@/assets/salada-caprese.jpg";
import onionRings from "@/assets/onion-rings.jpg";
import chickenWings from "@/assets/chicken-wings.jpg";

export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
}

const menuItems: MenuItem[] = [
  // Lanches
  {
    id: 1,
    name: "Burger Clássico",
    description: "Hambúrguer artesanal com queijo cheddar, alface e molho especial",
    price: 32.90,
    category: "Lanches",
    image: burgerClassico,
  },
  {
    id: 2,
    name: "Bacon Explosion",
    description: "Duplo hambúrguer, bacon crocante, cheddar cremoso e cebola caramelizada",
    price: 38.90,
    category: "Lanches",
    image: baconBurger,
  },
  {
    id: 3,
    name: "Frango Grelhado",
    description: "Peito de frango grelhado, queijo, alface, tomate e maionese caseira",
    price: 29.90,
    category: "Lanches",
    image: frangoGrelhado,
  },
  {
    id: 4,
    name: "Veggie Supreme",
    description: "Hambúrguer de grão-de-bico, queijo vegano, rúcula e tomate seco",
    price: 27.90,
    category: "Lanches",
    image: veggieBurger,
  },
  {
    id: 5,
    name: "X-Tudo Especial",
    description: "Hambúrguer, ovo, bacon, presunto, queijo, salada completa",
    price: 35.90,
    category: "Lanches",
    image: xTudo,
  },
  
  // Pizzas
  {
    id: 6,
    name: "Pizza Margherita",
    description: "Molho de tomate, mozzarella fresca, manjericão e azeite",
    price: 45.00,
    category: "Pizzas",
    image: pizzaMargherita,
  },
  {
    id: 7,
    name: "Pizza Pepperoni",
    description: "Pepperoni italiano, mussarela, azeitonas e orégano",
    price: 52.00,
    category: "Pizzas",
    image: pizzaPepperoni,
  },
  {
    id: 8,
    name: "Pizza Calabresa",
    description: "Calabresa artesanal, cebola, mussarela e azeitonas",
    price: 48.00,
    category: "Pizzas",
    image: pizzaCalabresa,
  },
  {
    id: 9,
    name: "Pizza 4 Queijos",
    description: "Mussarela, gorgonzola, parmesão e provolone",
    price: 55.00,
    category: "Pizzas",
    image: pizza4Queijos,
  },
  {
    id: 10,
    name: "Pizza Portuguesa",
    description: "Presunto, ovos, cebola, azeitonas e mussarela",
    price: 50.00,
    category: "Pizzas",
    image: pizzaPortuguesa,
  },
  
  // Massas
  {
    id: 11,
    name: "Pasta Carbonara",
    description: "Massa italiana com bacon, ovos, parmesão e pimenta preta",
    price: 38.50,
    category: "Massas",
    image: pastaCarbonara,
  },
  {
    id: 12,
    name: "Penne ao Molho Branco",
    description: "Penne com molho branco cremoso, champignon e parmesão",
    price: 36.00,
    category: "Massas",
    image: penneMolhoBranco,
  },
  {
    id: 13,
    name: "Espaguete à Bolonhesa",
    description: "Espaguete com molho de carne moída, tomate e ervas",
    price: 34.00,
    category: "Massas",
    image: espagueteBolonhesa,
  },
  {
    id: 14,
    name: "Lasagna Especial",
    description: "Lasanha de carne com molho bechamel e queijo gratinado",
    price: 42.00,
    category: "Massas",
    image: lasagna,
  },
  
  // Saladas
  {
    id: 15,
    name: "Salada Caesar",
    description: "Alface romana, croutons, parmesão e molho caesar",
    price: 28.00,
    category: "Saladas",
    image: saladaCaesar,
  },
  {
    id: 16,
    name: "Salada Tropical",
    description: "Mix de folhas, manga, abacaxi, castanhas e molho de maracujá",
    price: 32.00,
    category: "Saladas",
    image: saladaTropical,
  },
  {
    id: 17,
    name: "Salada Caprese",
    description: "Tomate, mussarela de búfala, manjericão e azeite",
    price: 30.00,
    category: "Saladas",
    image: saladaCaprese,
  },
  
  // Porções
  {
    id: 18,
    name: "Batata Frita Grande",
    description: "Porção generosa de batatas fritas crocantes",
    price: 22.00,
    category: "Porções",
    image: batataFrita,
  },
  {
    id: 19,
    name: "Onion Rings",
    description: "Anéis de cebola empanados e crocantes",
    price: 24.00,
    category: "Porções",
    image: onionRings,
  },
  {
    id: 20,
    name: "Chicken Wings",
    description: "Asinhas de frango com molho barbecue ou buffalo",
    price: 35.00,
    category: "Porções",
    image: chickenWings,
  },
];

const categories = ["Todos", "Lanches", "Pizzas", "Massas", "Saladas", "Porções"];

interface MenuSectionProps {
  onAddToCart: (item: MenuItem) => void;
}

const MenuSection = ({ onAddToCart }: MenuSectionProps) => {
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const filteredItems = selectedCategory === "Todos"
    ? menuItems
    : menuItems.filter((item) => item.category === selectedCategory);

  const handleAddToCart = (item: MenuItem) => {
    onAddToCart(item);
    toast.success(`${item.name} adicionado ao carrinho!`);
  };

  return (
    <section id="menu" className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
            Nosso Cardápio
          </h2>
          <p className="text-lg text-muted-foreground">
            Explore nossas deliciosas opções preparadas com ingredientes frescos
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className="rounded-full transition-all hover:scale-105"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <Card key={item.id} className="flex flex-col overflow-hidden group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="aspect-square overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg group-hover:text-primary transition-colors">
                  {item.name}
                </CardTitle>
                <CardDescription className="text-sm line-clamp-2">
                  {item.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow pt-0">
                <Badge variant="secondary" className="mb-2">{item.category}</Badge>
              </CardContent>
              <CardFooter className="flex flex-col gap-2 pt-0">
                <div className="text-2xl font-bold text-primary w-full">
                  R$ {item.price.toFixed(2)}
                </div>
                <Button
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                  onClick={() => handleAddToCart(item)}
                >
                  + Adicionar
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
