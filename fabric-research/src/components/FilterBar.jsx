const TYPES = [
  { id: "all", label: "All" },
  { id: "plant", label: "Plant" },
  { id: "animal", label: "Animal" },
  { id: "recycled", label: "Recycled" },
  { id: "regenerated", label: "Regenerated" },
  { id: "synthetic", label: "Synthetic" },
];

export default function FilterBar({ type, setType, sort, setSort }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 16, marginBottom: 28 }}>
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
        {TYPES.map((t) => (
          <button
            key={t.id}
            onClick={() => setType(t.id)}
            className="pill"
            style={{
              background: type === t.id ? "var(--green)" : "var(--card)",
              color: type === t.id ? "#fdfcf7" : "var(--ink-soft)",
              borderColor: type === t.id ? "var(--green)" : "var(--line)",
            }}
          >
            {t.label}
          </button>
        ))}
      </div>
      <label style={{ fontSize: "0.88rem", color: "var(--ink-soft)", display: "flex", alignItems: "center", gap: 8 }}>
        Sort by
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          style={{
            padding: "6px 10px",
            border: "1px solid var(--line)",
            borderRadius: "var(--radius)",
            background: "var(--card)",
            color: "var(--ink)",
            fontFamily: "var(--sans)",
          }}
        >
          <option value="score">Score (high to low)</option>
          <option value="az">A–Z</option>
        </select>
      </label>
    </div>
  );
}
