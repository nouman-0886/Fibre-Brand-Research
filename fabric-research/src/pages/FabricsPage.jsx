import { useState, useMemo } from "react";
import { fabrics } from "../utils/lookup";
import MaterialCard from "../components/MaterialCard";
import FilterBar from "../components/FilterBar";
import education from "../data/education.json";

export default function FabricsPage() {
  const [type, setType] = useState("all");
  const [sort, setSort] = useState("score");

  const list = useMemo(() => {
    let l = type === "all" ? fabrics : fabrics.filter((f) => f.type === type);
    l = [...l];
    if (sort === "score") l.sort((a, b) => b.score - a.score);
    else l.sort((a, b) => a.name.localeCompare(b.name));
    return l;
  }, [type, sort]);

  return (
    <div>
      <section className="section" style={{ paddingBottom: 32 }}>
        <div className="wrap">
          <div className="eyebrow">The full scorecard</div>
          <h1>{fabrics.length} materials, scored out of ten</h1>
          <p className="lede">
            Every score measures a material across seven axes — water, land, chemistry, carbon,
            lifespan, shedding and end of life — weighted over a garment's full life.
          </p>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 20 }}>
            {education.scoreBands.map((b) => (
              <span
                key={b.range}
                className="pill"
                style={{ borderColor: b.color, color: b.color }}
              >
                {b.range} · {b.label}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <FilterBar type={type} setType={setType} sort={sort} setSort={setSort} />
          <div className="grid grid-2">
            {list.map((f) => (
              <MaterialCard key={f.id} fabric={f} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
