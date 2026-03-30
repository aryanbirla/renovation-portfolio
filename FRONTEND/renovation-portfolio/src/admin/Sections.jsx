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
        padding: "20px",
      }}
    >

      {/* overlay */}
      <div
        style={{
          background: "rgba(0,0,0,0.4)",
          position: "fixed",
          width: "100%",
          height: "100%",
          top: 0,
          left: 0,
        }}
      />

      {/* panel */}
      <div
        style={{
          position: "relative",
          background: "white",
          padding: "clamp(16px, 4vw, 30px)",
          width: "100%",
          maxWidth: "600px",
          borderRadius: "6px",
          boxSizing: "border-box",
        }}
      >
        <h3 style={{ textAlign: "center", fontSize: "clamp(18px, 5vw, 24px)" }}>
          Sections
        </h3>

        <ul className="list-group mt-3">
          {sections.map((s, i) => (
            <li
              key={i}
              className="list-group-item d-flex justify-content-between align-items-center"
              style={{ fontSize: "clamp(13px, 3.5vw, 16px)", gap: "10px" }}
            >
              {s}
              <button
                className="btn btn-dark btn-sm"
                style={{ whiteSpace: "nowrap", flexShrink: 0 }}
              >
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