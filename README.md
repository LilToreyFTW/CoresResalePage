# Game Cheats Resell Website

A modern, responsive website for reselling game cheats with Next.js and React.

## Features

- 🎨 Modern gradient UI design
- ⏱️ Live countdown timer
- 💳 Pricing tiers (1 Day, 1 Week, 1 Month, Lifetime)
- 🎮 Product grid with game cheats
- 📱 Fully responsive design
- ⚡ Next.js 14 with TypeScript

## Getting Started

### HTML Version

Simply open `index.html` in your browser to view the standalone HTML version.

### Next.js Version

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── index.html              # Standalone HTML version
├── pages/
│   ├── _app.tsx           # Next.js app wrapper
│   └── index.tsx           # Main page
├── components/
│   ├── PricingSection.tsx  # Pricing plans section
│   ├── PricingCard.tsx     # Individual pricing card
│   ├── CountdownTimer.tsx  # Countdown timer component
│   ├── ProductsGrid.tsx    # Products grid container
│   └── ProductCard.tsx     # Individual product card
└── styles/
    └── globals.css         # Global styles
```

## Customization

- Edit `components/ProductsGrid.tsx` to modify products
- Edit `components/PricingSection.tsx` to change pricing plans
- Modify `styles/globals.css` to customize colors and styling

## Build for Production

```bash
npm run build
npm start
```
