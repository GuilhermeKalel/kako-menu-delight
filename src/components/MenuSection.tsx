import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  isNew?: boolean;
  isPopular?: boolean;
}

const menuItems: MenuItem[] = [
  // Burgers
  {
    id: 1,
    name: "Kako Burger Clássico",
    description: "Hambúrguer artesanal 180g, queijo cheddar, alface, tomate e molho especial",
    price: 28.90,
    category: "Burgers",
    isPopular: true,
  },
  {
    id: 2,
    name: "Bacon Explosion",
    description: "Duplo hambúrguer, bacon crocante, cheddar cremoso e cebola caramelizada",
    price: 35.90,
    category: "Burgers",
    isNew: true,
  },
  {
    id: 3,
    name: "Veggie Supreme",
    description: "Hambúrguer de grão-de-bico, queijo vegano, rúcula e tomate seco",
    price: 26.90,
    category: "Burgers",
  },
  {
    id: 4,
    name: "Spicy Jalapeño",
    description: "Hambúrguer picante, jalapeños, pimenta calabresa e maionese ardida",
    price: 32.90,
    category: "Burgers",
    isPopular: true,
  },
  {
    id: 5,
    name: "BBQ Smash",
    description: "Hambúrguer smash, molho barbecue, onion rings e bacon",
    price: 34.90,
    category: "Burgers",
  },

  // Pizzas
  {
    id: 6,
    name: "Pizza Margherita",
    description: "Molho de tomate, mussarela de búfala, manjericão fresco e azeite",
    price: 45.90,
    category: "Pizzas",
    isPopular: true,
  },
  {
    id: 7,
    name: "Pizza Quattro Formaggi",
    description: "Mussarela, gorgonzola, parmesão e provolone",
    price: 52.90,
    category: "Pizzas",
  },
  {
    id: 8,
    name: "Pizza Pepperoni Supreme",
    description: "Pepperoni italiano, mussarela, azeitonas e orégano",
    price: 48.90,
    category: "Pizzas",
    isNew: true,
  },
  {
    id: 9,
    name: "Pizza Portuguesa",
    description: "Presunto, ovos, cebola, azeitonas e mussarela",
    price: 46.90,
    category: "Pizzas",
  },
  {
    id: 10,
    name: "Pizza Frango Catupiry",
    description: "Frango desfiado, catupiry cremoso, milho e azeitonas",
    price: 44.90,
    category: "Pizzas",
    isPopular: true,
  },

  // Sanduíches
  {
    id: 11,
    name: "Club Sandwich",
    description: "Peru, bacon, alface, tomate, queijo e maionese em pão de forma",
    price: 24.90,
    category: "Sanduíches",
  },
  {
    id: 12,
    name: "Chicken Caesar Wrap",
    description: "Frango grelhado, alface romana, parmesão e molho caesar",
    price: 22.90,
    category: "Sanduíches",
  },
  {
    id: 13,
    name: "Steak Sandwich",
    description: "Filé mignon, queijo gruyère, cebola caramelizada e mostarda dijon",
    price: 38.90,
    category: "Sanduíches",
    isNew: true,
  },

  // Porções
  {
    id: 14,
    name: "Batata Frita Grande",
    description: "Porção generosa de batatas fritas crocantes com sal marinho",
    price: 18.90,
    category: "Porções",
    isPopular: true,
  },
  {
    id: 15,
    name: "Onion Rings",
    description: "Anéis de cebola empanados e crocantes com molho especial",
    price: 16.90,
    category: "Porções",
  },
  {
    id: 16,
    name: "Chicken Wings",
    description: "Asinhas de frango crocantes com molho barbecue ou buffalo",
    price: 32.90,
    category: "Porções",
    isPopular: true,
  },
  {
    id: 17,
    name: "Nachos Supremos",
    description: "Nachos com queijo derretido, guacamole, creme azedo e jalapeños",
    price: 28.90,
    category: "Porções",
  },

  // Bebidas
  {
    id: 18,
    name: "Refrigerante Lata",
    description: "Coca-Cola, Guaraná, Fanta ou Sprite - 350ml",
    price: 5.90,
    category: "Bebidas",
  },
  {
    id: 19,
    name: "Suco Natural",
    description: "Laranja, limão, abacaxi ou morango - 500ml",
    price: 12.90,
    category: "Bebidas",
  },
  {
    id: 20,
    name: "Milkshake",
    description: "Chocolate, morango ou baunilha - 400ml",
    price: 16.90,
    category: "Bebidas",
    isPopular: true,
  },
  {
    id: 21,
    name: "Água Mineral",
    description: "Com ou sem gás - 500ml",
    price: 4.90,
    category: "Bebidas",
  },
  {
    id: 22,
    name: "Cerveja Artesanal",
    description: "Seleção de cervejas artesanais - 355ml",
    price: 14.90,
    category: "Bebidas",
  },

  // Sobremesas
  {
    id: 23,
    name: "Brownie com Sorvete",
    description: "Brownie quentinho com sorvete de baunilha e calda de chocolate",
    price: 18.90,
    category: "Sobremesas",
    isPopular: true,
  },
  {
    id: 24,
    name: "Cheesecake",
    description: "Cheesecake cremoso com calda de frutas vermelhas",
    price: 16.90,
    category: "Sobremesas",
  },
  {
    id: 25,
    name: "Pudim de Leite",
    description: "Pudim caseiro com calda de caramelo",
    price: 12.90,
    category: "Sobremesas",
  },
  {
    id: 26,
    name: "Petit Gateau",
    description: "Bolinho de chocolate com sorvete de creme",
    price: 19.90,
    category: "Sobremesas",
    isNew: true,
  },
];

const categories = ["Todos", "Burgers", "Pizzas", "Sanduíches", "Porções", "Bebidas", "Sobremesas"];

const MenuSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const filteredItems =
    selectedCategory === "Todos"
      ? menuItems
      : menuItems.filter((item) => item.category === selectedCategory);

  return (
    <section id="menu" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Nosso{" "}
            <span className="bg-[image:var(--gradient-warm)] bg-clip-text text-transparent">
              Cardápio
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore nossa variedade de pratos deliciosos, preparados com ingredientes selecionados
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <Card
              key={item.id}
              className="group hover:shadow-[var(--shadow-medium)] transition-all duration-300 hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-1 group-hover:text-primary transition-colors">
                      {item.name}
                    </h3>
                    <div className="flex gap-2 mb-2">
                      {item.isNew && (
                        <Badge variant="default" className="text-xs">
                          Novo
                        </Badge>
                      )}
                      {item.isPopular && (
                        <Badge variant="secondary" className="text-xs">
                          Popular
                        </Badge>
                      )}
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xl font-bold text-primary">
                      R$ {item.price.toFixed(2).replace(".", ",")}
                    </p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-4">{item.description}</p>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                >
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Adicionar
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
