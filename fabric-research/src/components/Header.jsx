import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header style={{ borderBottom: "1px solid var(--line)", background: "var(--bg)" }}>
      <div
        className="wrap"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "18px 24px",
        }}
      >
        <Link to="/" className="brand-logo">
          Fibre &amp; Brand Research
        </Link>
        <nav style={{ display: "flex", gap: 24, alignItems: "center" }}>
          <NavLink to="/brands" className={navClass} end>
            Brands
          </NavLink>
          <NavLink to="/fabrics" className={navClass} end>
            Scorecard
          </NavLink>
          <NavLink to="/learn" className={navClass} end>
            Learn
          </NavLink>
          <NavLink to="/about" className={navClass} end>
            About
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

function navClass({ isActive }) {
  return isActive ? "nav-link nav-link-active" : "nav-link";
}
