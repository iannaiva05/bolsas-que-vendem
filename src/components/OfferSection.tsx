import { CtaButton } from "./CtaButton";

const OfferSection = () => {
  return (
    <section id="oferta" className="py-16 md:py-24 bg-warm-section">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="bg-card p-8 md:p-12 rounded-3xl shadow-warm text-center border-2 border-primary/30">
          <span className="inline-block bg-primary/10 text-primary font-body font-bold text-sm px-4 py-2 rounded-full mb-6">
            ⏰ OFERTA POR TEMPO LIMITADO
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
            Comece Sua Transformação Hoje
          </h2>
          <div className="mb-6">
            <p className="font-body text-muted-foreground line-through text-lg">De R$149,90</p>
            <p className="font-display text-6xl md:text-7xl font-bold text-primary mt-2">
              R$29<span className="text-4xl">,90</span>
            </p>
            <p className="font-body text-muted-foreground mt-2">Pagamento único · Acesso vitalício</p>
          </div>

          <div className="text-left space-y-2 mb-8 max-w-sm mx-auto">
            {[
              "185 modelos exclusivos",
              "Videoaulas passo a passo",
              "Moldes em PDF",
              "5 bônus especiais",
              "Acesso vitalício",
              "Garantia de 7 dias",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 font-body text-foreground">
                <span className="text-success">✓</span>
                {item}
              </div>
            ))}
          </div>

          <CtaButton size="lg" className="w-full animate-pulse-soft">
            Quero Começar a Fazer Minhas Bolsas Hoje Mesmo
          </CtaButton>

          <p className="font-body text-sm text-muted-foreground mt-4">
            🔒 Compra segura · Acesso imediato após o pagamento
          </p>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
