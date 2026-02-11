const PainSection = () => {
  return (
    <section className="bg-warm-section py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
          Você se identifica com alguma dessas situações?
        </h2>
        <p className="text-center text-muted-foreground font-body mb-12">
          Se a resposta for sim para qualquer uma delas, esse curso foi feito pra você.
        </p>
        <div className="space-y-6">
          {[
            "Você sente que o dinheiro nunca é suficiente no final do mês...",
            "Quer trabalhar de casa, mas não sabe por onde começar...",
            "Já tentou outras formas de renda extra, mas nada deu certo...",
            "Tem medo de não conseguir aprender algo novo...",
            "Depende financeiramente de alguém e sonha com sua independência...",
            "Gosta de trabalhos manuais, mas não sabe como transformar isso em dinheiro...",
          ].map((pain, i) => (
            <div
              key={i}
              className="flex items-start gap-4 bg-card p-5 rounded-xl shadow-card"
            >
              <span className="text-primary text-2xl mt-0.5">😔</span>
              <p className="font-body text-foreground text-base md:text-lg">
                {pain}
              </p>
            </div>
          ))}
        </div>
        <p className="text-center font-display text-xl md:text-2xl font-semibold text-primary mt-12">
          Se você se identificou, continue lendo. <br />A solução está logo abaixo. 👇
        </p>
      </div>
    </section>
  );
};

export default PainSection;
