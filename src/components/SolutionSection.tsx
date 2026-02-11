import showcaseImage from "@/assets/crochet-bags-showcase.jpg";

const SolutionSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 max-w-md">
            <img
              src={showcaseImage}
              alt="Bolsas de crochê exclusivas"
              className="rounded-2xl shadow-card w-full"
            />
          </div>
          <div className="flex-1 space-y-6">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Apresentamos o curso:{" "}
              <span className="text-gradient">185 Modelos de Bolsas de Crochê que Vendem</span>
            </h2>
            <p className="font-body text-lg text-muted-foreground">
              Um método prático e completo para você aprender a criar bolsas de crochê
              lindas e lucrativas — do zero ao avançado.
            </p>
            <ul className="space-y-3">
              {[
                "Passo a passo detalhado em vídeo",
                "185 modelos que realmente vendem no mercado",
                "Do básico ao avançado — perfeito para iniciantes",
                "Técnicas modernas e profissionais",
                "Acesso vitalício — aprenda no seu ritmo",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 font-body text-foreground">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-success flex items-center justify-center text-success-foreground text-sm">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
