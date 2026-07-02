import { useNavigate, useParams } from "react-router-dom";
import Ico from "../components/Icon";
import FadeIn from "../components/Common/FadeIn";
import Pill from "../components/Common/Pill";
import { attractions, zooAnimals, photoSpots } from "../data/mockData";
import { openWA } from "../utils/whatsapp";

export default function AttractionPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const a = attractions.find((x) => x.id === id) || attractions[0];

  return (
    <div className="pt-16 lg:pt-20">
      <div className="relative h-[50vh] min-h-[350px] overflow-hidden">
        <Pill gradient={a.gradient} image={a.heroImage} className="w-full h-full"><div className="absolute inset-0 bg-black/30" /></Pill>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <Ico name={a.iconName} size={48} className="text-white mb-3 drop-shadow-lg" />
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white drop-shadow-lg">{a.name}</h1>
        </div>
      </div>
      <div className="max-w-5xl mx-auto px-4 py-3 flex flex-wrap gap-2 items-center text-sm text-gray-500">
        <button onClick={() => navigate("/")} className="hover:text-green-700">Home</button><span>/</span>
        <span>Explore</span><span>/</span>
        <span className="text-green-700 font-medium">{a.name}</span>
      </div>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 lg:py-12">
        <FadeIn>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Tentang {a.name}</h2>
          <p className="text-gray-600 leading-relaxed mb-8">{a.desc}</p>
        </FadeIn>
        <FadeIn delay={100}>
          <h3 className="text-xl font-bold text-gray-800 mb-4">Fasilitas & Aktivitas</h3>
          <div className="grid sm:grid-cols-2 gap-3 mb-10">
            {a.facilities.map((f, i) => (
              <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-green-50">
                <Ico name="CheckCircle" size={18} className="text-green-700 shrink-0" /><span className="text-gray-700 text-sm">{f}</span>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Animal cards */}
        {a.hasAnimals() && (
          <FadeIn delay={200}>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Koleksi Satwa</h3>
            <p className="text-gray-600 text-sm mb-5">Kenali satwa-satwa yang tinggal di Mini Zoo Taman Wisata Jlengut</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-10">
              {zooAnimals.map((an) => (
                <button key={an.id} onClick={() => navigate(an.path)} className="group block text-left bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 hover:border-transparent transition-all hover:-translate-y-1">
                  <div className="aspect-square relative overflow-hidden">
                    <Pill gradient={an.gradient} image={an.image} className="w-full h-full group-hover:scale-110 transition-transform duration-500"><span className="text-5xl drop-shadow-lg">{an.icon}</span></Pill>
                  </div>
                  <div className="p-3">
                    <h4 className="font-bold text-gray-800 text-sm group-hover:text-green-700 transition-colors">{an.name}</h4>
                    <p className="text-gray-500 text-xs mt-0.5 line-clamp-2">{an.desc}</p>
                  </div>
                </button>
              ))}
            </div>
          </FadeIn>
        )}

        {/* Photo Spot cards */}
        {a.hasPhotoSpots() && (
          <FadeIn delay={200}>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Titik Foto Favorit</h3>
            <p className="text-gray-600 text-sm mb-5">Berikut spot foto paling diminati pengunjung di Taman Wisata Jlengut</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-10">
              {photoSpots.map((sp) => (
                <button key={sp.id} onClick={() => navigate(sp.path)} className="group block text-left bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 hover:border-transparent transition-all hover:-translate-y-1">
                  <div className="aspect-square relative overflow-hidden">
                    <Pill gradient={sp.gradient} image={sp.image} className="w-full h-full group-hover:scale-110 transition-transform duration-500"><Ico name="Camera" size={36} className="text-white/70 drop-shadow-lg" /></Pill>
                  </div>
                  <div className="p-3">
                    <h4 className="font-bold text-gray-800 text-sm group-hover:text-green-700 transition-colors">{sp.name}</h4>
                    <p className="text-gray-500 text-xs mt-0.5 line-clamp-2">{sp.desc}</p>
                  </div>
                </button>
              ))}
            </div>
          </FadeIn>
        )}

        <FadeIn delay={300}>
          <div className="border-t border-gray-100 pt-8">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Wahana Lainnya</h3>
            <div className="grid sm:grid-cols-3 gap-4">
              {attractions.filter((x) => x.id !== a.id).map((x) => (
                <button key={x.id} onClick={() => navigate(x.path)} className="flex items-center gap-3 p-3 rounded-xl border border-gray-100 hover:border-green-600 hover:bg-green-50 transition-colors text-left">
                  <Ico name={x.iconName} size={20} className="text-green-700" /><span className="font-medium text-gray-700 text-sm">{x.name}</span>
                </button>
              ))}
            </div>
          </div>
        </FadeIn>
        <FadeIn delay={350}>
          <div className="text-center mt-10">
            <button onClick={() => openWA()} className="px-8 py-3.5 rounded-full font-semibold text-white shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all inline-flex items-center gap-2" style={{ background: "linear-gradient(135deg,#2E7D32,#388E3C)" }}>
              <Ico name="Ticket" size={18} /> Beli Tiket Sekarang
            </button>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
