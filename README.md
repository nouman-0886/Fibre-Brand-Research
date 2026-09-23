# Fibre & Brand Research

A Pakistan-focused fashion and fabric research tool exploring clothing brands, materials, and their environmental impact.

## About the Project

**Fibre & Brand Research** is an interactive research and awareness website designed to help users understand what materials are used in clothing and what those materials mean from an environmental perspective.

The project combines:

* Fabric and material research
* Clothing brand research
* Environmental information
* Material scorecard data
* Pakistan-focused context
* Relevant international brands
* Source-based brand information

The goal is not to tell users which brands or materials they should buy or avoid. Instead, the website provides information so users can explore and understand the relationship between **fashion, materials, consumption, and environmental impact**.

## Key Features

### 🔎 Brand Search

Search clothing brands using:

* Case-insensitive search
* Partial matching
* Search suggestions
* Fast client-side filtering

### 🧵 Fabric & Material Research

Explore materials included in the project's Fabric Scorecard and view information such as:

* Environmental factors
* Material score
* Pros and cons
* Lifespan
* Water impact
* Land impact
* Chemistry
* Carbon
* Fibre shedding
* End-of-life considerations

### 🏷️ Brand → Material Relationship

Select a brand and explore the materials documented in its products.

The application connects:

```text
Brand
   ↓
Documented Materials
   ↓
Fabric Scorecard
   ↓
Material Information
```

Brands are **not given an overall environmental score or ranking**.

### 🇵🇰 Pakistan-Focused

The primary audience and context are Pakistan-based users.

The project includes research into Pakistani brands while also allowing relevant international brands commonly available or used by Pakistani consumers.

Examples include:

* J.
* Khaadi
* Gul Ahmed / Ideas
* Sapphire
* Outfitters
* Limelight
* Nishat Linen
* H&M
* Zara
* Uniqlo
* Levi's
* Adidas
* Nike
* Mango

The brand database is designed to be expandable.

## Data & Research

The project uses two main data sources:

### Fabric Data

Fabric and material scorecard information is based primarily on the provided **Fabric Scorecard** research PDF.

The original material scores are preserved rather than replaced with a new scoring system.

### Brand Data

Brand information is researched separately using reliable sources where available, including:

* Official brand websites
* Official product pages
* Official sustainability information
* Certification sources
* Reliable external sources

Brand claims are distinguished from independently documented information where possible.

Each researched brand can include:

```text
Brand name
Country / origin
Categories
Materials
Sustainability claims
Certifications
Initiatives
Official website
Research sources
Last updated date
```

## Data Structure

The application keeps brand data and fabric data separate.

```text
src/
├── data/
│   ├── brands.json
│   └── fabrics.json
```

### `brands.json`

Contains researched information about clothing brands and references to documented materials.

### `fabrics.json`

Contains the Fabric Scorecard materials and their associated information.

This structure makes it easier to add new brands and materials without changing the main React components.

## Technology

Built with:

* React
* Vite
* JavaScript
* JSON
* CSS / Tailwind CSS

The first version uses local JSON data and does not require a backend, database, authentication system, or external API.

## Design Approach

The interface is designed around a combination of:

**Modern Editorial Publication + Research Database + Environmental Awareness Tool**

The design focuses on:

* Clean typography
* Generous spacing
* Minimal visual clutter
* Responsive layouts
* Lightweight interactions
* Accessible UI
* Mobile-first design
* Subtle animations

The goal is to keep the experience informative without making it feel like an e-commerce store, corporate dashboard, or promotional website.

## Project Structure

```text
src/
│
├── components/
│   ├── Header.jsx
│   ├── SearchBar.jsx
│   ├── BrandCard.jsx
│   ├── BrandDetails.jsx
│   ├── MaterialCard.jsx
│   ├── FabricScore.jsx
│   ├── FilterBar.jsx
│   ├── EducationalSection.jsx
│   └── Footer.jsx
│
├── data/
│   ├── brands.json
│   └── fabrics.json
│
├── pages/
│   ├── Home.jsx
│   ├── BrandPage.jsx
│   └── FabricPage.jsx
│
├── App.jsx
├── main.jsx
└── styles/
```

The exact structure may evolve as the project develops.

## Research Principles

The project follows a few important principles:

1. **Do not invent brand information.**
2. **Do not assume a brand uses a material without supporting evidence.**
3. **Use source links for researched information where possible.**
4. **Distinguish brand claims from verified information.**
5. **Do not assign an overall environmental score to brands.**
6. **Do not create brand rankings.**
7. **Do not present unsupported information as fact.**
8. **Show missing information rather than guessing.**
9. **Keep the original Fabric Scorecard material scores intact.**
10. **Present information for exploration and awareness rather than brand-shaming.**

## Important Note

Brand information, product materials, sustainability initiatives, and company policies can change over time.

For this reason, researched brand information should include a **last updated date** and relevant sources whenever possible.

## Future Improvements

The project architecture is designed to support future expansion, including:

* More Pakistani brands
* More international brands
* Additional materials
* More product categories
* Additional certifications
* More research sources
* Advanced filtering
* Improved search
* Potential backend/CMS integration

## Purpose

The overall experience is designed around:

```text
Learn
  ↓
Search
  ↓
Explore
  ↓
Understand
```

Rather than simply providing a list of brands or fabrics, the project aims to help users understand the relationship between **what they wear, the materials behind those clothes, and the environmental factors associated with those materials**.

## Status

🚧 **Currently in development**

The project is being developed as a lightweight, research-focused web application with an expandable data architecture.

## License

This project is intended for educational, research, and awareness purposes.

---

**Fibre & Brand Research**
*Explore the materials behind the clothes you wear.*
