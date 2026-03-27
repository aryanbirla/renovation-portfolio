function Login() {

  return (

    <div
      style={{
        minHeight: "100vh",
        backgroundImage:
          "url(https://images.unsplash.com/photo-1618221195710-dd6b41faaea6)",
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
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      ></div>


      {/* form */}

      <div
        style={{
          position: "relative",
          background: "white",
          padding: "40px",
          width: "350px",
          borderRadius: "4px",
          boxShadow: "0 5px 20px rgba(0,0,0,0.3)",
        }}
      >

        <h3
          style={{
            textAlign: "center",
            marginBottom: "20px",
            letterSpacing: "1px",
          }}
        >
          Admin Login
        </h3>


        <input
          className="form-control mb-3"
          placeholder="Username"
        />


        <input
          className="form-control mb-3"
          placeholder="Password"
          type="password"
        />


        <button
          className="btn btn-dark w-100"
        >
          Login
        </button>


      </div>

    </div>

  );

}

export default Login;