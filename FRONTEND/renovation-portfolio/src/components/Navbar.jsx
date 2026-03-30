import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  // Close menu on outside click
  useEffect(() => {
    if (!menuOpen) return;
    const handler = (e) => {
      if (!e.target.closest("#navbar-root")) setMenuOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [menuOpen]);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/section/1", label: "Paint" },
    { to: "/section/2", label: "Kitchen" },
    { to: "/before-after", label: "Portfolio" },
    { to: "/section/3", label: "Carpenter" },
    { to: "/section/4", label: "Electrician" },
    { to: "/login", label: "Login" },
  ];

  return (
    <div
      id="navbar-root"
      style={{
        width: "100%",
        background: "white",
        borderBottom: "1px solid #eee",
        position: "relative",
        zIndex: 1000,
      }}
    >
      {/* ── MAIN BAR ── */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "14px 20px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {/* LOGO */}
        <Link
          to="/"
          style={{
            fontSize: "clamp(14px, 4vw, 20px)",
            fontWeight: "700",
            letterSpacing: "2px",
            textDecoration: "none",
            color: "#222",
            whiteSpace: "nowrap",
          }}
        >
          RENOVATION DESIGN
        </Link>

        {/* DESKTOP LINKS */}
        <div
          className="d-none d-md-flex"
          style={{ gap: "24px", alignItems: "center" }}
        >
          {navLinks.map((link) => (
            <Link key={link.to} to={link.to} style={linkStyle}>
              {link.label}
            </Link>
          ))}
        </div>

        {/* HAMBURGER — mobile only */}
        <button
          className="d-md-none"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "4px",
            display: "flex",
            flexDirection: "column",
            gap: "5px",
          }}
        >
          <span style={barStyle(menuOpen, "top")} />
          <span style={barStyle(menuOpen, "mid")} />
          <span style={barStyle(menuOpen, "bot")} />
        </button>
      </div>

      {/* MOBILE DROPDOWN */}
      <div
        style={{
          overflow: "hidden",
          maxHeight: menuOpen ? `${navLinks.length * 52}px` : "0",
          transition: "max-height 0.3s ease",
          background: "white",
          borderTop: menuOpen ? "1px solid #eee" : "none",
        }}
      >
        {navLinks.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            style={{
              display: "block",
              padding: "14px 24px",
              textDecoration: "none",
              color: "#333",
              fontWeight: "500",
              fontSize: "15px",
              borderBottom: "1px solid #f5f5f5",
            }}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

// Animated hamburger bars
function barStyle(open, pos) {
  const base = {
    display: "block",
    width: "24px",
    height: "2px",
    background: "#333",
    borderRadius: "2px",
    transition: "transform 0.25s ease, opacity 0.25s ease",
    transformOrigin: "center",
  };
  if (open) {
    if (pos === "top") return { ...base, transform: "translateY(7px) rotate(45deg)" };
    if (pos === "mid") return { ...base, opacity: 0 };
    if (pos === "bot") return { ...base, transform: "translateY(-7px) rotate(-45deg)" };
  }
  return base;
}

const linkStyle = {
  textDecoration: "none",
  color: "#333",
  fontWeight: "500",
  fontSize: "14px",
  whiteSpace: "nowrap",
};

export default Navbar;