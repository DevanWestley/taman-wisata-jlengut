import { useNavigate, useParams } from "react-router-dom";
import Ico from "../components/Icon";
import FadeIn from "../components/Common/FadeIn";
import Pill from "../components/Common/Pill";
import { photoSpots } from "../data/mockData";
import { PhotoSpot } from "../models";
import { openWA } from "../utils/whatsapp";

export default function PhotoSpotPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const sp = photoSpots.find((x) => x.id === id) || photoSpots[0];
  const others = PhotoSpot.others(photoSpots, sp.id);

  return (
    <div className="pt-16 lg:pt-20">
      <div className="relative h-[45vh] min-h-[320px] overflow-hidden">
        <Pill gradient={sp.gradient} image={sp.heroImage} className="w-full h-full"><div className="absolute inset-0 bg-black/20" /></Pill>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <Ico name="Camera" size={48} className="text-white mb-3 drop-shadow-lg" />
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white drop-shadow-lg">{sp.name}</h1>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 py-3 flex flex-wrap gap-2 items-center text-sm text-gray-500">
        <button onClick={() => navigate("/")} className="hover:text-green-700">Home</button><span>/</span>
        <button onClick={() => navigate("/attraction/photospot")} className="hover:text-green-700">Explore</button><span>/</span>
        <button onClick={() => navigate("/attraction/photospot")} className="hover:text-green-700">Photo Spot</button><span>/</span>
        <span className="text-green-700 font-medium">{sp.name}</span>
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 lg:py-12">
        <FadeIn>
          <div className="flex items-center gap-3 mb-5">
            <div className="w-14 h-14 rounded-full bg-green-50 flex items-center justify-center shrink-0"><Ico name="Camera" size={26} className="text-green-700" /></div>
            <div><h2 className="text-2xl font-bold text-gray-800">{sp.name}</h2><p className="text-sm text-gray-500">Photo Spot — Taman Wisata Jlengut</p></div>
          </div>
          <p className="text-gray-600 leading-relaxed mb-8">{sp.longDesc}</p>
        </FadeIn>
        <FadeIn delay={100}>
          <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2"><Ico name="Sparkles" size={20} className="text-yellow-400" /> Tips Foto</h3>
          <div className="space-y-3 mb-10">
            {sp.tips.map((t, i) => (
              <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-blue-50">
                <Ico name="CheckCircle" size={18} className="text-sky-400 shrink-0 mt-0.5" /><span className="text-gray-700 text-sm">{t}</span>
              </div>
            ))}
          </div>
        </FadeIn>
        <FadeIn delay={150}>
          <div className="border-t border-gray-100 pt-8">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Spot Foto Lainnya</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {others.map((o) => (
                <button key={o.id} onClick={() => navigate(o.path)} className="group block text-left bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg border border-gray-100 hover:border-transparent transition-all">
                  <div className="aspect-[4/3] relative overflow-hidden"><Pill gradient={o.gradient} image={o.image} className="w-full h-full group-hover:scale-110 transition-transform duration-500"><Ico name="Camera" size={26} className="text-white/70" /></Pill></div>
                  <div className="p-2.5"><span className="font-medium text-gray-700 text-xs group-hover:text-green-700 transition-colors">{o.name}</span></div>
                </button>
              ))}
            </div>
            <div className="text-center mt-6">
              <button onClick={() => navigate("/attraction/photospot")} className="text-green-700 font-semibold text-sm inline-flex items-center gap-1 hover:gap-2 transition-all">Lihat Semua Spot Foto <Ico name="ArrowRight" size={14} /></button>
            </div>
          </div>
        </FadeIn>
        <FadeIn delay={200}><div className="text-center mt-10"><button onClick={() => openWA()} className="px-8 py-3.5 rounded-full font-semibold text-white shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all inline-flex items-center gap-2" style={{ background: "linear-gradient(135deg,#2E7D32,#388E3C)" }}><Ico name="Ticket" size={18} /> Beli Tiket Sekarang</button></div></FadeIn>
      </div>
    </div>
  );
}
