import { Routes, Route } from "react-router-dom";
import MainLayout   from "../layouts/MainLayout";
import LandingPage  from "../pages/LandingPage";
import Resume       from "../pages/Resume";

export default function AppRoutes() {
  return (
    <Routes>
      {/* One-page portfolio */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<LandingPage />} />
      </Route>

      {/* Resume — standalone, clean for printing */}
      <Route path="/resume" element={<Resume />} />
    </Routes>
  );
}
