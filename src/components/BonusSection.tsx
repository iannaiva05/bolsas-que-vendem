const BonusSection = () => {
  const bonuses = [
    { icon: "💰", title: "Como Precificar Suas Bolsas", desc: "Saiba exatamente quanto cobrar para ter lucro real" },
    { icon: "📱", title: "Como Vender pelo Instagram e WhatsApp", desc: "Estratégias simples para atrair clientes todos os dias" },
    { icon: "🧶", title: "Lista Completa de Materiais", desc: "Tudo o que você precisa comprar para começar" },
    { icon: "🏪", title: "Guia de Fornecedores", desc: "Onde comprar materiais baratos e de qualidade" },
    { icon: "📸", title: "Como Tirar Fotos que Vendem", desc: "Aprenda a fotografar suas bolsas de forma profissional" },
  ];

  return (
    <section className="py-16 md:py-24 bg-warm-section">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <span className="inline-block bg-highlight/20 text-highlight-foreground font-body font-semibold text-sm px-4 py-2 rounded-full mb-4">
            🎁 BÔNUS EXCLUSIVOS
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            E Você Ainda Recebe 5 Bônus Especiais
          </h2>
          <p className="font-body text-muted-foreground mt-3">
            Juntos, esses bônus valem mais de R$200 — mas são seus de graça!
          </p>
        </div>
        <div className="space-y-4">
          {bonuses.map((bonus, i) => (
            <div key={i} className="flex items-start gap-4 bg-card p-5 rounded-xl shadow-card border border-highlight/20">
              <span className="text-3xl flex-shrink-0">{bonus.icon}</span>
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground">
                  Bônus #{i + 1}: {bonus.title}
                </h3>
                <p className="font-body text-muted-foreground">{bonus.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BonusSection;
