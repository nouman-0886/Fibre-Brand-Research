import { useParams, Link } from "react-router-dom";
import { getBrandById, getBrandMaterials } from "../utils/lookup";
import ScoreBadge from "../components/ScoreBadge";
import SearchBar from "../components/SearchBar";

export default function BrandPage() {
  const { id } = useParams();
  const brand = getBrandById(id);

  if (!brand) {
    return (
      <div className="wrap section container-narrow">
        <h1>Brand not found</h1>
        <p>We don't have research on this brand yet. Try another brand, or browse what's available.</p>
        <SearchBar />
        <div style={{ marginTop: 24, display: "flex", gap: 12 }}>
          <Link to="/" className="btn-outline btn">
            Back to search
          </Link>
          <Link to="/brands" className="btn-outline btn">
            Browse all brands
          </Link>
        </div>
      </div>
    );
  }

  const materials = getBrandMaterials(brand);
  const hasClaims = (brand.sustainabilityClaims?.length || 0) > 0;
  const hasCerts = (brand.certifications?.length || 0) > 0;
  const hasInitiatives = (brand.initiatives?.length || 0) > 0;

  return (
    <div>
      <section className="section" style={{ paddingBottom: 40 }}>
        <div className="wrap">
          <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 10 }}>
            <span className="eyebrow" style={{ marginBottom: 0 }}>
              {brand.country}
            </span>
            <span
              className="pill"
              style={{
                fontSize: "0.72rem",
                padding: "2px 9px",
                color: brand.origin === "local" ? "var(--green)" : "var(--blue)",
                borderColor: brand.origin === "local" ? "var(--green)" : "var(--blue)",
              }}
            >
              {brand.origin === "local" ? "Pakistani brand" : "International brand in Pakistan"}
            </span>
          </div>
          <h1>{brand.name}</h1>
          <p className="lede">{brand.description}</p>
          <div style={{ display: "flex", gap: 20, flexWrap: "wrap", fontSize: "0.88rem", color: "var(--ink-soft)", marginBottom: 20 }}>
            {brand.founded && <span>Founded {brand.founded}</span>}
            {brand.headquarters && <span>· HQ {brand.headquarters}</span>}
          </div>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 20 }}>
            {brand.categories.map((c) => (
              <span key={c} className="pill">
                {c}
              </span>
            ))}
          </div>
          {brand.website && (
            <a href={brand.website} target="_blank" rel="noreferrer" className="btn-outline btn">
              Official website ↗
            </a>
          )}
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <h2>Materials found in this brand's products</h2>
          {materials.length === 0 ? (
            <p>Not available in current sources.</p>
          ) : (
            <>
              <div className="grid grid-2">
                {materials.map((f) => (
                  <Link
                    key={f.id}
                    to={`/fabric/${f.id}`}
                    className="card"
                    style={{ display: "flex", gap: 16, textDecoration: "none", color: "var(--ink)" }}
                  >
                    <ScoreBadge score={f.score} />
                    <div>
                      <h3 style={{ marginBottom: 2 }}>{f.name}</h3>
                      <p style={{ fontSize: "0.9rem", margin: 0 }}>{f.description.slice(0, 110)}…</p>
                    </div>
                  </Link>
                ))}
              </div>
              {brand.materialsNote && (
                <p style={{ fontSize: "0.85rem", marginTop: 20 }}>{brand.materialsNote}</p>
              )}
            </>
          )}
        </div>
      </section>

      {(hasClaims || hasCerts || hasInitiatives) && (
        <section className="section">
          <div className="wrap">
            <h2>Sustainability claims &amp; initiatives</h2>
            <p style={{ marginBottom: 20 }}>
              Claims and initiatives are distinguished below. A brand claim is the brand's own stated
              position; a documented item is confirmed through independent or third-party reporting.
              Neither implies the website endorses the material or brand overall.
            </p>

            {hasCerts && (
              <>
                <h3>Certifications</h3>
                <ul style={{ marginBottom: 20 }}>
                  {brand.certifications.map((c, i) => (
                    <li key={i} style={{ marginBottom: 8 }}>
                      <strong>{c.name || c}</strong>
                      {c.source && (
                        <>
                          {" — "}
                          <a href={c.source} target="_blank" rel="noreferrer" style={{ fontSize: "0.85rem" }}>
                            source
                          </a>
                        </>
                      )}
                    </li>
                  ))}
                </ul>
              </>
            )}

            {hasClaims && (
              <>
                <h3>Claims</h3>
                <ul style={{ marginBottom: 20 }}>
                  {brand.sustainabilityClaims.map((c, i) => (
                    <li key={i} style={{ marginBottom: 12, color: "var(--ink-soft)" }}>
                      <span
                        className="pill"
                        style={{
                          fontSize: "0.7rem",
                          marginRight: 8,
                          color: c.type === "documented" ? "var(--green)" : "var(--gold)",
                          borderColor: c.type === "documented" ? "var(--green)" : "var(--gold)",
                        }}
                      >
                        {c.type === "documented" ? "Documented" : "Brand claim"}
                      </span>
                      {c.claim}
                      {c.source && (
                        <>
                          {" "}
                          <a href={c.source} target="_blank" rel="noreferrer" style={{ fontSize: "0.85rem" }}>
                            (source)
                          </a>
                        </>
                      )}
                    </li>
                  ))}
                </ul>
              </>
            )}

            {hasInitiatives && (
              <>
                <h3>Initiatives</h3>
                <ul>
                  {brand.initiatives.map((c, i) => (
                    <li key={i} style={{ marginBottom: 8, color: "var(--ink-soft)" }}>
                      {c.name}
                      {c.source && (
                        <>
                          {" "}
                          <a href={c.source} target="_blank" rel="noreferrer" style={{ fontSize: "0.85rem" }}>
                            (source)
                          </a>
                        </>
                      )}
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </section>
      )}

      <section className="section">
        <div className="wrap">
          <h2>Sources</h2>
          <ul style={{ fontSize: "0.9rem" }}>
            {brand.sources.map((s, i) => (
              <li key={i}>
                <a href={s.url} target="_blank" rel="noreferrer">
                  {s.title}
                </a>
              </li>
            ))}
          </ul>
          <p style={{ fontSize: "0.85rem", color: "var(--ink-soft)" }}>Last updated: {brand.lastUpdated}</p>
        </div>
      </section>
    </div>
  );
}
