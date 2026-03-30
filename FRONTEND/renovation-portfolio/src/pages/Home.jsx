import { Link } from "react-router-dom";

function Home() {
  return (
    <div style={{ overflowX: "hidden", width: "100%" }}>

      {/* HERO SECTION */}
      <div
        style={{
          width: "100%",
          minHeight: "50vh",
          backgroundImage:
            "url(https://images.unsplash.com/photo-1618221195710-dd6b41faaea6)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "32px 16px",
        }}
      >
        <div
          style={{
            textAlign: "center",
            color: "white",
            width: "100%",
            maxWidth: "700px",
            background: "rgba(0,0,0,0.45)",
            padding: "24px 20px",
            borderRadius: "4px",
            boxSizing: "border-box",
          }}
        >
          <h1
            style={{
              fontSize: "clamp(20px, 6vw, 48px)",
              fontWeight: "600",
              letterSpacing: "1px",
              marginBottom: "8px",
              lineHeight: "1.3",
            }}
          >
            Interior & Renovation Design
          </h1>
          <p
            style={{
              fontSize: "clamp(11px, 3vw, 17px)",
              marginBottom: 0,
              lineHeight: "1.8",
              opacity: 0.9,
            }}
          >
            Paint | Kitchen | Carpenter
            <br className="d-inline d-sm-none" />
            {" "}| Electrician | Property Renovation
          </p>
        </div>
      </div>


      {/* CATEGORY SECTION */}
      <div style={{ padding: "32px 16px 0", width: "100%", boxSizing: "border-box" }}>

        <h2
          className="text-center"
          style={{
            fontSize: "clamp(18px, 5vw, 30px)",
            marginBottom: "20px",
            fontWeight: "600",
          }}
        >
          Our Services
        </h2>

        {/* On mobile: single column full width. On md+: 3 columns */}
        <div className="row g-3">

          <div className="col-12 col-md-4">
            <Link to="/section/1" style={{ textDecoration: "none", color: "inherit" }}>
              <div style={{ overflow: "hidden", borderRadius: "6px" }}>
                <img
                  src="/Images/Textured-Paints.webp"
                  alt="Paint Work"
                  style={{
                    height: "200px",
                    objectFit: "cover",
                    width: "100%",
                    display: "block",
                  }}
                />
              </div>
              <h5
                className="text-center mt-2"
                style={{ fontSize: "clamp(14px, 4vw, 17px)", fontWeight: "500" }}
              >
                Paint Work
              </h5>
            </Link>
          </div>

          <div className="col-12 col-md-4">
            <Link to="/section/2" style={{ textDecoration: "none", color: "inherit" }}>
              <div style={{ overflow: "hidden", borderRadius: "6px" }}>
                <img
                  src="/Images/Modular-Kitchen.webp"
                  alt="Smart Kitchen"
                  style={{
                    height: "200px",
                    objectFit: "cover",
                    width: "100%",
                    display: "block",
                  }}
                />
              </div>
              <h5
                className="text-center mt-2"
                style={{ fontSize: "clamp(14px, 4vw, 17px)", fontWeight: "500" }}
              >
                Smart Kitchen
              </h5>
            </Link>
          </div>

          <div className="col-12 col-md-4">
            <Link to="/section/3" style={{ textDecoration: "none", color: "inherit" }}>
              <div style={{ overflow: "hidden", borderRadius: "6px" }}>
                <img
                  src="/Images/WoodWork/woodWork2.webp"
                  alt="Carpenter Work"
                  style={{
                    height: "200px",
                    objectFit: "cover",
                    width: "100%",
                    display: "block",
                  }}
                />
              </div>
              <h5
                className="text-center mt-2"
                style={{ fontSize: "clamp(14px, 4vw, 17px)", fontWeight: "500" }}
              >
                Carpenter Work
              </h5>
            </Link>
          </div>

        </div>
      </div>


      {/* ABOUT SECTION */}
      <div
        style={{
          width: "100%",
          minHeight: "380px",
          backgroundImage:
            "url(https://images.unsplash.com/photo-1503387762-592deb58ef4e)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "48px 16px",
          marginTop: "36px",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "720px",
            textAlign: "center",
            color: "white",
            background: "rgba(0,0,0,0.5)",
            padding: "clamp(20px, 5vw, 40px) clamp(16px, 5vw, 40px)",
            borderRadius: "4px",
            boxSizing: "border-box",
          }}
        >
          <h2
            style={{
              fontSize: "clamp(18px, 5vw, 32px)",
              fontWeight: "600",
              marginBottom: "14px",
              lineHeight: "1.3",
            }}
          >
            About Our Renovation & Interior Work
          </h2>

          <p
            style={{
              fontSize: "clamp(13px, 3.5vw, 17px)",
              lineHeight: "1.75",
              marginBottom: "12px",
            }}
          >
            We specialize in high-quality home renovation, interior design,
            paint work, smart kitchen, carpenter work, and complete property
            transformation. Our goal is to create modern, elegant, and durable
            living spaces that match the lifestyle of our clients.
          </p>

          <p
            style={{
              fontSize: "clamp(13px, 3.5vw, 17px)",
              lineHeight: "1.75",
              marginBottom: "0",
            }}
          >
            With years of experience in architectural renovation and interior
            solutions, we ensure professional finishing, strong materials, and
            beautiful designs for every project we deliver.
          </p>

          <Link to="/gallery">
            <button
              className="btn btn-light mt-4"
              style={{ fontWeight: "500", padding: "10px 32px", fontSize: "clamp(13px, 3vw, 16px)" }}
            >
              View Our Work
            </button>
          </Link>
        </div>
      </div>

    </div>
  );
}

export default Home;