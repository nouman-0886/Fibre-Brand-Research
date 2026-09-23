import education from "../data/education.json";

export default function LearnPage() {
  const { sixRules, microplastics, buyingGuidance, ifYouChangeOneThing, fastFashion } = education;

  return (
    <div>
      <section className="section" style={{ paddingBottom: 32 }}>
        <div className="wrap container-narrow">
          <div className="eyebrow">Learn</div>
          <h1>Fast fashion &amp; overconsumption</h1>
          <p className="lede">{fastFashion.intro}</p>
        </div>
      </section>

      <section className="section" style={{ paddingBottom: 32 }}>
        <div className="wrap container-narrow">
          <ul>
            {fastFashion.points.map((p, i) => (
              <li key={i} style={{ marginBottom: 10 }}>
                {p}
              </li>
            ))}
          </ul>
          <p style={{ fontSize: "0.82rem" }}>{fastFashion.note}</p>
        </div>
      </section>

      <section className="section">
        <div className="wrap container-narrow">
          <h2>The seven axes, explained</h2>
          <p>
            Every material on the scorecard is scored across seven dimensions, weighted over a
            garment's full life. None of them claims to capture every possible environmental factor —
            they're the seven the source scorecard's methodology weighs.
          </p>
        </div>
        <div className="wrap grid grid-3" style={{ marginTop: 12 }}>
          {sixRules.scoreAxes.map((a) => (
            <div key={a.name} className="card">
              <h3 style={{ marginBottom: 4 }}>{a.name}</h3>
              <p style={{ margin: 0, fontSize: "0.9rem" }}>{a.note}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section" style={{ paddingBottom: 32 }}>
        <div className="wrap container-narrow">
          <div className="eyebrow">Practical habits</div>
          <h2 style={{ marginBottom: 8 }}>Six simple rules</h2>
          <p className="lede">{sixRules.intro}</p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="grid grid-2">
            {sixRules.rules.map((r, i) => (
              <div key={i} className="card">
                <h3>{r.title}</h3>
                <p style={{ margin: 0 }}>{r.text}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-3" style={{ marginTop: 24 }}>
            {sixRules.wearStats.map((s, i) => (
              <div key={i} className="card" style={{ background: "var(--ink)", color: "#fdfcf7" }}>
                <div style={{ fontSize: "0.8rem", color: "#c9c7ba", marginBottom: 6 }}>Wear it {s.wears}</div>
                <div style={{ fontFamily: "var(--serif)", fontSize: "1.8rem", fontWeight: 700, marginBottom: 8 }}>
                  {s.value}
                </div>
                <p style={{ fontSize: "0.85rem", color: "#d8d6c9", margin: 0 }}>{s.note}</p>
              </div>
            ))}
          </div>

          <p style={{ marginTop: 28, fontSize: "0.92rem" }}>{sixRules.footnote}</p>
        </div>
      </section>

      <section className="section">
        <div className="wrap container-narrow">
          <h2>Microplastics</h2>
          <p>{microplastics.intro}</p>
        </div>
        <div className="wrap grid grid-2" style={{ marginTop: 20 }}>
          <div className="card">
            <h3 style={{ color: "var(--red)" }}>What makes it worse</h3>
            <ul>
              {microplastics.worse.map((w, i) => (
                <li key={i} style={{ color: "var(--ink-soft)", marginBottom: 8 }}>
                  {w}
                </li>
              ))}
            </ul>
          </div>
          <div className="card">
            <h3 style={{ color: "var(--green)" }}>What actually reduces it</h3>
            <ul>
              {microplastics.better.map((w, i) => (
                <li key={i} style={{ color: "var(--ink-soft)", marginBottom: 8 }}>
                  {w}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="wrap" style={{ marginTop: 32 }}>
          <h3>Where the fibre actually goes</h3>
          <div className="grid grid-3">
            {microplastics.journey.map((j, i) => (
              <div key={i}>
                <div style={{ fontFamily: "var(--serif)", color: "var(--green)", fontWeight: 700 }}>
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 style={{ marginTop: 4 }}>{j.step}</h3>
                <p style={{ fontSize: "0.9rem" }}>{j.text}</p>
              </div>
            ))}
          </div>
          <div style={{ display: "flex", gap: 24, marginTop: 24 }}>
            {microplastics.stats.map((s, i) => (
              <div key={i} className="card" style={{ flex: 1 }}>
                <div style={{ fontFamily: "var(--serif)", fontSize: "2rem", fontWeight: 700 }}>{s.value}</div>
                <p style={{ fontSize: "0.85rem", margin: 0 }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap container-narrow">
          <h2>Before you buy</h2>
          <ul>
            {buyingGuidance.beforeYouBuy.map((b, i) => (
              <li key={i} style={{ marginBottom: 8 }}>
                {b}
              </li>
            ))}
          </ul>
        </div>

        <div className="wrap" style={{ marginTop: 28 }}>
          <h3>The five-second tag check</h3>
          <ol style={{ paddingLeft: 20 }}>
            {buyingGuidance.tagCheck.map((t, i) => (
              <li key={i} style={{ marginBottom: 8, color: "var(--ink-soft)" }}>
                {t}
              </li>
            ))}
          </ol>
        </div>

        <div className="wrap" style={{ marginTop: 28 }}>
          <h3>When you're done with it</h3>
          <div className="grid grid-2">
            {buyingGuidance.endOfLife.map((e, i) => (
              <div key={i} className="card">
                <h4 style={{ margin: "0 0 6px" }}>{e.title}</h4>
                <p style={{ margin: 0, fontSize: "0.9rem" }}>{e.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="wrap grid grid-2" style={{ marginTop: 28 }}>
          <div>
            <h3>Words that mean nothing</h3>
            {buyingGuidance.wordsThatMeanNothing.map((w, i) => (
              <p key={i} style={{ fontSize: "0.9rem", marginBottom: 10 }}>
                <strong style={{ color: "var(--ink)" }}>{w.term}</strong> — {w.meaning}
              </p>
            ))}
          </div>
          <div>
            <h3>Marks that mean something</h3>
            {buyingGuidance.marksThatMeanSomething.map((m, i) => (
              <p key={i} style={{ fontSize: "0.9rem", marginBottom: 10 }}>
                <strong style={{ color: "var(--green)" }}>{m.mark}</strong> — {m.meaning}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap container-narrow card" style={{ background: "var(--ink)", color: "#fdfcf7" }}>
          <div className="eyebrow" style={{ color: "#9fd6a8" }}>
            If you change one thing
          </div>
          <p style={{ color: "#e5e3d6", margin: 0 }}>{ifYouChangeOneThing}</p>
        </div>
      </section>
    </div>
  );
}
