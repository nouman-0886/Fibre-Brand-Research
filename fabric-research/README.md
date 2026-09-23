# Fibre & Brand Research (Pakistan)

A Pakistan-focused fabric and clothing research tool. Search a Pakistani clothing brand to see
its commonly used materials, and how each material scores for environmental impact according to
**The Fabric Scorecard** - a 28-material scoring guide covering water, land, chemistry, carbon,
lifespan, shedding and end-of-life impact.

## Run locally

```bash
npm install
npm run dev
```

Then open the printed local URL (usually http://localhost:5173).

## Project structure

```
src/
  data/
    fabrics.json        28 materials, adapted from The Fabric Scorecard
    brands.json          8 starter Pakistani clothing brands
    education.json       Six rules, microplastics, buying guidance (from the scorecard)
  components/            Reusable UI: Header, Footer, SearchBar, MaterialCard, ScoreBadge, FilterBar
  pages/
    Home.jsx             Search + highlights
    BrandPage.jsx         Brand -> materials -> scores
    FabricsPage.jsx       Full scorecard, filterable/sortable
    FabricDetailPage.jsx  Single material detail
    LearnPage.jsx         Six rules, microplastics, buying guidance
    AboutPage.jsx         Methodology & sources
  utils/lookup.js         Brand <-> fabric relationship logic
```

## How it works

```
Search "Khaadi" -> brands.json finds the brand
  -> brand.materials (an array of fabric IDs)
  -> matched against fabrics.json
  -> each material's score, pros/cons, availability rendered
```

## Adding data

- **New brand**: add an object to `src/data/brands.json`. No component changes needed.
- **New fabric**: add an object to `src/data/fabrics.json` following the existing schema.

See the in-app "About" page for full methodology and sourcing notes.

## What came from the PDF vs. the internet

- **Fabric scores, descriptions, pros/cons, the six rules, microplastics section and buying
  guidance** are adapted from *The Fabric Scorecard* (a public fabric-scoring guide). Promotional
  content was removed entirely, and India-specific pricing/certification-body references were
  dropped rather than presented as Pakistan facts.
- **Brand information** (founding year, headquarters, description, categories, sustainability
  claims) was researched from official brand sites, Wikipedia and public reporting - sources are
  linked on each brand page. Brand material lists reflect general industry materials for that
  brand's product category rather than a verified per-product audit, and this is flagged on each
  brand page (`"verified": false`).
- Pricing data was **not included** - no reliable, current Pakistan-specific pricing was available
  to verify at the time of writing, so it was left out rather than estimated.

## Tech

React 19 + Vite + React Router. No UI/animation/chart libraries, no backend - everything runs off
local JSON.
