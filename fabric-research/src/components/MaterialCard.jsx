import { Link } from "react-router-dom";
import ScoreBadge from "./ScoreBadge";

export default function MaterialCard({ fabric }) {
  return (
    <Link
      to={`/fabric/${fabric.id}`}
      className="card"
      style={{
        display: "flex",
        gap: 16,
        textDecoration: "none",
        color: "var(--ink)",
      }}
    >
      <ScoreBadge score={fabric.score} />
      <div>
        <h3 style={{ marginBottom: 2 }}>{fabric.name}</h3>
        <div style={{ fontSize: "0.82rem", color: "var(--ink-soft)", marginBottom: 8 }}>
          {fabric.subtitle}
        </div>
        <p style={{ fontSize: "0.92rem", margin: 0 }}>
          {fabric.description.length > 130
            ? fabric.description.slice(0, 130).trim() + "…"
            : fabric.description}
        </p>
      </div>
    </Link>
  );
}
