import { scoreBand } from "../utils/lookup";

export default function ScoreBadge({ score, size = "md" }) {
  const band = scoreBand(score);
  const dims = size === "lg" ? { w: 64, h: 64, fs: "1.4rem" } : { w: 46, h: 46, fs: "1rem" };

  return (
    <div
      style={{
        width: dims.w,
        height: dims.w,
        borderRadius: "50%",
        background: band.color,
        color: "#fdfcf7",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "var(--serif)",
        fontWeight: 700,
        fontSize: dims.fs,
        flexShrink: 0,
      }}
      aria-label={`Score ${score} out of 10, ${band.label}`}
      title={`${score} / 10 — ${band.label}`}
    >
      {score}
    </div>
  );
}
