import { useNavigate } from "react-router-dom";
import Ico from "./Icon";
import StaticMap from "./Common/StaticMap";
import { attractions, CONTACT, MAPS_URL } from "../data/mockData";
import { waLink } from "../utils/whatsapp";

export default function Footer() {
  const navigate = useNavigate();
  const go = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#1B5E20] text-white">
      {/* WA Banner */}
      <div className="px-4 sm:px-6 lg:px-8 pt-10">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5" style={{ background: "linear-gradient(135deg,#2E7D32,#4FC3F7)" }}>
            <div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-1">Siap Merencanakan Kunjungan Anda?</h3>
              <p className="text-white/85 text-sm">Hubungi kami untuk informasi tiket dan reservasi group</p>
            </div>
            <a href={waLink()} target="_blank" rel="noopener noreferrer" className="shrink-0 inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-green-700 font-bold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all">
              <Ico name="MessageCircle" size={20} fill="#2E7D32" className="text-white" /> Hubungi via WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Map */}
      <div className="px-4 sm:px-6 lg:px-8 pt-10">
        <div className="max-w-7xl mx-auto">
          <h3 className="font-bold text-lg mb-4 flex items-center gap-2"><Ico name="MapPin" size={20} className="text-sky-400" /> Temukan Lokasi Kami</h3>
          <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="group block relative rounded-2xl overflow-hidden shadow-lg aspect-[21/9] sm:aspect-[3/1] border border-white/10">
            <StaticMap />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
            <span className="absolute top-3 left-3 sm:top-4 sm:left-4 inline-flex items-center gap-1.5 px-3 py-2 rounded-full bg-white text-green-700 text-xs sm:text-sm font-bold shadow-md">
              <Ico name="MapPin" size={14} /> Buka di Maps <Ico name="ArrowRight" size={12} />
            </span>
          </a>
          <p className="text-white/60 text-xs mt-2">Klik peta untuk membuka rute lengkap di Google Maps</p>
        </div>
      </div>

      {/* Links */}
      <div className="px-4 sm:px-6 lg:px-8 pt-10 pb-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: "linear-gradient(135deg,#4FC3F7,#FFC107)" }}><Ico name="TreePine" size={20} className="text-white" /></div>
                <span className="font-extrabold text-lg">Jlengut</span>
              </div>
              <p className="text-white/70 text-sm leading-relaxed">Destinasi wisata keluarga dan edukasi alam di Klaten, Jawa Tengah. Explore Nature, Learn, and Have Fun Together.</p>
              <div className="flex gap-3 mt-4">
                <a href={CONTACT.instagramUrl} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"><Ico name="Instagram" size={16} /></a>
                <a href={CONTACT.facebookUrl} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"><Ico name="Facebook" size={16} /></a>
                <a href={waLink()} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"><Ico name="MessageCircle" size={16} /></a>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-sm uppercase tracking-wide text-white/90">Explore</h4>
              <ul className="space-y-2.5 text-sm">
                {attractions.map((a) => <li key={a.id}><button onClick={() => go(a.path)} className="text-white/70 hover:text-white transition-colors">{a.name}</button></li>)}
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-sm uppercase tracking-wide text-white/90">Informasi</h4>
              <ul className="space-y-2.5 text-sm">
                <li><button onClick={() => go("/tickets")} className="text-white/70 hover:text-white transition-colors">Tiket & Booking</button></li>
                <li><button onClick={() => go("/info")} className="text-white/70 hover:text-white transition-colors">FAQ</button></li>
                <li><button onClick={() => go("/info")} className="text-white/70 hover:text-white transition-colors">Jam Operasional</button></li>
                <li><button onClick={() => go("/about")} className="text-white/70 hover:text-white transition-colors">Tentang Kami</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-sm uppercase tracking-wide text-white/90">Kontak</h4>
              <ul className="space-y-2.5 text-sm text-white/70">
                <li className="flex items-start gap-2"><Ico name="MapPin" size={16} className="mt-0.5 shrink-0" /> {CONTACT.address}</li>
                <li className="flex items-center gap-2"><Ico name="Phone" size={16} /> {CONTACT.phone}</li>
                <li className="flex items-center gap-2"><Ico name="Mail" size={16} /> {CONTACT.email}</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-sm text-white/60">
            <span>© 2026 Taman Wisata Jlengut. Seluruh hak cipta dilindungi.</span>
            <span>Dibuat dengan 💚 untuk keluarga Indonesia</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
