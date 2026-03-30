function Footer() {
  return (
    <div
      style={{
        background:
          "linear-gradient(to right, #212529, #343a40)",
        color: "white",
        padding: "40px 0",
      }}
    >
      <div className="container-fluid">

        <div className="row">

          {/* About */}

          <div className="col-md-4">

            <h5>Renovation Portfolio</h5>

            <p>
              We provide home renovation, paint work,
              smart kitchen, carpenter work,
              electrician work and property renovation.
            </p>

          </div>


          {/* Services */}

          <div className="col-md-4">

            <h5>Services</h5>

            <p>Paint Work</p>
            <p>Smart Kitchen</p>
            <p>Carpenter Work</p>
            <p>Electrician Work</p>
            <p>Property Renovation</p>

          </div>


          {/* Contact */}

          <div className="col-md-4">

            <h5>Contact</h5>

            <p>📞 9876543210</p>
            <p>📍 Delhi, India</p>
            <p>✉ renovation@gmail.com</p>

          </div>

        </div>


        <hr />


        <div className="text-center">

          © 2026 Renovation Portfolio | All Rights Reserved

        </div>

      </div>
    </div>
  );
}

export default Footer;