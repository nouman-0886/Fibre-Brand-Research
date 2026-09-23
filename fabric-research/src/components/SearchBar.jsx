import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { searchBrands, brands } from "../utils/lookup";

export default function SearchBar({ autoFocus }) {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const wrapRef = useRef(null);
  const navigate = useNavigate();

  const results = query ? searchBrands(query).slice(0, 6) : [];

  useEffect(() => {
    function onClick(e) {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  function go(brand) {
    navigate(`/brand/${brand.id}`);
    setQuery("");
    setOpen(false);
  }

  function onSubmit(e) {
    e.preventDefault();
    const matches = searchBrands(query);
    if (matches.length > 0) go(matches[0]);
  }

  return (
    <div ref={wrapRef} style={{ position: "relative", maxWidth: 520 }}>
      <form onSubmit={onSubmit} role="search">
        <label htmlFor="brand-search" className="visually-hidden">
          Search a clothing brand
        </label>
        <input
          id="brand-search"
          type="text"
          autoFocus={autoFocus}
          placeholder="Search a clothing brand — try Khaadi, Sapphire, Outfitters..."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          style={{
            width: "100%",
            padding: "16px 18px",
            fontSize: "1.05rem",
            border: "1px solid var(--line)",
            borderRadius: "var(--radius)",
            background: "var(--card)",
            color: "var(--ink)",
            fontFamily: "var(--sans)",
          }}
        />
      </form>
      {open && query && (
        <ul
          style={{
            listStyle: "none",
            margin: "6px 0 0",
            padding: 4,
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            background: "var(--card)",
            border: "1px solid var(--line)",
            borderRadius: "var(--radius)",
            zIndex: 10,
            maxHeight: 320,
            overflowY: "auto",
          }}
        >
          {results.length === 0 && (
            <li style={{ padding: "12px 14px", color: "var(--ink-soft)", fontSize: "0.9rem" }}>
              No brand matches "{query}" yet.
            </li>
          )}
          {results.map((b) => (
            <li key={b.id}>
              <button
                onClick={() => go(b)}
                style={{
                  width: "100%",
                  textAlign: "left",
                  padding: "10px 14px",
                  background: "transparent",
                  border: "none",
                  borderRadius: "var(--radius)",
                  fontSize: "0.95rem",
                  color: "var(--ink)",
                }}
                onMouseDown={(e) => e.preventDefault()}
              >
                {b.name} <span style={{ color: "var(--ink-soft)", fontSize: "0.82rem" }}>· {b.country}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
      {!query && (
        <div style={{ marginTop: 12, display: "flex", gap: 8, flexWrap: "wrap" }}>
          {brands.slice(0, 5).map((b) => (
            <button
              key={b.id}
              onClick={() => go(b)}
              className="pill"
              style={{ border: "1px solid var(--line)", background: "var(--card)" }}
            >
              {b.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
