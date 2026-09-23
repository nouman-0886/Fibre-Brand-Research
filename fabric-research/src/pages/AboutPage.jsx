import education from "../data/education.json";
import { brands } from "../utils/lookup";

export default function AboutPage() {
  const localCount = brands.filter((b) => b.origin === "local").length;
  const intlCount = brands.filter((b) => b.origin === "international").length;

  return (
    <div>
      <section className="section" style={{ paddingBottom: 32 }}>
        <div className="wrap container-narrow">
          <div className="eyebrow">Methodology &amp; sources</div>
          <h1>Where this data comes from</h1>
          <p className="lede">
            This project is a research tool, not a shopping guide and not a brand ranking. Every claim
            is traceable back to a source, and brand claims are labelled separately from independently
            documented facts rather than presented as equivalent.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap container-narrow">
          <h2>Fabric scoring</h2>
          <p>{education.sourcesAndMethod}</p>
        </div>
      </section>

      <section className="section">
        <div className="wrap container-narrow">
          <h2>Brand research</h2>
          <p>
            The brand directory covers {localCount} Pakistani brands and {intlCount} international
            brands commonly available to Pakistani consumers — a starting set, not an exhaustive
            catalogue. Brand descriptions, founding history and headquarters are drawn from official
            brand sites, Wikipedia and public reporting, cited on each brand's page.
          </p>
          <p>
            Materials are based on documented product information where it was available (for
            example, J.'s own product description, or the specific materials named in H&amp;M's,
            Zara's, Nike's and Levi's public sustainability reporting). Where a brand doesn't publish
            per-product composition data, the materials listed reflect what's typical for that brand's
            product category rather than a confirmed audit of every label — this is disclosed on the
            brand's page via a materials note.
          </p>
          <p>
            Sustainability claims and initiatives are each labelled <strong>brand claim</strong> (the
            brand's own stated position) or <strong>documented</strong> (confirmed through independent
            or third-party reporting). Neither label is an endorsement, and no brand is given an
            overall environmental score — the scorecard rates materials, not companies.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap container-narrow">
          <h2>How J. was researched</h2>
          <p>
            J. (Junaid Jamshed) is included per the project brief. Its founding history, store count
            and international expansion come from public brand-history sources. Its materials come
            from the brand's own product description — "silk, chiffon, cotton, cambric, lawn and
            fabrics that suit the season" — mapped conservatively to scorecard fabrics (cambric and
            lawn to conventional cotton, silk to mulberry silk), with chiffon left unmapped since its
            fibre content isn't specified in available sources. This reasoning is shown in full on J.'s
            brand page.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap container-narrow">
          <h2>How to add a Pakistani brand</h2>
          <p>
            Add an object to <code>src/data/brands.json</code> with <code>"origin": "local"</code>, an
            <code>id</code>, name, description, categories, and a <code>materials</code> array
            referencing fabric IDs from <code>fabrics.json</code>. No component code needs to change.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap container-narrow">
          <h2>How to add an international brand</h2>
          <p>
            Same process, with <code>"origin": "international"</code>. Only add materials and claims
            that are documented in a real source — record the source URL in the brand's{" "}
            <code>sources</code> array, and tag each claim as <code>"brand-claim"</code> or{" "}
            <code>"documented"</code> in <code>sustainabilityClaims</code>.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap container-narrow">
          <h2>How to add a new material</h2>
          <p>
            Add an object to <code>src/data/fabrics.json</code> following the existing schema (id,
            name, type, score, description, pros, cons, availability, recommendedUses, source). It
            will automatically appear on the scorecard and become available for brands to reference.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap container-narrow">
          <h2>Run it locally</h2>
          <p>
            <code>npm install</code> then <code>npm run dev</code>, and open the printed local URL.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap container-narrow">
          <h2>Scope and limits</h2>
          <p>
            This is a starting dataset built to demonstrate the search → brand → material → score
            relationship working end to end, not an exhaustive catalogue of every brand sold in
            Pakistan. Pricing data was intentionally left out, since reliable, current Pakistan-specific
            pricing wasn't available to verify at the time of writing. Where a field genuinely has no
            documented information, the interface says so directly rather than filling the gap with a
            guess.
          </p>
        </div>
      </section>
    </div>
  );
}
