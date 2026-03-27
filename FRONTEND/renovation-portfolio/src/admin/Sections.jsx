function Sections() {

  const sections = [
    "Paint Work",
    "Smart Kitchen",
    "Property Maps",
    "Before After",
    "Carpenter Work",
    "Electrician Work",
  ];

  return (

    <div
      style={{
        minHeight: "100vh",
        backgroundImage:
          "url(https://images.unsplash.com/photo-1600607687939-ce8a6c25118c)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >

      {/* overlay */}

      <div
        style={{
          background: "rgba(0,0,0,0.4)",
          position: "absolute",
          width: "100%",
          height: "100%",
          top: 0,
          left: 0,
        }}
      ></div>


      {/* panel */}

      <div
        style={{
          position: "relative",
          background: "white",
          padding: "30px",
          width: "600px",
        }}
      >

        <h3 style={{ textAlign: "center" }}>
          Sections
        </h3>


        <ul className="list-group mt-3">

          {sections.map((s, i) => (

            <li
              key={i}
              className="list-group-item d-flex justify-content-between"
            >

              {s}

              <button className="btn btn-dark btn-sm">
                Edit
              </button>

            </li>

          ))}

        </ul>

      </div>

    </div>

  );

}

export default Sections;