import Image from "next/image";

export function LandingHero() {
  return (
    <section className="relative overflow-hidden rounded-xl bg-bg-surface border-l border-neon-primary/31 mb-12 md:mb-13">
      {/* Background image with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-bg-primary to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-0">
        <Image
          src="/level-up-bg.jpg"
          alt=""
          fill
          priority
          className="object-cover opacity-40 mix-blend-screen"
          aria-hidden="true"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 p-8 md:p-16 max-w-2xl flex flex-col items-start gap-4">
        {/* Kicker */}
        <span className="inline-block px-3 py-1 border border-neon-amber text-neon-amber font-mono text-[10px] xs:text-sm uppercase tracking-widest bg-neon-amber/10 rounded-sm">
          NEURAL LINK ACTIVE
        </span>

        {/* Headline */}
        <h1 className="font-display font-bold text-2xl xs:text-4xl md:text-6xl lg:text-7xl text-neon-primary uppercase leading-[1.1]">
          LEVEL UP
          <br />
          YOUR REALITY
        </h1>

        {/* Subheadline */}
        <p className="font-body text-lg text-text-secondary max-w-lg border-l-2 border-neon-primary/50 pl-4">
          Equip the latest cyberware. Access top-tier gaming gear designed for
          maximum overdrive. Do not compromise
        </p>

        {/* CTA */}
        <a
          href="#catalogo"
          className="mt-4 px-8 py-3 bg-neon-primary text-bg-primary font-display text-sm xs:text-xl font-bold uppercase tracking-wide hover:scale-105 hover:shadow-[0_0_15px_var(--neon-glow-strong)] transition-all duration-300"
        >
          ENTER CATALOG
        </a>
      </div>
    </section>
  );
}
