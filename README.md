# Phantom-inspired Memecoin Landing (Vite + React + Tailwind + Framer Motion)

This project is a high-performance, ultra-smooth landing page inspired by Phantom.com, optimized for a memecoin ecosystem.

Features implemented:
- Full-screen animated background using `WEBSITEBACKROUND.png` with subtle parallax and spring-based motion.
- Interactive popup system using images: `1Lizard.png`, `2Lizard.png`, `3Lizard.png`, `4Lizard.png`, `5Lizard.png`.
  - Hover and click animations
  - Modal with blur, soft shadow, ESC/outside-click dismissal
  - Lazy-loaded images
- FUNFACT FAQ with a smooth expandable panel containing the provided article.
- $TCA ticker with neon green cloudy bubble style and gentle bobbing.
- Social icons with neon hover accents (X/Twitter and Buy on pump.fun).
- Responsive, mobile-safari friendly, hardware-accelerated animations.
- Uses React + Tailwind + Framer Motion.

Quick start:
1. Install dependencies
   - npm install
2. Run dev server
   - npm run dev
3. Build
   - npm run build
4. Preview
   - npm run preview

Notes:
- The repo already contains the image assets: `WEBSITEBACKROUND.png`, `1Lizard.png` ... `5Lizard.png`. The code references them by these exact names.
- Background is preloaded in `index.html` for instant impact.

Enjoy — the components are intentionally small and composable for further extension.
