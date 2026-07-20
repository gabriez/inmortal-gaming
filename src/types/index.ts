/* ─── Inmortal Gaming — Shared Types ─── */

export type ProductCategory =
  | "game-items"
  | "virtual-currency"
  | "gift-cards"
  | "digital-services";

export type StockStatus = "available" | "low" | "out-of-stock";

export interface Product {
  id: string;
  name: string;
  description: string;
  category: ProductCategory;
  price: number;
  originalPrice?: number;
  stockStatus: StockStatus;
  image?: string;
  /** Game platform — only for game-items / virtual-currency */
  platform?: string;
  /** Card value — only for gift-cards */
  denomination?: number;
  /** Subscription length — only for digital-services */
  duration?: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface CartItem {
  productId: string;
  quantity: number;
}
