'use client';

import type { ProductCategory } from '@/types';

interface CategoryFilterProps {
  categories: { key: ProductCategory | 'all'; label: string }[];
  active: ProductCategory | 'all';
  onChange: (category: ProductCategory | 'all') => void;
}

export default function CategoryFilter({
  categories,
  active,
  onChange,
}: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((cat) => {
        const isActive = cat.key === active;
        return (
          <button
            key={cat.key}
            type="button"
            onClick={() => onChange(cat.key)}
            className={`rounded px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
              isActive
                ? 'bg-neon-primary text-black shadow-[0_0_12px] shadow-neon-glow'
                : 'border border-border-neon text-neon-primary hover:bg-neon-glow'
            }`}
          >
            {cat.label}
          </button>
        );
      })}
    </div>
  );
}
