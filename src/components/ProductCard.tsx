import Image from "next/image";

import type { Product, ProductCategory } from "@/types";

const CATEGORY_COLORS: Record<ProductCategory, string> = {
  "game-items": "bg-neon-primary text-black",
  "virtual-currency": "bg-neon-purple text-white",
  "gift-cards": "bg-neon-green text-black",
  "digital-services": "bg-neon-amber text-black",
};

const CATEGORY_LABELS: Record<ProductCategory, string> = {
  "game-items": "Items",
  "virtual-currency": "Moneda",
  "gift-cards": "Gift Card",
  "digital-services": "Servicio",
};

const STOCK_COLORS: Record<string, string> = {
  available: "text-neon-green",
  low: "text-neon-amber",
  "out-of-stock": "text-text-muted",
};

const STOCK_LABELS: Record<string, string> = {
  available: "Disponible",
  low: "Últimas unidades",
  "out-of-stock": "Agotado",
};

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="neon-card flex flex-col overflow-hidden">
      {/* Image */}
      {/* TODO: delete unoptimized property */}
      {product.image && (
        <div className="relative aspect-[8/5] w-full overflow-hidden bg-bg-surface">
          <Image
            src={product.image}
            alt={product.name}
            fill
            unoptimized={true}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          {/* Overlay gradient */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg-surface/60 to-transparent" />
        </div>
      )}

      {/* Content */}
      <div className="flex flex-1 flex-col p-5 pt-4">
        {/* Badge */}
        <div className="mb-3 flex items-start justify-between gap-2">
          <span
            className={`rounded px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ${CATEGORY_COLORS[product.category]}`}
          >
            {CATEGORY_LABELS[product.category]}
          </span>
          <span
            className={`whitespace-nowrap text-[11px] font-medium ${STOCK_COLORS[product.stockStatus]}`}
          >
            {STOCK_LABELS[product.stockStatus]}
          </span>
        </div>

        {/* Name */}
        <h3 className="mb-1 font-display text-base font-semibold text-text-primary">
          {product.name}
        </h3>

        {/* Description */}
        <p className="mb-1 flex-1 text-sm leading-relaxed text-text-secondary">
          {product.description}
        </p>

        {/* Platform / denomination / duration */}
        {product.platform && (
          <p className="mb-3 text-xs text-text-muted">{product.platform}</p>
        )}
        {product.denomination && (
          <p className="mb-3 text-xs text-text-muted">
            ${product.denomination} USD
          </p>
        )}
        {product.duration && (
          <p className="mb-3 text-xs text-text-muted">{product.duration}</p>
        )}

        {/* Price + CTA */}
        <div className="mt-auto flex items-center justify-between gap-3 border-t border-border-subtle pt-3">
          <div className="flex items-baseline gap-2">
            <span className="font-mono text-lg font-bold text-neon-primary">
              ${product.price.toFixed(2)}
            </span>
            {product.originalPrice && (
              <span className="font-mono text-sm text-text-muted line-through">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>
          <button
            type="button"
            disabled={product.stockStatus === "out-of-stock"}
            className="btn-neon rounded px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider disabled:cursor-not-allowed disabled:opacity-40"
          >
            {product.stockStatus === "out-of-stock" ? "Agotado" : "Añadir"}
          </button>
        </div>
      </div>
    </article>
  );
}
