# Inmortal Gaming — Design System

## Brand Identity

**Inmortal Gaming** is a digital gaming goods marketplace with a cyberpunk Edgerunners aesthetic. Neon blue on deep black, with glitch effects, and a futuristic urban feel. The brand communicates speed, digital-native fluency, and the endless energy of gaming culture.

---

## Color Palette

| Token | Hex | Usage |
|---|---|---|
| `--bg-primary` | `#0a0b10` | Main background — deep midnight |
| `--bg-surface` | `#12141f` | Cards, panels, elevated surfaces |
| `--bg-surface-hover` | `#1a1d2e` | Hover state for surfaces |
| `--bg-elevated` | `#1e2240` | Modals, dropdowns, nav bars |
| `--neon-primary` | `#00f0ff` | Primary cyan — CTAs, links, accents, borders |
| `--neon-glow` | `rgba(0, 240, 255, 0.15)` | Glow effect for neon elements |
| `--neon-purple` | `#7b2dff` | Secondary accent — category badges, highlights |
| `--neon-pink` | `#ff2d7b` | Tertiary accent — special offers, hot tags |
| `--neon-green` | `#00ff88` | Success — stock available, payment confirmed |
| `--neon-amber` | `#ffbb00` | Warning — low stock, pending actions |
| `--text-primary` | `#e8e8f0` | Main body text |
| `--text-secondary` | `#8888aa` | Muted text, labels, metadata |
| `--text-muted` | `#555577` | Placeholder, disabled state |
| `--border-subtle` | `rgba(255, 255, 255, 0.06)` | Default borders |
| `--border-neon` | `rgba(0, 240, 255, 0.3)` | Neon accent borders |

---

## Typography

| Role | Font | Weight | Size Scale |
|---|---|---|---|
| Display / Hero | Space Grotesk | 700 (Bold) | 64px → 32px (responsive) |
| Headings (h1-h3) | Space Grotesk | 600 (Semibold) | 32px, 24px, 20px |
| Subheadings | Space Grotesk | 500 (Medium) | 18px |
| Body | Inter | 400 (Regular) | 16px, 14px |
| Labels / Buttons | Inter | 600 (Semibold) | 14px, 13px |
| Data / Mono | JetBrains Mono | 400 (Regular) | 14px, 12px |
| Price | JetBrains Mono | 700 (Bold) | 20px |

### Type Scale

```
display: 64px/1.1 — Hero title
h1:      32px/1.2 — Section titles
h2:      24px/1.3 — Card titles
h3:      20px/1.4 — Subsection titles
body-lg: 18px/1.5 — Intro paragraphs
body:    16px/1.6 — Regular text
body-sm: 14px/1.5 — Captions, metadata
label:   13px/1.4 — Buttons, badges, small labels
mono:    14px/1.5 — Prices, IDs, technical data
```

---

## Spacing

Based on a 4px unit grid:
- 4px (xs), 8px (sm), 12px (md), 16px (lg), 24px (xl), 32px (2xl), 48px (3xl), 64px (4xl)

---

## Border Radius

- Cards: 8px
- Buttons: 4px
- Badges: 4px
- Inputs: 6px
- Modal: 12px

---

## Signature Visual Elements

### 1. Glitch Text Effect
The "INMORTAL" wordmark and key headlines use a subtle glitch animation:
- Text rendered in neon cyan
- CSS pseudo-elements create offset "ghost" copies in magenta and cyan
- Animation cycles a 100ms offset shift every 4 seconds

### 2. Neon Waveform Equalizer
Hero section features a dynamic waveform visual:
- Vertical bars of varying heights
- Neon cyan gradient fill (top → bottom: #00f0ff → transparent)
- Gentle pulsing animation
- 8 bars, asymmetric heights

### 3. Scanline Overlay
A subtle repeating horizontal line pattern over the background:
- 1px lines at 4px intervals
- White at 3% opacity
- Creates CRT monitor texture

### 4. Particle Grid Background
A subtle dot grid pattern in the hero:
- 20px grid spacing
- #00f0ff dots at 5% opacity
- Subtle parallax movement on scroll

### 5. Left Border Glow Cards
Each product card has a 1px left border in neon cyan with a box-shadow glow extending 8px to the right.

---

## Component Design

### Buttons

**Primary (CTA)** — `bg-neon-primary text-black font-semibold`
- Background: #00f0ff
- Text: #0a0b10 (black)
- Hover: Brighten glow, slight scale (1.02)
- Active: Darken to #00ccdd

**Secondary (Outline)** — `border-neon-primary text-neon-primary bg-transparent`
- Border: 1px solid #00f0ff
- Text: #00f0ff
- Background: transparent
- Hover: Background fill with 10% opacity glow

**Danger** — `bg-neon-pink`
- For remove/delete actions

### Cards

- Background: #12141f
- Border-radius: 8px
- Left accent border: 1px solid #00f0ff with 8px glow
- Padding: 16px
- Subtle inner shadow

### Navigation

- Fixed top bar
- Background: rgba(10, 11, 16, 0.85) with backdrop-blur
- Bottom border: 1px solid rgba(255, 255, 255, 0.06)

### Input Fields

- Background: #1a1d2e
- Border: 1px solid #2a2d4e
- Focus: Border becomes #00f0ff with glow
- Text: #e8e8f0
- Placeholder: #555577

### Badges

- 4px border-radius
- Padding: 2px 8px
- Category badges use tertiary accent colors
- Status badges use neon-green (active) or muted (inactive)

---

## Screens

### 1. Landing Page / Catalog (Desktop)
Hero + product catalog grid with category filtering, 3-column card layout.

### 2. Product Detail (Desktop)
Full product view with image, specs, pricing, stock indicator, and "Añadir al carrito" CTA.

### 3. Cart / Order Summary (Desktop)
List of selected items, quantity controls, total breakdown, and WhatsApp checkout CTA.

### 4. WhatsApp Order Confirmation (Mobile)
Order summary formatted for WhatsApp sharing with product details and payment instructions.

### 5. Admin Dashboard (Desktop)
Metrics cards, sales graph, recent orders table, quick actions.

### 6. Admin Products (Desktop)
Product table with search, filters, CRUD actions, stock management.

### 7. Admin Orders / Transactions (Desktop)
Transaction log with search, date filter, export, and status management.

---

## Motion Design

- Page transitions: 300ms ease-out fade + slight vertical slide
- Card hover: translateY(-2px), border glow intensifies, 200ms ease
- Glitch cycle: 100ms glitch every 4 seconds on logo
- Waveform: continuous gentle pulse, 2s cycle
- Loading skeleton: shimmer animation with gradient sweep
- Reduced motion: respect prefers-reduced-motion, disable all glitch/pulse
