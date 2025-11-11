import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Package, Clock, CheckCircle, ArrowLeft, Utensils, Truck } from "lucide-react";
import { Order } from "@/pages/AdminOrders";

const OrderTracking = () => {
  const [searchParams] = useSearchParams();
  const [order, setOrder] = useState<Order | null>(null);
  const navigate = useNavigate();
  const orderId = searchParams.get("id");

  useEffect(() => {
    if (!orderId) {
      navigate("/");
      return;
    }

    const loadOrder = () => {
      const savedOrders = localStorage.getItem("orders");
      if (savedOrders) {
        const orders: Order[] = JSON.parse(savedOrders);
        const foundOrder = orders.find((o) => o.id === orderId);
        if (foundOrder) {
          setOrder(foundOrder);
        }
      }
    };

    loadOrder();

    // Atualizar a cada 5 segundos para refletir mudanças de status
    const interval = setInterval(loadOrder, 5000);
    return () => clearInterval(interval);
  }, [orderId, navigate]);

  if (!order) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background to-accent flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardContent className="pt-6 text-center">
            <p className="text-muted-foreground">Carregando pedido...</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  const getStatusInfo = (status: Order["status"]) => {
    const statusMap = {
      pending: {
        icon: Clock,
        text: "Em Preparo",
        description: "Seu pedido está sendo preparado com carinho",
        color: "text-yellow-600",
        bgColor: "bg-yellow-100 dark:bg-yellow-900/20",
      },
      completed: {
        icon: CheckCircle,
        text: "Entregue",
        description: "Seu pedido foi entregue com sucesso!",
        color: "text-green-600",
        bgColor: "bg-green-100 dark:bg-green-900/20",
      },
      cancelled: {
        icon: Package,
        text: "Cancelado",
        description: "Este pedido foi cancelado",
        color: "text-red-600",
        bgColor: "bg-red-100 dark:bg-red-900/20",
      },
    };
    return statusMap[status];
  };

  const statusInfo = getStatusInfo(order.status);
  const StatusIcon = statusInfo.icon;

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-accent">
      <nav className="bg-background/95 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <Button variant="ghost" onClick={() => navigate("/")} className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            Voltar ao Menu
          </Button>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8 max-w-2xl">
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-2xl">Acompanhar Pedido</CardTitle>
              <Badge variant="outline" className="text-sm">
                #{order.id.slice(0, 8)}
              </Badge>
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              Feito em {new Date(order.createdAt).toLocaleString("pt-BR")}
            </p>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Status atual */}
            <div className={`rounded-lg p-6 ${statusInfo.bgColor}`}>
              <div className="flex items-center gap-4">
                <div className={`p-3 rounded-full bg-background ${statusInfo.color}`}>
                  <StatusIcon className="h-8 w-8" />
                </div>
                <div>
                  <h3 className={`text-xl font-bold ${statusInfo.color}`}>
                    {statusInfo.text}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {statusInfo.description}
                  </p>
                </div>
              </div>
            </div>

            {/* Timeline de status */}
            {order.status !== "cancelled" && (
              <div className="space-y-4">
                <h4 className="font-semibold">Progresso do Pedido</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-full ${order.status === "pending" || order.status === "completed" ? "bg-primary text-primary-foreground" : "bg-muted"}`}>
                      <Utensils className="h-4 w-4" />
                    </div>
                    <div className="flex-grow">
                      <p className="font-medium">Pedido Recebido</p>
                      <p className="text-xs text-muted-foreground">
                        {new Date(order.createdAt).toLocaleTimeString("pt-BR")}
                      </p>
                    </div>
                  </div>
                  <div className={`ml-5 w-0.5 h-6 ${order.status === "completed" ? "bg-primary" : "bg-muted"}`} />
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-full ${order.status === "completed" ? "bg-primary text-primary-foreground" : "bg-muted"}`}>
                      <Truck className="h-4 w-4" />
                    </div>
                    <div className="flex-grow">
                      <p className="font-medium">
                        {order.status === "completed" ? "Entregue" : "Aguardando Entrega"}
                      </p>
                      {order.status === "completed" && (
                        <p className="text-xs text-muted-foreground">Concluído</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Itens do pedido */}
            <div className="space-y-3">
              <h4 className="font-semibold">Itens do Pedido</h4>
              <div className="space-y-2">
                {order.items.map((item) => (
                  <div key={item.id} className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                    <div>
                      <p className="font-medium">{item.name}</p>
                      <p className="text-sm text-muted-foreground">
                        Quantidade: {item.quantity}
                      </p>
                    </div>
                    <p className="font-bold text-primary">
                      R$ {(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Total */}
            <div className="border-t pt-4">
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold">Total</span>
                <span className="text-2xl font-bold text-primary">
                  R$ {order.total.toFixed(2)}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default OrderTracking;
