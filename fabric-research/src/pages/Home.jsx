import { Link } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import MaterialCard from "../components/MaterialCard";
import { fabrics, brands } from "../utils/lookup";

const FLOW = ["Fashion", "Production", "Fibre choice", "Water · land · chemicals · carbon", "Garment lifespan", "Washing & shedding", "Waste & end of life"];

export default function Home() {
  const topFabrics = [...fabrics].sort((a, b) => b.score - a.score).slice(0, 3);
  const localCount = brands.filter((b) => b.origin === "local").length;
  const intlCount = brands.filter((b) => b.origin === "international").length;

  return (
    <div>
      <section className="section" style={{ paddingTop: 72, paddingBottom: 48 }}>
        <div className="wrap">
          <div className="eyebrow">Pakistan-focused fashion &amp; fabric research</div>
          <h1 style={{ maxWidth: "18ch" }}>Fashion is more than what we wear.</h1>
          <p className="lede">
            The clothes we buy have a story before they reach a wardrobe — the fibres, water, land,
            chemicals and energy behind them, and what happens after we stop wearing them. Explore the
            materials behind the clothes people actually buy in Pakistan, and the international brands
            sold alongside them.
          </p>
          <div style={{ marginTop: 28 }}>
            <SearchBar autoFocus />
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 32, paddingBottom: 40 }}>
        <div className="wrap">
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 8,
              alignItems: "center",
              fontSize: "0.85rem",
              color: "var(--ink-soft)",
            }}
          >
            {FLOW.map((step, i) => (
              <span key={step} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span className="pill">{step}</span>
                {i < FLOW.length - 1 && <span aria-hidden="true">→</span>}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 24, flexWrap: "wrap", gap: 12 }}>
            <h2 style={{ marginBottom: 0 }}>Top-scoring fibres</h2>
            <Link to="/fabrics" className="btn-outline btn">
              Browse the full scorecard
            </Link>
          </div>
          <div className="grid grid-3">
            {topFabrics.map((f) => (
              <MaterialCard key={f.id} fabric={f} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <h2>
            {localCount} Pakistani brands, {intlCount} international brands sold in Pakistan
          </h2>
          <p style={{ marginBottom: 24 }}>
            Pakistan-focused doesn't mean Pakistan-only — people here buy both. Search finds either kind,
            and neither gets an overall "good" or "bad" score. You explore the materials; the scorecard
            explains what they mean.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 16 }}>
            {brands.slice(0, 8).map((b) => (
              <Link key={b.id} to={`/brand/${b.id}`} className="pill" style={{ padding: "8px 16px", fontSize: "0.9rem" }}>
                {b.name}
              </Link>
            ))}
          </div>
          <Link to="/brands" className="btn-outline btn">
            Browse all brands
          </Link>
        </div>
      </section>

      <section className="section">
        <div className="wrap grid grid-2" style={{ alignItems: "start" }}>
          <div>
            <h2>Fast fashion &amp; overconsumption</h2>
            <p>
              Trend cycles that shorten, prices that fall, and garments worn fewer times before
              replacement all push in the same direction: more production, more resource use, more
              waste. None of that is about any single fibre — it's about how often we buy and how long
              we keep what we already own.
            </p>
            <Link to="/learn" className="btn">
              Understand the impact
            </Link>
          </div>
          <div>
            <h2>How the scoring works</h2>
            <p>
              Every material on the scorecard is scored out of ten across seven axes — water, land,
              chemistry, carbon, lifespan, shedding and end of life — weighted over a garment's full
              life. Ten is best, zero is worst.
            </p>
            <Link to="/fabrics" className="btn-outline btn">
              See the scorecard
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
