const GuaranteeSection = () => {
  return (
    <section className="py-16 md:py-24 bg-warm-section">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="bg-card p-8 md:p-12 rounded-3xl shadow-warm text-center border border-success/30">
          <span className="text-6xl mb-4 block">🛡️</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Garantia Incondicional de 7 Dias
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-xl mx-auto mb-6">
            Se por qualquer motivo você sentir que o curso não é pra você, basta nos enviar um e-mail
            dentro de 7 dias e devolvemos <strong className="text-foreground">100% do seu dinheiro</strong>.
            Sem perguntas, sem burocracia.
          </p>
          <p className="font-display text-xl font-semibold text-success">
            O risco é todo nosso. Você não tem nada a perder.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
