'use client';

import Link from 'next/link';
import { useState } from 'react';
import type { NavLink } from '@/types';

const NAV_LINKS: NavLink[] = [
  { label: 'Catálogo', href: '#catalogo' },
  { label: 'Ofertas', href: '#ofertas' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="glass-nav fixed top-0 left-0 right-0 z-50 px-6 md:px-12">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="glitch text-2xl font-display font-bold tracking-tight"
          data-text="INMORTAL"
        >
          INMORTAL
        </Link>

        {/* Desktop nav links */}
        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-body text-sm text-text-secondary transition-colors hover:text-neon-primary"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-4">
          {/* Cart */}
          <button
            className="relative p-2 text-text-secondary transition-colors hover:text-neon-primary"
            aria-label="Carrito"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
            <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-neon-primary text-[10px] font-bold text-black">
              3
            </span>
          </button>

          {/* Login */}
          <Link
            href="/login"
            className="btn-neon hidden rounded px-4 py-2 text-xs font-semibold uppercase tracking-wider sm:inline-flex"
          >
            Ingresar
          </Link>

          {/* Mobile hamburger */}
          <button
            className="p-2 text-text-secondary transition-colors hover:text-neon-primary md:hidden"
            aria-label="Menú"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              {mobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-border-subtle bg-bg-primary/95 px-6 pb-4 pt-2 backdrop-blur-md md:hidden">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block py-2 text-sm text-text-secondary transition-colors hover:text-neon-primary"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
