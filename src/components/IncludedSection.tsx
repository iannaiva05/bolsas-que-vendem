const IncludedSection = () => {
  const items = [
    { icon: "📚", title: "185 Modelos Exclusivos", desc: "Bolsas que estão vendendo muito no mercado" },
    { icon: "🎥", title: "Videoaulas Passo a Passo", desc: "Explicação detalhada de cada técnica" },
    { icon: "📄", title: "Moldes em PDF", desc: "Para imprimir e usar como guia" },
    { icon: "✨", title: "Técnicas Modernas", desc: "Pontos e acabamentos profissionais" },
    { icon: "♾️", title: "Acesso Vitalício", desc: "Assista quantas vezes quiser, pra sempre" },
    { icon: "🔄", title: "Atualizações Futuras", desc: "Novos modelos adicionados sem custo extra" },
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
          O Que Está Incluso no Curso
        </h2>
        <p className="text-center font-body text-muted-foreground mb-12">
          Tudo o que você precisa para começar a criar e vender suas bolsas.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <div key={i} className="bg-card p-6 rounded-2xl shadow-card hover:shadow-warm transition-shadow">
              <span className="text-4xl mb-4 block">{item.icon}</span>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="font-body text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IncludedSection;
