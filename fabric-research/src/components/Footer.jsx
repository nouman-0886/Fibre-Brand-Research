import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid var(--line)", marginTop: 40 }}>
      <div
        className="wrap"
        style={{
          padding: "36px 24px",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 24,
        }}
      >
        <div style={{ maxWidth: 360 }}>
          <div
            style={{
              fontFamily: "var(--serif)",
              fontWeight: 700,
              marginBottom: 6,
            }}
          >
            Fibre &amp; Brand Research
          </div>
          <p style={{ fontSize: "0.9rem", margin: 0 }}>
            A Pakistan-focused clothing material research tool: what your
            clothes are made of, and what that actually costs.
          </p>
        </div>
        <div
          style={{
            textAlign: "center",
            paddingTop: 24,
            fontSize: "0.85rem",
          }}
        >
          Made by{" "}
          <a
            href="YOUR_LINK_HERE"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontWeight: 600 }}
          >
            Muhammad Nouman
          </a>
        </div>
        <nav style={{ display: "flex", gap: 32, fontSize: "0.9rem" }}>
          <div>
            <div style={{ fontWeight: 600, marginBottom: 8 }}>Explore</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              <Link to="/brands">Brand directory</Link>
              <Link to="/fabrics">Fabric Scorecard</Link>
              <Link to="/learn">Learn</Link>
            </div>
          </div>
          <div>
            <div style={{ fontWeight: 600, marginBottom: 8 }}>About</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              <Link to="/about">Methodology &amp; sources</Link>
            </div>
          </div>
        </nav>
      </div>
    </footer>
  );
}
