import { MemoryIcon } from "@/components/icons";

const SPECS = [
  {
    icon: <MemoryIcon className="h-5 w-5 text-neon-primary shrink-0" />,
    label: "Neural Processing Unit v4.2",
  },
  {
    icon: (
      <svg
        aria-hidden="true"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
        className="h-5 w-5 text-neon-primary shrink-0"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
        />
      </svg>
    ),
    label: "Overclocked to 12.5 THz",
  },
  {
    icon: (
      <svg
        aria-hidden="true"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
        className="h-5 w-5 text-neon-primary shrink-0"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
        />
      </svg>
    ),
    label: "Quantum Encryption Standard",
  },
];

export function ProductSpecs() {
  return (
    <div>
      {/* Specs list */}
      <div className="mb-8">
        <h3 className="font-display text-xl font-semibold text-text-primary mb-3">
          Specifications
        </h3>
        <ul className="font-body text-base text-text-secondary space-y-2">
          {SPECS.map((spec) => (
            <li key={spec.label} className="flex items-center gap-3">
              {spec.icon}
              <span>{spec.label}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Configuration Code input */}
      <div className="mb-8">
        <label
          htmlFor="config-code"
          className="block font-semibold text-[13px] text-text-muted mb-2 uppercase"
        >
          Input Configuration Code
        </label>
        <input
          id="config-code"
          type="text"
          placeholder="ENTER CODE..."
          className="w-full bg-surface-hover border border-white/10 text-text-primary font-mono text-sm px-4 py-3 rounded focus:outline-none focus:border-neon-primary focus:ring-1 focus:ring-neon-primary transition-all placeholder:text-text-muted"
        />
      </div>
    </div>
  );
}
