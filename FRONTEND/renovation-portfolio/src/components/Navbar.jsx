import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div
      style={{
        width: "100%",
        background: "white",
        borderBottom: "1px solid #eee",
        padding: "15px 0",
      }}
    >
      <div
        className="container-fluid"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 40px",
        }}
      >

        {/* LEFT MENU */}

        <div style={{ display: "flex", gap: "20px" }}>

          <Link to="/" style={linkStyle}>
            Home
          </Link>

          <Link to="/section/1" style={linkStyle}>
            Paint
          </Link>

          <Link to="/section/2" style={linkStyle}>
            Kitchen
          </Link>

          <Link to="/before-after" style={linkStyle}>
            Portfolio
          </Link>

        </div>


        {/* LOGO CENTER */}

        <div
          style={{
            fontSize: "20px",
            fontWeight: "600",
            letterSpacing: "2px",
          }}
        >
          RENOVATION DESIGN
        </div>


        {/* RIGHT MENU */}

        <div style={{ display: "flex", gap: "20px" }}>

          <Link to="/section/3" style={linkStyle}>
            Carpenter
          </Link>

          <Link to="/section/4" style={linkStyle}>
            Electrician
          </Link>

          <Link to="/login" style={linkStyle}>
            Login
          </Link>

        </div>

      </div>
    </div>
  );
}

const linkStyle = {
  textDecoration: "none",
  color: "#333",
  fontWeight: "500",
};

export default Navbar;