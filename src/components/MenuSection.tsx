import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";

export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  image?: string;
}

const menuItems: MenuItem[] = [
  {
    id: 1,
    name: "Burger Clássico",
    description: "Hambúrguer artesanal com queijo cheddar, alface e molho especial",
    price: 32.90,
    category: "Lanches",
  },
  {
    id: 2,
    name: "Pizza Margherita",
    description: "Molho de tomate, mozzarella fresca, manjericão e azeite",
    price: 45.00,
    category: "Pizzas",
  },
  {
    id: 3,
    name: "Pasta Carbonara",
    description: "Massa italiana com bacon, ovos, parmesão e pimenta preta",
    price: 38.50,
    category: "Massas",
  },
  {
    id: 4,
    name: "Salada Caesar",
    description: "Alface romana, croutons, parmesão e molho caesar",
    price: 28.00,
    category: "Saladas",
  },
];

const categories = ["Todos", "Lanches", "Pizzas", "Massas", "Saladas"];

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
    <section id="menu" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
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
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <Card key={item.id} className="flex flex-col">
              <CardHeader>
                <div className="aspect-video bg-muted rounded-md mb-4 flex items-center justify-center">
                  <span className="text-4xl">🍽️</span>
                </div>
                <CardTitle>{item.name}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <Badge variant="secondary">{item.category}</Badge>
              </CardContent>
              <CardFooter className="flex flex-col gap-2">
                <div className="text-2xl font-bold text-primary w-full">
                  R$ {item.price.toFixed(2)}
                </div>
                <Button
                  className="w-full"
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
