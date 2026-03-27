import { useState } from "react";
import axios from "axios";
import API from "../api/api";

function UploadMedia() {

    const [file, setFile] = useState(null);
  const [section, setSection] = useState("");
  const [subSection, setSubSection] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");


  const handleUpload = async () => {

    const formData = new FormData();

    formData.append("file", file);
    formData.append("section", section);
    formData.append("subSection", subSection);
    formData.append("title", title);
    formData.append("description", description);

    try {
      await API.post("/media/upload", formData);
      alert("Uploaded successfully");
    } catch (err) {
      console.error(err);
    }
  };

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
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      ></div>


      {/* form panel */}

      <div
        style={{
          position: "relative",
          background: "white",
          padding: "40px",
          width: "500px",
          boxShadow: "0 5px 20px rgba(0,0,0,0.3)",
        }}
      >

        <h3
          style={{
            textAlign: "center",
            marginBottom: "20px",
          }}
        >
          Upload Media
        </h3>


        {/* Section */}

        <div className="mb-3">

          <label>Section</label>

          <select className="form-control" onChange={(e) => setSection(e.target.value)}>

            <option>Paint Work</option>
            <option>Smart Kitchen</option>
            <option>Property Maps</option>
            <option>Before After</option>
            <option>Carpenter Work</option>
            <option>Electrician Work</option>

          </select>

        </div>


        {/* Subsection */}

        <div className="mb-3">

          <label>Sub Section</label>

          <input
            type="text"
            className="form-control"
            placeholder="Texture / Modular / etc"
            onChange={(e) => setSubSection(e.target.value)} 
          />

        </div>


        {/* Title */}

        <div className="mb-3">

          <label>Title</label>

          <input
            type="text"
            className="form-control"
            onChange={(e) => setTitle(e.target.value)}
          />

        </div>


        {/* Description */}

        <div className="mb-3">

          <label>Description</label>

          <textarea
            className="form-control"
            rows="3"
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>

        </div>


        {/* File */}

        <div className="mb-3">

          <label>Upload Image / Video</label>

          <input
            type="file"
            className="form-control"
            onChange={(e) => setFile(e.target.files[0])}
          />

        </div>


        {/* Button */}

        <button
          className="btn btn-dark w-100"
          onClick={handleUpload}
        >
          Upload Media
        </button>


      </div>

    </div>

  );

}

export default UploadMedia;