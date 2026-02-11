const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Maria Souza",
      location: "São Paulo, SP",
      text: "Nunca tinha feito crochê na vida. Em 3 semanas já estava vendendo minhas primeiras bolsas no Instagram. No primeiro mês faturei R$1.200!",
      emoji: "👩‍🦱",
    },
    {
      name: "Ana Carolina",
      location: "Belo Horizonte, MG",
      text: "Eu estava desempregada e precisando muito de uma renda. Esse curso mudou minha vida. Hoje faço bolsas sob encomenda e já tenho clientes fixas.",
      emoji: "👩",
    },
    {
      name: "Dona Francisca",
      location: "Recife, PE",
      text: "Tenho 58 anos e achei que não ia conseguir. Mas as aulas são tão bem explicadas que aprendi rápido. Já vendi mais de 40 bolsas!",
      emoji: "👵",
    },
    {
      name: "Juliana Mendes",
      location: "Curitiba, PR",
      text: "Já sabia o básico de crochê, mas não sabia quais modelos vendem. Com os 185 modelos do curso, sempre tenho novidades pra oferecer.",
      emoji: "👩‍🎨",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
          Veja o Que Nossas Alunas Estão Dizendo
        </h2>
        <p className="text-center font-body text-muted-foreground mb-12">
          Histórias reais de mulheres que transformaram suas vidas com o crochê.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-card p-6 rounded-2xl shadow-card border border-border">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl">{t.emoji}</span>
                <div>
                  <p className="font-display font-semibold text-foreground">{t.name}</p>
                  <p className="font-body text-sm text-muted-foreground">{t.location}</p>
                </div>
              </div>
              <p className="font-body text-foreground italic">"{t.text}"</p>
              <div className="flex gap-1 mt-3">
                {[...Array(5)].map((_, j) => (
                  <span key={j} className="text-highlight">⭐</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
