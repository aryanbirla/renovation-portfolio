import { useState, useEffect } from "react";
import API from "../api/api";

function ManageMedia() {

  const data = [
    { id: 1, title: "Paint Work 1" },
    { id: 2, title: "Kitchen Work 1" },
    { id: 3, title: "Carpenter Work 1" },
  ];

  const [media, setMedia] = useState([]);

  useEffect(() => {

    const fetchData = async () => {
      const res = await API.get("/media/Paint Work");
      setMedia(res.data);
    };

    fetchData();

  }, []);

  useEffect(() => {

    const fetchData = async () => {
      const res = await API.get("/media/Paint Work");
      setMedia(res.data);
    };

    fetchData();

  }, []);

  const handleDelete = async (id) => {

    await API.delete(`/media/${id}`);

    setMedia(media.filter((m) => m.id !== id));
  };

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
          width: "700px",
        }}
      >

        <h3 style={{ textAlign: "center" }}>
          Manage Media
        </h3>


        <table className="table mt-3">

          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>

            {media.map((m) => (

              <tr key={m.id}>

                <td>{m.id}</td>
                <td>{m.title}</td>

                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(m.id)}
                  >
                    Delete
                  </button>
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>

  );

}

export default ManageMedia;