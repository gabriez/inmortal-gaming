import type { Product, ProductCategory } from "@/types";

const IMG = "https://placehold.co/400x250/12141f/00f0ff";

export const CATEGORIES: { key: ProductCategory; label: string }[] = [
  { key: "game-items", label: "Items de Juego" },
  { key: "virtual-currency", label: "Moneda Virtual" },
  { key: "gift-cards", label: "Gift Cards" },
  { key: "digital-services", label: "Servicios Digitales" },
];

export const products: Product[] = [
  /* ─── Game Items ─── */
  {
    id: "sk-001",
    name: "Legendary Dragon Blade",
    description: "Espada legendaria con estadísticas mejoradas +30% daño",
    category: "game-items",
    price: 24.99,
    originalPrice: 34.99,
    stockStatus: "available",
    image: `${IMG}?text=Dragon+Blade`,
    platform: "PC",
  },
  {
    id: "sk-002",
    name: "Phantom Steed Mount",
    description: "Montura espectral exclusiva, movimiento +40%",
    category: "game-items",
    price: 14.99,
    stockStatus: "low",
    image: `${IMG}?text=Phantom+Steed`,
    platform: "PlayStation",
  },
  {
    id: "sk-003",
    name: "Cosmic Armor Set",
    description: "Set de armadura completo con efecto visual cósmico",
    category: "game-items",
    price: 34.99,
    stockStatus: "available",
    image: `${IMG}?text=Cosmic+Armor`,
    platform: "Xbox",
  },

  /* ─── Virtual Currency ─── */
  {
    id: "vc-001",
    name: "V-Bucks 13.500",
    description: "Paquete masivo de moneda virtual para la tienda",
    category: "virtual-currency",
    price: 79.99,
    stockStatus: "available",
    image: `${IMG}?text=V-Bucks`,
  },
  {
    id: "vc-002",
    name: "RP 6.500",
    description: "Puntos Riot para desbloquear campeones y skins",
    category: "virtual-currency",
    price: 49.99,
    stockStatus: "available",
    image: `${IMG}?text=RP+6500`,
  },
  {
    id: "vc-003",
    name: "COD Points 5.000",
    description: "Puntos Call of Duty para pase de batalla y bundles",
    category: "virtual-currency",
    price: 39.99,
    stockStatus: "low",
    image: `${IMG}?text=COD+Points`,
  },

  /* ─── Gift Cards ─── */
  {
    id: "gc-001",
    name: "Steam Gift Card",
    description: "Saldo para tu cuenta de Steam",
    category: "gift-cards",
    price: 50.0,
    stockStatus: "available",
    image: `${IMG}?text=Steam+Card`,
    denomination: 50,
  },
  {
    id: "gc-002",
    name: "PlayStation Store Card",
    description: "Saldo para PlayStation Network",
    category: "gift-cards",
    price: 25.0,
    stockStatus: "available",
    image: `${IMG}?text=PS+Card`,
    denomination: 25,
  },
  {
    id: "gc-003",
    name: "Xbox Gift Card",
    description: "Saldo para Microsoft Store",
    category: "gift-cards",
    price: 100.0,
    stockStatus: "out-of-stock",
    image: `${IMG}?text=Xbox+Card`,
    denomination: 100,
  },

  /* ─── Digital Services ─── */
  {
    id: "ds-001",
    name: "Xbox Game Pass Ultimate",
    description: "Acceso ilimitado a cientos de juegos + EA Play",
    category: "digital-services",
    price: 14.99,
    stockStatus: "available",
    image: `${IMG}?text=Game+Pass`,
    duration: "1 mes",
  },
  {
    id: "ds-002",
    name: "PlayStation Plus Extra",
    description: "Juegos mensuales, multijugador y catálogo extendido",
    category: "digital-services",
    price: 13.99,
    stockStatus: "available",
    image: `${IMG}?text=PS+Plus`,
    duration: "1 mes",
  },
  {
    id: "ds-003",
    name: "Nintendo Switch Online",
    description: "Multijugador online + catálogo de juegos retro",
    category: "digital-services",
    price: 3.99,
    stockStatus: "available",
    image: `${IMG}?text=Switch+Online`,
    duration: "1 mes",
  },
];
