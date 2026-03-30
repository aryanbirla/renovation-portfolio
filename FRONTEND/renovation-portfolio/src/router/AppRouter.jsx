import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import SectionPage from "../pages/SectionPage";
import BeforeAfter from "../pages/BeforeAfter";
import Login from "../pages/Login";

import Dashboard from "../admin/Dashboard";
import UploadMedia from "../admin/UploadMedia";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ManageMedia from "../admin/ManageMedia";
import Sections from "../admin/Sections";

function AppRouter() {
  return (
    <BrowserRouter>
      <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>

        <Navbar />

        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/section/:id" element={<SectionPage />} />
            <Route path="/before-after" element={<BeforeAfter />} />
            <Route path="/login" element={<Login />} />
            <Route path="/admin" element={<Dashboard />} />
            <Route path="/upload" element={<UploadMedia />} />
            <Route path="/manage" element={<ManageMedia />} />
            <Route path="/sections" element={<Sections />} />
          </Routes>
        </main>

        <Footer />

      </div>
    </BrowserRouter>
  );
}

export default AppRouter;