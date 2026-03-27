function BeforeAfter() {

  const works = [
    {
      before:
        "https://images.unsplash.com/photo-1600585152220-90363fe7e115",
      after:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    },
    {
      before:
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
      after:
        "https://images.unsplash.com/photo-1560185007-cde436f6a4d0",
    },
    {
      before:
        "https://images.unsplash.com/photo-1598300056393-4aac492f4344",
      after:
        "https://images.unsplash.com/photo-1581579185169-9d4e0f8a2b5c",
    },
  ];


  return (

    <div className="container-fluid mt-4">

      <h2 className="text-center mb-4">
        Before / After Property
      </h2>


      <div className="row g-4">

        {works.map((w, i) => (

          <div className="col-md-4" key={i}>

            <div className="card shadow">

              <div className="card-body">

                <h5 className="text-center">
                  Work {i + 1}
                </h5>

                <div className="row">

                  <div className="col-6">

                    <p className="text-center">
                      Before
                    </p>

                    <img
                      src={w.before}
                      className="img-fluid"
                      style={{
                        height: "150px",
                        objectFit: "cover",
                      }}
                    />

                  </div>


                  <div className="col-6">

                    <p className="text-center">
                      After
                    </p>

                    <img
                      src={w.after}
                      className="img-fluid"
                      style={{
                        height: "150px",
                        objectFit: "cover",
                      }}
                    />

                  </div>

                </div>

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>

  );

}

export default BeforeAfter;