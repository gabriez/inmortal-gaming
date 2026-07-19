'use client';

import NodeBackground from './NodeBackground';

/* Deterministic heights to avoid hydration mismatch */
const WAVEFORM_HEIGHTS = [32, 48, 24, 64, 40, 56, 28, 44];

export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Animated neural node background */}
      <NodeBackground />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        {/* Kicker */}
        <span className="mb-6 inline-block font-mono text-xs font-semibold uppercase tracking-[0.15em] text-neon-primary">
          🎮 MARKETPLACE DIGITAL
        </span>

        {/* Headline */}
        <h1 className="mb-6 font-display font-bold text-glow text-balance">
          <span className="text-4xl leading-[1.1] text-text-primary md:text-5xl lg:text-7xl">
            Bienes Digitales para{' '}
          </span>
          <span
            className="glitch mt-2 block text-4xl leading-[1.1] md:text-5xl lg:text-7xl"
            data-text="Gamers"
          >
            Gamers
          </span>
        </h1>

        {/* Subheadline */}
        <p className="mx-auto mb-8 max-w-2xl font-body text-lg text-text-secondary md:text-xl">
          El catálogo más completo de ítems, monedas virtuales, gift cards y
          servicios digitales. Compra seguro, recibe al instante.
        </p>

        {/* Waveform equalizer */}
        <div className="mb-10 flex h-16 items-end justify-center gap-[3px]">
          {WAVEFORM_HEIGHTS.map((height, i) => (
            <div
              key={i}
              className="waveform-bar"
              style={{ height: `${height}px` }}
            />
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#catalogo"
            className="btn-neon-primary rounded px-8 py-3 text-sm font-semibold uppercase tracking-wider"
          >
            Explorar Catálogo
          </a>
          <a
            href="#ofertas"
            className="btn-neon rounded px-8 py-3 text-sm font-semibold uppercase tracking-wider"
          >
            Ver Ofertas
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce">
        <svg
          className="h-6 w-6 text-neon-primary opacity-50"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </div>
    </section>
  );
}
