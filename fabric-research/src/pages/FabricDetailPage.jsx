import { useParams, Link } from "react-router-dom";
import { getFabricById, brands } from "../utils/lookup";
import ScoreBadge from "../components/ScoreBadge";
import { scoreBand } from "../utils/lookup";

export default function FabricDetailPage() {
  const { id } = useParams();
  const fabric = getFabricById(id);

  if (!fabric) {
    return (
      <div className="wrap section container-narrow">
        <h1>We couldn't find that material</h1>
        <Link to="/fabrics" className="btn btn-outline">
          Back to the scorecard
        </Link>
      </div>
    );
  }

  const band = scoreBand(fabric.score);
  const usedByBrands = brands.filter((b) => b.materials.includes(fabric.id));

  return (
    <div>
      <section className="section" style={{ paddingBottom: 32 }}>
        <div className="wrap" style={{ display: "flex", gap: 24, alignItems: "flex-start", flexWrap: "wrap" }}>
          <ScoreBadge score={fabric.score} size="lg" />
          <div>
            <div className="eyebrow" style={{ color: band.color }}>
              {band.label}
            </div>
            <h1 style={{ marginBottom: 4 }}>{fabric.name}</h1>
            <div style={{ color: "var(--ink-soft)", fontSize: "0.95rem" }}>{fabric.subtitle}</div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap grid grid-2" style={{ alignItems: "start" }}>
          <div>
            <h2>What it is</h2>
            <p>{fabric.description}</p>

            <h3 style={{ marginTop: 28 }}>Pros</h3>
            <ul>
              {fabric.pros.map((p, i) => (
                <li key={i} style={{ color: "var(--ink-soft)", marginBottom: 6 }}>
                  {p}
                </li>
              ))}
            </ul>

            <h3 style={{ marginTop: 20 }}>Cons</h3>
            <ul>
              {fabric.cons.map((c, i) => (
                <li key={i} style={{ color: "var(--ink-soft)", marginBottom: 6 }}>
                  {c}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="card">
              <h3 style={{ marginTop: 0 }}>Availability</h3>
              <p style={{ fontSize: "0.92rem" }}>{fabric.availability}</p>
              <hr className="divider" style={{ margin: "16px 0" }} />
              <h3>Recommended uses</h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {fabric.recommendedUses.map((u) => (
                  <span key={u} className="pill">
                    {u}
                  </span>
                ))}
              </div>
              <hr className="divider" style={{ margin: "16px 0" }} />
              <p style={{ fontSize: "0.82rem", margin: 0 }}>Source: {fabric.source}</p>
            </div>
          </div>
        </div>
      </section>

      {usedByBrands.length > 0 && (
        <section className="section">
          <div className="wrap">
            <h2>Brands that commonly use this material</h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
              {usedByBrands.map((b) => (
                <Link key={b.id} to={`/brand/${b.id}`} className="pill" style={{ padding: "8px 16px" }}>
                  {b.name}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
