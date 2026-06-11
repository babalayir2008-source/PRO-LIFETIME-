# ⌚ PRO-LIFETIME — Luxury Watch E-Commerce Website

A premium luxury watch e-commerce website built with **React** and **Vite**, featuring a dark, elegant UI design with smooth animations, a custom cursor experience, and a fully responsive layout.


## 🎥 Website Demo

[▶ Watch Demo Video](./src/components/video/newfullweb.mp4)

---

## 🖥️ Live Preview

> Run locally with `npm run dev` (see [Getting Started](#-getting-started) below)

---

## 📌 Project Overview

**PRO-LIFETIME** is a front-end e-commerce assignment project simulating a high-end luxury watch store. The website showcases watch collections, allows users to compare products, explore custom watch designs, and contact the brand — all wrapped in a sleek black-and-silver aesthetic inspired by premium watchmaking brands.

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React 18 | UI component framework |
| Vite | Build tool and dev server |
| React Router DOM | Client-side routing |
| CSS-in-JS (inline `<style>`) | Component-scoped styling |
| Unsplash API (images) | Product and background imagery |

---

## 📁 Project Structure

```
src/
├── App.jsx                  # Root component with routing setup
├── main.jsx                 # React DOM entry point with BrowserRouter
├── App.css                  # Global app styles
├── index.css                # Base/reset styles
├── assets/                  # Static assets (hero image, SVGs)
│
├── Pages/                   # Route-level page components
│   ├── Home.jsx             # Landing page
│   ├── About.jsx            # About the brand
│   ├── Collection.jsx       # Watch collection listing
│   ├── CustomWatch.jsx      # Custom watch builder page
│   └── Contactus.jsx        # Contact information page
│
└── components/              # Reusable UI components
    ├── Navbar.jsx           # Sticky navigation bar
    ├── HeroSection.jsx      # Auto-sliding hero banner
    ├── Categories.jsx       # Watch category grid + comparison preview
    ├── WatchCollection.jsx  # Horizontally scrollable watch rows
    ├── Comparetwo.jsx       # Side-by-side watch comparison
    ├── SpecialOffers.jsx    # Promotional offer banner
    ├── Offer.jsx            # Offer cards grid
    ├── AboutWatches.jsx     # Zigzag brand story layout
    ├── FeatureWatch.jsx     # Featured product spotlight
    ├── Testimonials.jsx     # Auto-rotating customer reviews
    ├── Custom.jsx           # Custom watch gallery with cursor effect
    ├── Crative.jsx          # Interactive AI watch design creator
    ├── Contact.jsx          # Contact info with floating particles
    └── Footer.jsx           # Multi-column footer with newsletter
```

---

## 📄 Pages

### 🏠 Home (`/`)
The main landing page composed of:
- **HeroSection** — Full-screen auto-sliding image carousel with CTAs, floating stats badges (50K+ customers, 4.9/5 rating), and a radial cursor glow effect.
- **Categories** — A 10-card grid of watch categories (Luxury, Sports, Smart, Classic, Business, etc.) with hover zoom animations and a "Popular" badge system. Includes a Smart Comparison Tool preview section.
- **Testimonials** — Auto-rotating customer review showcase with floating review cards and a main spotlight review.
- **Footer** — Brand info, navigation links, support details, social icons, and an email newsletter subscription box.

### 🗂️ Collection (`/collection`)
The product browsing page composed of:
- **WatchCollection** — Horizontally scrollable product rows organized by category (Luxury Collection, Best Sellers, Premium Edition, Sports Series, New Arrivals) with Buy Now and View Details buttons.
- **CompareTwo** — A side-by-side product comparison card for two featured watches (Royal Silver vs Titanium Black) showing specs, price, and brand details.
- **SpecialOffers** — An animated full-width promotional banner highlighting up to 40% OFF with a shine sweep animation.
- **Footer**

### 🎨 Custom Watch (`/custom`)
The personalization page composed of:
- **Custom** — A parallax-background gallery of 6 custom watch styles (Golden, Diamond, Silver, Platinum, Rose Gold, Luxury) with a pulsing gold custom cursor effect and hover lift animations.
- **Creative** — An interactive AI Watch Creator form where users can select watch type, strap material, color, and custom engraving. A live CSS-rendered watch preview updates in real time based on selections.
- **Footer**

### ℹ️ About (`/about`)
The brand story page composed of:
- **AboutWatches** — A zigzag alternating image/text layout with four brand pillars: Timeless Craftsmanship, Luxury Redefined, Swiss-Level Precision, and Made For Legends.
- **FeatureWatch** — A featured product spotlight for the "PRO-LIFETIME Royal Edition" with a feature grid (Sapphire Glass, Water Resistant, Precision Movement, Premium Finish, Battery Life, 2-Year Warranty).
- **Footer**

### 📞 Contact Us (`/contact`)
The contact page composed of:
- **Contact** — A full-screen glassmorphism contact box with a slow-zoom background image, floating silver particles, a custom silver cursor, and contact info cards (Email, Phone, Location, Support Hours).
- **Offer** — A grid of four offer cards (First Purchase, Free Delivery, Seasonal Sale, Cashback) with a pulsing limited-time banner.
- **Footer**

---

## 🧩 Components

| Component | Description |
|---|---|
| `Navbar` | Sticky top nav with active-link highlighting via React Router's `NavLink`, a search box, and a Sign In button. Responsive wrapping on mobile. |
| `HeroSection` | Auto-cycling background image slideshow (4s interval) with dot indicators, floating stats cards, and a cursor glow that follows mouse movement. |
| `Categories` | Responsive grid of 10 watch category cards. Cards zoom and rotate images on hover. Includes a comparison feature section with four spec comparison cards. |
| `WatchCollection` | Five horizontally scrollable product rows (scrollbar hidden). Each row renders 5 watch cards with image zoom, pricing, star rating, and buy/view buttons. |
| `CompareTwo` | Static side-by-side comparison of two watches in a spec table format with a "VS" divider that hides on smaller screens. |
| `SpecialOffers` | Animated promotional card with a diagonal shine sweep animation, discount headline, and CTA button. |
| `Offer` | Grid of four styled offer cards over a blurred background image, plus a pulsing animated banner. |
| `AboutWatches` | Maps over 4 brand value sections in a zigzag layout (alternating image left/right) with hover lift effects and a luxury gradient underline. |
| `FeatureWatch` | Large split-layout featured product card with a 2-column feature grid and an "Explore Collection" CTA button. |
| `Testimonials` | Auto-rotating review spotlight (3.5s interval) with customer photo, role, star rating, and quote. Three additional floating review cards animate independently. |
| `Custom` | Parallax fixed-background page with a 6-card custom watch gallery. Uses `useEffect` to attach a pulsing gold custom cursor to mouse movement. |
| `Creative` (Crative.jsx) | Interactive watch configurator using `useState` for watch type, strap, color, and engraving. Renders a live CSS circular watch face preview that updates per selection. |
| `Contact` | Glassmorphism contact info panel with floating particle divs, a slow-zoom animated background, and a `useEffect`-driven custom silver cursor. |
| `Footer` | Multi-column grid footer with brand info, navigation, "Get To Know Us", support details, and a newsletter email input. Includes a glowing animated tagline. |

---

## ✨ Key Features

- **Dark Luxury Theme** — Consistent black (`#050505`–`#111`) background with silver/white accents across all pages.
- **Custom Cursor Effects** — Gold and silver custom cursors on the Custom Watch and Contact pages using `useEffect` + `mousemove` listeners.
- **Cursor Glow** — A radial gradient glow that follows the mouse on the Hero and Categories sections.
- **Floating Animations** — CSS `@keyframes float` used on watch image cards, testimonial cards, and the AI watch preview.
- **Auto-Sliding Components** — HeroSection and Testimonials both use `setInterval` inside `useEffect` for automatic cycling with proper cleanup.
- **Glassmorphism UI** — `backdrop-filter: blur()` + semi-transparent backgrounds used throughout cards and overlays.
- **Responsive Design** — Media queries at 768px and 900px breakpoints across all components for mobile and tablet support.
- **Active Route Highlighting** — Navbar uses React Router's `NavLink` with `isActive` to apply an active silver pill style to the current route.
- **Inline Component Styles** — All styles are co-located inside each component using `<style>` JSX tags, keeping components fully self-contained.

---

## 🚀 Getting Started

### Prerequisites
- Node.js v18+
- npm or yarn

### Installation

```bash
# Clone or extract the project
cd your-project-folder

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will run at `http://localhost:5173` by default.

### Build for Production

```bash
npm run build
```

---

## 🗺️ Routing Summary

| Route | Page Component | Key Sections |
|---|---|---|
| `/` | Home | HeroSection, Categories, Testimonials, Footer |
| `/collection` | Collection | WatchCollection, CompareTwo, SpecialOffers, Footer |
| `/custom` | CustomWatch | Custom, Creative, Footer |
| `/about` | About | AboutWatches, FeatureWatch, Footer |
| `/contact` | Contactus | Contact, Offer, Footer |

---

## 📦 Dependencies

```json
{
  "react": "^18.x",
  "react-dom": "^18.x",
  "react-router-dom": "^6.x",
  "vite": "^5.x"
}
```

---

## 🎓 Assignment Notes

This project was developed as a front-end web development assignment to demonstrate:
- Component-based architecture with React
- Multi-page routing using React Router DOM
- CSS animations, transitions, and responsive layouts
- State management with `useState` and side effects with `useEffect`
- UI/UX design principles applied to an e-commerce context

---

## 👤 Author

**PRO-LIFETIME⌚** — Luxury Watch E-Commerce Assignment Project  
© 2026 Pro-LifeTime. All Rights Reserved.