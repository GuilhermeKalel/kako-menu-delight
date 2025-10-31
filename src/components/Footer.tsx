const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-secondary/30 to-secondary/50 border-t py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent mb-2">
            KakoMenu
          </h3>
          <p className="text-muted-foreground mb-2">
            Sistema Digital de Pedidos - Sabores que Conquistam
          </p>
          <p className="text-sm text-muted-foreground">
            © 2024 KakoMenu. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
