import { Link } from "react-router-dom";

function Home() {
  return (
    <div>


      {/* HERO IMAGE */}

      {/* HERO SECTION */}

      <div
        style={{
          width: "100%",
          height: "600px",
          backgroundImage:
            "url(https://images.unsplash.com/photo-1618221195710-dd6b41faaea6)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >

        <div
          style={{
            textAlign: "center",
            color: "white",
          }}
        >

          <h1
            style={{
              fontSize: "48px",
              fontWeight: "600",
              letterSpacing: "2px",
            }}
          >
            Interior & Renovation Design
          </h1>

          <p
            style={{
              fontSize: "18px",
              marginTop: "10px",
            }}
          >
            Paint | Kitchen | Carpenter | Electrician | Property Renovation
          </p>

        </div>

      </div>


      {/* CATEGORY SECTION */}

      <div className="container-fluid px-5 mt-5">

        <h2 className="text-center mb-4">
          Our Services
        </h2>

        <div className="row g-4">


          <div className="col-md-4">

            <Link to="/section/1">

              <img
                src="./Images/Textured-Paints.webp"
                style={{
                  height: "250px",
                  objectFit: "cover",
                  width: "100%"
                }}
              />

              <h5 className="text-center mt-2">
                Paint Work
              </h5>

            </Link>

          </div>



          <div className="col-md-4">

            <Link to="/section/2">

              <img
                src="./Images/Modular-Kitchen.webp"
                style={{
                  height: "250px",
                  objectFit: "cover",
                  width: "100%"
                }}
              />

              <h5 className="text-center mt-2">
                Smart Kitchen
              </h5>

            </Link>

          </div>



          <div className="col-md-4">

            <Link to="/section/3">

              <img
                src="./Images/WoodWork/woodWork2.webp"
                style={{
                  height: "250px",
                  objectFit: "cover",
                  width: "100%"
                }}
              />

              <h5 className="text-center mt-2">
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
          minHeight: "500px",
          backgroundImage:
            "url(https://images.unsplash.com/photo-1503387762-592deb58ef4e)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "80px 20px",
        }}
      >

        <div
          style={{
            maxWidth: "800px",
            textAlign: "center",
            color: "white",
            background: "rgba(0,0,0,0.4)",
            padding: "40px",
          }}
        >

          <h2
            style={{
              fontSize: "36px",
              fontWeight: "600",
              marginBottom: "20px",
            }}
          >
            About Our Renovation & Interior Work
          </h2>


          <p style={{ fontSize: "18px" }}>
            We specialize in high-quality home renovation,
            interior design, paint work, smart kitchen,
            carpenter work, and complete property
            transformation. Our goal is to create modern,
            elegant, and durable living spaces that match
            the lifestyle of our clients.
          </p>


          <p style={{ fontSize: "18px" }}>
            With years of experience in architectural
            renovation and interior solutions, we ensure
            professional finishing, strong materials, and
            beautiful designs for every project we deliver.
          </p>


          <button
            className="btn btn-light mt-3"
          >
            View Our Work
          </button>

        </div>

      </div>







    </div>
  );
}

export default Home;