import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-charcoal flex flex-col relative overflow-x-hidden">

      {/* Ambient background blobs */}
      <div aria-hidden="true" className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full opacity-30"
          style={{ background: "radial-gradient(circle, #7c3aed 0%, transparent 70%)", filter: "blur(80px)" }} />
        <div className="absolute -bottom-32 -right-32 w-[400px] h-[400px] rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, #5b21b6 0%, transparent 70%)", filter: "blur(80px)" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full opacity-10"
          style={{ background: "radial-gradient(ellipse, #7c3aed 0%, transparent 70%)", filter: "blur(100px)" }} />
      </div>

      <Navbar />

      <main className="flex-1 relative z-10">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
