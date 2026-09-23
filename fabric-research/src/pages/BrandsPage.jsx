import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { brands } from "../utils/lookup";

export default function BrandsPage() {
  const [origin, setOrigin] = useState("all");

  const list = useMemo(() => {
    if (origin === "all") return brands;
    return brands.filter((b) => b.origin === origin);
  }, [origin]);

  return (
    <div>
      <section className="section" style={{ paddingBottom: 24 }}>
        <div className="wrap">
          <div className="eyebrow">Brand directory</div>
          <h1>{brands.length} brands researched so far</h1>
          <p className="lede">
            Pakistani brands and international brands commonly available to Pakistani consumers.
            More can be added at any time — see the About page for how.
          </p>
          <div style={{ display: "flex", gap: 8, marginTop: 20 }}>
            {[
              { id: "all", label: "All" },
              { id: "local", label: "Pakistani" },
              { id: "international", label: "International" },
            ].map((o) => (
              <button
                key={o.id}
                onClick={() => setOrigin(o.id)}
                className="pill"
                style={{
                  background: origin === o.id ? "var(--green)" : "var(--card)",
                  color: origin === o.id ? "#fdfcf7" : "var(--ink-soft)",
                  borderColor: origin === o.id ? "var(--green)" : "var(--line)",
                }}
              >
                {o.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap grid grid-2">
          {list.map((b) => (
            <Link key={b.id} to={`/brand/${b.id}`} className="card" style={{ textDecoration: "none", color: "var(--ink)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                <h3 style={{ marginBottom: 4 }}>{b.name}</h3>
                <span style={{ fontSize: "0.78rem", color: "var(--ink-soft)" }}>{b.country}</span>
              </div>
              <p style={{ fontSize: "0.9rem", margin: 0 }}>{b.description.slice(0, 120)}…</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
