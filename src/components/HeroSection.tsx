import heroImage from "@/assets/hero-crochet.jpg";
import { CtaButton } from "./CtaButton";

const HeroSection = () => {
  const scrollToOffer = () => {
    document.getElementById("oferta")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden bg-hero-gradient">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          <div className="flex-1 text-center lg:text-left space-y-6">
            <div className="inline-block bg-primary/10 text-primary font-body font-semibold text-sm px-4 py-2 rounded-full">
              🔥 Oferta por tempo limitado
            </div>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
              Aprenda a Fazer Bolsas de Crochê que Podem te Gerar{" "}
              <span className="text-gradient">R$1.000 a R$3.000 por Mês</span>
            </h1>
            <p className="font-body text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0">
              185 modelos exclusivos com passo a passo completo.{" "}
              <strong className="text-foreground">Mesmo que você nunca tenha feito crochê na vida.</strong>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <CtaButton size="lg" onClick={scrollToOffer} className="animate-pulse-soft">
                Quero Começar Agora — R$29,90
              </CtaButton>
            </div>
            <p className="text-sm text-muted-foreground font-body">
              ✅ Acesso imediato · ✅ Garantia de 7 dias · ✅ Pagamento único
            </p>
          </div>
          <div className="flex-1 max-w-lg lg:max-w-xl">
            <img
              src={heroImage}
              alt="Coleção de bolsas de crochê artesanais"
              className="rounded-2xl shadow-warm w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
