# UniqueHR — Landing Page

A premium, cinematic landing page for UniqueHR — a workforce solutions company. Built with React 19, TypeScript, Vite 7, and Framer Motion 12.

## Tech Stack

- **Framework:** React 19 + TypeScript
- **Build tool:** Vite 7 (single-file output via `vite:singlefile`)
- **Animation:** Framer Motion 12, GSAP 3, Lenis (smooth scroll)
- **Forms:** React Hook Form + Zod validation
- **Styling:** Tailwind CSS 4 (custom theme)

## Key Features

- Cinematic scroll-triggered animations (`whileInView`)
- Smooth image reveal effects (blur-to-sharp on scroll)
- Spring-based hover micro-interactions on cards, nav links, and CTAs
- Parallax scroll effects on section visuals
- Zod-validated contact form with success/error states
- Fully responsive (mobile/tablet/desktop)
- Animated orbit navigation for industries section

## Sections

1. Utility Bar — Tagline + quick links
2. Header — Sticky nav with scroll-aware glassmorphism
3. Hero — Collage with parallax and gold trajectory
4. About — Brand story + proof stats
5. Services — 5-panel wave composition + mobile carousel
6. Why UniqueHR — Visual + benefit rows
7. Industries — Orbit radial selector with 7 industries
8. Process — SVG route with 8 scroll-linked steps
9. Compliance — 8 compliance items + trust panel
10. Values — Featured / medium / compact card grid
11. Final CTA — Dark hero with primary/secondary CTAs
12. Contact — Zod-validated form + contact details
13. Footer — Brand + link groups + social + legal

## Getting Started

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Output is a single `dist/index.html` with inlined CSS/JS (~765 KB).

## Project Structure

```
src/
├── components/     # Section components + UI primitives
├── data/           # Content/section data (decoupled from UI)
├── hooks/          # useLenis, useReducedMotion
├── lib/            # Animations, validation, submission
├── styles/         # Tailwind globals.css
└── utils/          # cn() class merger
```
