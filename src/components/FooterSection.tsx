const FooterSection = () => {
  return (
    <footer className="py-8 bg-secondary">
      <div className="container mx-auto px-4 text-center">
        <p className="font-body text-sm text-muted-foreground">
          © {new Date().getFullYear()} · 185 Modelos de Bolsas de Crochê que Vendem · Todos os direitos reservados.
        </p>
        <p className="font-body text-xs text-muted-foreground mt-2">
          Este produto não garante a obtenção de resultados. Qualquer referência ao desempenho não é garantia de resultado futuro.
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
