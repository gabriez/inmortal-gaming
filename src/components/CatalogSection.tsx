'use client';

import { useState, useMemo } from 'react';
import type { ProductCategory } from '@/types';
import { CATEGORIES, products } from '@/data/products';
import CategoryFilter from './CategoryFilter';
import ProductGrid from './ProductGrid';

const FILTERS = [
  { key: 'all' as const, label: 'Todos' },
  ...CATEGORIES.map((c) => ({ key: c.key as ProductCategory | 'all', label: c.label })),
];

export default function CatalogSection() {
  const [active, setActive] = useState<ProductCategory | 'all'>('all');

  const filtered = useMemo(
    () => (active === 'all' ? products : products.filter((p) => p.category === active)),
    [active],
  );

  return (
    <section
      id="catalogo"
      className="mx-auto max-w-7xl px-6 pb-24 pt-8 md:px-12"
    >
      {/* Section header */}
      <div className="mb-10">
        <h2 className="mb-2 font-display text-2xl font-semibold text-text-primary">
          Catálogo
        </h2>
        <p className="font-body text-sm text-text-secondary">
          Explora nuestros productos digitales — todos con entrega inmediata
        </p>
      </div>

      {/* Filter */}
      <div className="mb-8">
        <CategoryFilter categories={FILTERS} active={active} onChange={setActive} />
      </div>

      {/* Grid */}
      <ProductGrid products={filtered} />
    </section>
  );
}
