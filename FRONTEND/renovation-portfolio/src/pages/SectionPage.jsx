import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import API from "../api/api";

function SectionPage() {

  const { id } = useParams();


  const sectionNames = {
    1: "Paint Work",
    2: "Smart Kitchen",
    3: "Carpenter Work",
    4: "Electrician Work",
    5: "Property Maps",
  };


  // const images = [
  //   "https://images.unsplash.com/photo-1598300056393-4aac492f4344?auto=format&fit=crop&w=1200&q=60",
  //   "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=60",
  //   "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=60",
  //   "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=60",
  //   "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?auto=format&fit=crop&w=1200&q=60",
  //   "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=60",
  // ];

  const [media, setMedia] = useState([]);

  useEffect(() => {

    const fetchData = async () => {
      const res = await API.get(`/media/${sectionNames[id]}`);
      setMedia(res.data);
    };

    fetchData();

  }, [id]);

  return (

    <div className="container-fluid mt-4">

      <h2 className="text-center mb-4">
        {sectionNames[id]}
      </h2>


      <div className="row g-4">

        {media.map((m, index) => (

          <div key={index} className="col-lg-3 col-md-6 col-sm-12">

            <div className="card shadow">

              <img
                // src={`http://localhost:8080/uploads/${m.filePath}`}
                src={m.filePath}
                style={{
                  height: "250px",
                  width: "100%",
                  objectFit: "cover"
                }}
              />

              <div className="card-body text-center">
                <p>{m.title}</p>
              </div>

            </div>

          </div>

        ))}

      </div>

    </div>

  );
}

export default SectionPage;