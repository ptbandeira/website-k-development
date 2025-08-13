
# Kapunka — Quiet care for sensitive skin

A React + Vite + Tailwind site built for Kapunka, inspired by Aesop's calm, product‑led IA and aligned with Kapunka's brand strategy.

## Highlights
- Brand palettes: Golden Hour & Earthen Elegance (see `tailwind.config.js`).
- Typography: Inter for body/UI, DM Serif Display for headlines.
- Information Architecture:
  - Home
  - Method
  - Shop
  - Professionals
  - Origin & Stewardship
  - FAQs
  - Contact

## Local Dev
```bash
npm i
npm run dev
```

## Deploy to Netlify
- Connect the repo to Netlify.
- Environment variables (optional for Stripe checkout):
  - `STRIPE_SECRET_KEY`
  - `SUCCESS_URL` (e.g., `https://your-site.netlify.app/?success=1`)
  - `CANCEL_URL` (e.g., `https://your-site.netlify.app/?canceled=1`)
- Build command: `npm run build`
- Publish directory: `dist`
- Functions directory: `netlify/functions`

## Cart & Checkout
- Cart persists in `localStorage`.
- The checkout Netlify Function (`create-checkout.js`) creates a Stripe Checkout Session **if** keys are present. Otherwise it responds with an informative message.
- Replace `/src/data/products.ts` with your real SKUs and pricing.

## Content & Assets
- Replace placeholder images in `/public/images/` with brand photography (hands, glass, linen, stone; soft daylight).
- Copy is written to be cosmetics‑safe and consistent with the Brand Strategy: comfort, softness, support for the skin barrier; no medical claims.
- Method page mirrors the five steps (Dose → Warm → Press → Glide → Pause) and hygiene guidance.

## SEO
- Basic meta tags in `index.html`. Consider adding Open Graph, structured data (Product, FAQ).

## License
MIT
