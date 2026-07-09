# Livorno Shore Excursions

**Your Gateway to Tuscany** — the definitive Tuscany cruise planning guide for passengers arriving into Livorno.

Domain: [livornoshoreexcursions.com](https://livornoshoreexcursions.com)

## Development

```bash
npm install
npm run generate:data    # Regenerate content from scripts/generate-livorno-data.mjs
npm run import:schedules # Import CSV from data/schedule-sources/livorno.csv
npm run download:images  # Fetch CC-licensed images from Wikimedia Commons
npm run dev
npm run build
npm run check-links
npm run seo-qa
```

## Deploy

Static export to Cloudflare Pages:

```bash
npm run pages:deploy
```

## Site structure

- **Homepage** — Tuscany hero, Choose Your Tuscany, Build My Perfect Tuscany Day
- **27 authority guides** — Florence, Pisa, Lucca, wine, food, villages, terminal guide
- **10 shore excursions** — Highlights, Florence, Pisa combo, wine, hidden Tuscany, family
- **10 comparison pages** — Florence vs Pisa, DIY vs guided, best for families/couples/food lovers
- **Tuscany Cruise Planner** — Interactive itinerary builder with PDF export
- **Ship schedules** — Year/month structure with CSV import ready
