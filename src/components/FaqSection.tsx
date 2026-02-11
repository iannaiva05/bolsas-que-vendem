const FaqSection = () => {
  const faqs = [
    {
      q: "Nunca fiz crochê, consigo aprender?",
      a: "Sim! O curso foi feito pensando em quem está começando do zero. As aulas são passo a passo, com explicações detalhadas e ritmo acessível.",
    },
    {
      q: "Preciso investir muito em materiais?",
      a: "Não! Para começar, você precisa de poucos materiais básicos (linha e agulha). No curso, ensinamos onde comprar barato e como economizar.",
    },
    {
      q: "É difícil aprender?",
      a: "De jeito nenhum. As videoaulas são gravadas de forma clara e objetiva. Você pode pausar, voltar e assistir quantas vezes precisar.",
    },
    {
      q: "Funciona pelo celular?",
      a: "Sim! Você pode acessar todas as aulas pelo celular, tablet ou computador. Basta ter internet.",
    },
    {
      q: "É pagamento único?",
      a: "Sim! Você paga apenas R$29,90 uma única vez e tem acesso vitalício a todo o conteúdo, incluindo futuras atualizações.",
    },
    {
      q: "Quanto tempo leva para começar a vender?",
      a: "Depende da sua dedicação, mas muitas alunas começam a vender suas primeiras bolsas em 2 a 4 semanas após iniciar o curso.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
          Perguntas Frequentes
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <details key={i} className="group bg-card rounded-xl shadow-card border border-border">
              <summary className="flex items-center justify-between p-5 cursor-pointer font-body font-semibold text-foreground list-none">
                {faq.q}
                <span className="ml-4 text-primary transition-transform group-open:rotate-45 text-2xl leading-none">+</span>
              </summary>
              <div className="px-5 pb-5">
                <p className="font-body text-muted-foreground">{faq.a}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
