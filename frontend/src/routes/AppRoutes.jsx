import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Certificates from "../pages/Certificates";
import Experience from "../pages/Experience";
import Projects from "../pages/Projects";
import Resume from "../pages/Resume";

function AppRoutes() {
  return (
    <Routes>
      {/* Main site with navbar + footer */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/certificates" element={<Certificates />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
      </Route>

      {/* Resume — standalone page, clean for printing */}
      <Route path="/resume" element={<Resume />} />
    </Routes>
  );
}

export default AppRoutes;
