const TransformationSection = () => {
  const examples = [
    { bags: 5, price: 80, total: 400 },
    { bags: 10, price: 80, total: 800 },
    { bags: 15, price: 100, total: 1500 },
    { bags: 20, price: 120, total: 2400 },
  ];

  return (
    <section className="py-16 md:py-24 bg-warm-section">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
          Imagine o Quanto Você Pode Ganhar 💰
        </h2>
        <p className="font-body text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
          Veja quanto você pode faturar por mês vendendo suas bolsas de crochê:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {examples.map((ex, i) => (
            <div
              key={i}
              className={`p-6 rounded-2xl shadow-card transition-transform hover:scale-105 ${
                i === 3 ? "bg-primary text-primary-foreground" : "bg-card text-card-foreground"
              }`}
            >
              <p className={`font-body text-sm mb-2 ${i === 3 ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                {ex.bags} bolsas × R${ex.price}
              </p>
              <p className="font-display text-4xl font-bold">
                R${ex.total.toLocaleString("pt-BR")}
              </p>
              <p className={`font-body text-sm mt-1 ${i === 3 ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                por mês
              </p>
            </div>
          ))}
        </div>
        <p className="font-body text-muted-foreground mt-8 text-base">
          E tudo isso com um investimento de apenas <strong className="text-primary">R$29,90</strong> no curso completo.
        </p>
      </div>
    </section>
  );
};

export default TransformationSection;
