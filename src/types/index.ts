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

export interface AdminNavLink {
  label: string;
  href: string;
  icon: "dashboard" | "products" | "orders" | "analytics";
}

export type AdminStatTone = "green" | "amber" | "muted";

export interface AdminStatCard {
  label: string;
  value: string;
  icon: "wallet" | "pending" | "users" | "memory";
  helper: {
    text: string;
    tone: AdminStatTone;
  };
}

export interface AdminTransmission {
  id: string;
  client: string;
  status: "Complete" | "Pending" | "Failed";
}

export interface AdminSalesBar {
  day: string;
  value: number;
}

export interface ProductDisplay extends Product {
  /** Label visible en la card (ej. "Hardware", "Optics") */
  displayCategory: string;
  /** Color token del label */
  categoryColor: "neon-purple" | "neon-pink" | "neon-green" | "neon-amber";
}
