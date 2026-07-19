export default function Footer() {
  return (
    <footer className="border-t border-border-subtle bg-bg-primary/95 px-6 py-12 backdrop-blur-sm md:px-12">
      <div className="mx-auto max-w-7xl">
        {/* Grid */}
        <div className="mb-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <span className="glitch inline-block text-lg font-display font-bold tracking-tight" data-text="INMORTAL">
              INMORTAL
            </span>
            <p className="mt-3 font-body text-xs leading-relaxed text-text-muted">
              Marketplace de bienes digitales para la comunidad gamer.
              Entrega inmediata por WhatsApp.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="mb-3 font-body text-xs font-semibold uppercase tracking-widest text-text-secondary">
              Productos
            </h4>
            <ul className="space-y-2">
              {['Items de Juego', 'Moneda Virtual', 'Gift Cards', 'Servicios'].map(
                (label) => (
                  <li key={label}>
                    <a
                      href="#"
                      className="font-body text-xs text-text-muted transition-colors hover:text-neon-primary"
                    >
                      {label}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>

          <div>
            <h4 className="mb-3 font-body text-xs font-semibold uppercase tracking-widest text-text-secondary">
              Soporte
            </h4>
            <ul className="space-y-2">
              {['WhatsApp', 'FAQ', 'Términos', 'Privacidad'].map((label) => (
                <li key={label}>
                  <a
                    href="#"
                    className="font-body text-xs text-text-muted transition-colors hover:text-neon-primary"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-3 font-body text-xs font-semibold uppercase tracking-widest text-text-secondary">
              Comunidad
            </h4>
            <ul className="space-y-2">
              {['Discord', 'Instagram', 'Twitter', 'TikTok'].map((label) => (
                <li key={label}>
                  <a
                    href="#"
                    className="font-body text-xs text-text-muted transition-colors hover:text-neon-primary"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border-subtle pt-6 text-center">
          <p className="font-body text-[11px] text-text-muted">
            &copy; {new Date().getFullYear()} Inmortal Gaming. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
