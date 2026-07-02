import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Ico from "./components/Icon";
import HomePage from "./pages/HomePage";
import AttractionPage from "./pages/AttractionPage";
import AnimalPage from "./pages/AnimalPage";
import PhotoSpotPage from "./pages/PhotoSpotPage";
import TicketsPage from "./pages/TicketsPage";
import InfoPage from "./pages/InfoPage";
import AboutPage from "./pages/AboutPage";
import { waLink } from "./utils/whatsapp";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/attraction/:id" element={<AttractionPage />} />
        <Route path="/animal/:id" element={<AnimalPage />} />
        <Route path="/photospot/:id" element={<PhotoSpotPage />} />
        <Route path="/tickets" element={<TicketsPage />} />
        <Route path="/info" element={<InfoPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
      <Footer />
      {/* WhatsApp Float */}
      <a
        href={waLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 lg:w-16 lg:h-16 rounded-full bg-[#25D366] shadow-xl flex items-center justify-center hover:scale-110 transition-transform animate-bounce-slow"
        title="Chat via WhatsApp"
      >
        <Ico name="MessageCircle" size={28} className="text-white" fill="white" />
      </a>
    </div>
  );
}
