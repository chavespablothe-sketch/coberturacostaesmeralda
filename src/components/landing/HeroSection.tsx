import { ChevronDown } from "lucide-react";
import heroImg from "@/assets/property/hero.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-primary">
      {/* Image with desaturated/darkened treatment to compensate for overexposed photo */}
      <img
        src={heroImg}
        alt="Cobertura Duplex Costa Esmeralda — vista panorâmica para o mar"
        className="absolute inset-0 w-full h-full object-cover brightness-[0.6] contrast-125 saturate-[0.7] scale-105"
        loading="eager"
      />

      {/* Multi-layer overlay for depth and readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/30 to-primary/80" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/50 via-transparent to-primary/30" />

      {/* Content — left-aligned editorial layout */}
      <div className="relative z-10 flex flex-col justify-end h-full px-8 md:px-16 lg:px-24 pb-24 md:pb-32">
        <div className="max-w-3xl">
          <p className="font-sans text-xs md:text-sm tracking-[0.4em] uppercase text-secondary mb-8">
            Residencial Costa Esmeralda · Agronômica, Florianópolis
          </p>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-semibold text-primary-foreground leading-[1.1] mb-3">
            A Joia da Agronômica:
          </h1>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-primary-foreground/90 leading-[1.1] mb-10">
            <span className="italic font-normal">Exclusividade e Vista Definitiva</span>
          </h1>

          <p className="text-base md:text-lg text-primary-foreground/70 font-sans font-light max-w-xl mb-10 leading-relaxed">
            Uma cobertura duplex onde o luxo encontra a inteligência financeira.
          </p>

          <a
            href="#contato"
            className="inline-flex items-center px-10 py-4 bg-secondary text-secondary-foreground font-sans text-xs md:text-sm tracking-[0.25em] uppercase hover:bg-secondary/90 transition-all duration-300"
          >
            Falar com Corretor
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <ChevronDown className="w-5 h-5 text-primary-foreground/40" />
      </div>
    </section>
  );
};

export default HeroSection;
