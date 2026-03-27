import { Link } from "react-router-dom";

function Dashboard() {

    return (

        <div
            style={{
                minHeight: "100vh",
                backgroundImage:
                    "url(https://images.unsplash.com/photo-1503387762-592deb58ef4e)",
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


            {/* dashboard panel */}

            <div
                style={{
                    position: "relative",
                    background: "white",
                    padding: "40px",
                    width: "700px",
                    boxShadow: "0 5px 20px rgba(0,0,0,0.3)",
                }}
            >

                <h2
                    style={{
                        textAlign: "center",
                        marginBottom: "30px",
                        letterSpacing: "1px",
                    }}
                >
                    Admin Dashboard
                </h2>


                <div className="row g-4">


                    {/* Upload */}

                    <div className="col-md-4">

                        <div
                            style={{
                                border: "1px solid #ddd",
                                padding: "20px",
                                textAlign: "center",
                            }}
                        >

                            <h5>Upload Media</h5>

                            <Link
                                to="/upload"
                                className="btn btn-dark mt-2"
                            >
                                Open
                            </Link>

                        </div>

                    </div>



                    {/* Manage */}

                    <div className="col-md-4">

                        <div
                            style={{
                                border: "1px solid #ddd",
                                padding: "20px",
                                textAlign: "center",
                            }}
                        >

                            <h5>Manage Media</h5>

                            <Link to="/manage" className="btn btn-dark mt-2">
                                Open
                            </Link>

                        </div>

                    </div>



                    {/* Sections */}

                    <div className="col-md-4">

                        <div
                            style={{
                                border: "1px solid #ddd",
                                padding: "20px",
                                textAlign: "center",
                            }}
                        >

                            <h5>Sections</h5>

                            <Link to="/sections" className="btn btn-dark mt-2">
                                Open
                            </Link>

                        </div>

                    </div>


                </div>

            </div>

        </div>

    );

}

export default Dashboard;