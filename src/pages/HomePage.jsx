import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Ico from "../components/Icon";
import FadeIn from "../components/Common/FadeIn";
import Pill from "../components/Common/Pill";
import { attractions, heroSlides, galleryItems, testimonial, homeStats, miscImages } from "../data/mockData";
import { openWA } from "../utils/whatsapp";

export default function HomePage() {
  const navigate = useNavigate();
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setSlide((i) => (i + 1) % heroSlides.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <>
      {/* HERO */}
      <section className="relative h-screen min-h-[600px] overflow-hidden">
        {heroSlides.map((s, i) => (
          <div key={i} className={`absolute inset-0 transition-opacity duration-1000 ${i === slide ? "opacity-100" : "opacity-0"}`}>
            <Pill gradient="linear-gradient(135deg,rgba(46,125,50,0.7),rgba(79,195,247,0.6))" image={s.image} className="w-full h-full">
              <div className="absolute inset-0 bg-black/20" />
            </Pill>
          </div>
        ))}
        <div className="relative h-full flex flex-col items-center justify-center text-center px-4 z-10">
          <FadeIn><span className="inline-block px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium mb-5 border border-white/30">🌿 Wisata Edukasi & Keluarga di Klaten</span></FadeIn>
          <FadeIn delay={150}><h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white max-w-4xl leading-tight drop-shadow-lg mb-4">{heroSlides[slide].title}</h1></FadeIn>
          <FadeIn delay={300}><p className="text-white/90 text-base sm:text-lg lg:text-xl max-w-2xl mb-8 drop-shadow">{heroSlides[slide].subtitle}</p></FadeIn>
          <FadeIn delay={450}>
            <div className="flex flex-col sm:flex-row gap-4">
              <button onClick={() => navigate(attractions[0].path)} className="px-8 py-3.5 rounded-full font-semibold text-white shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all flex items-center justify-center gap-2" style={{ background: "linear-gradient(135deg,#2E7D32,#388E3C)" }}>
                Explore Sekarang <Ico name="ArrowRight" size={18} />
              </button>
              <button onClick={() => openWA()} className="px-8 py-3.5 rounded-full font-semibold text-green-800 bg-white shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all flex items-center justify-center gap-2">
                <Ico name="Ticket" size={18} /> Beli Tiket
              </button>
            </div>
          </FadeIn>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {heroSlides.map((_, i) => <button key={i} onClick={() => setSlide(i)} className={`h-2 rounded-full transition-all ${i === slide ? "w-8 bg-white" : "w-2 bg-white/50"}`} />)}
        </div>
        <button onClick={() => setSlide((slide - 1 + heroSlides.length) % heroSlides.length)} className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30"><Ico name="ChevronLeft" size={22} /></button>
        <button onClick={() => setSlide((slide + 1) % heroSlides.length)} className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30"><Ico name="ChevronRight" size={22} /></button>
      </section>

      {/* INTRO */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <FadeIn><div className="rounded-3xl overflow-hidden shadow-xl aspect-[4/3]"><Pill gradient="linear-gradient(135deg,#2E7D32,#4FC3F7)" image={miscImages.welcome} className="w-full h-full"><Ico name="TreePine" size={80} className="text-white/40" /></Pill></div></FadeIn>
            <FadeIn delay={150}>
              <span className="text-sky-400 font-semibold text-sm uppercase tracking-wide">Selamat Datang</span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-800 mt-2 mb-4">Taman Wisata <span className="text-green-700">Jlengut</span></h2>
              <p className="text-gray-600 leading-relaxed mb-4">Berlokasi di tengah kesejukan alam Klaten, Jawa Tengah, Taman Wisata Jlengut hadir sebagai destinasi rekreasi keluarga yang memadukan keindahan alam dengan nilai edukasi. Dirancang khusus agar anak-anak dan orang tua dapat belajar sambil bermain.</p>
              <p className="text-gray-600 leading-relaxed mb-6">Dari mengenal satwa di Mini Zoo, bermain di Playground, hingga belajar bercocok tanam di Taman Edukasi — setiap sudut Jlengut dirancang untuk menciptakan kenangan berharga bersama keluarga.</p>
              <div className="grid grid-cols-3 gap-4">
                {homeStats.map((s, i) => (
                  <div key={i} className="text-center p-3 rounded-2xl bg-green-50">
                    <div className="text-xl lg:text-2xl font-extrabold text-green-700">{s.value}</div>
                    <div className="text-xs text-gray-500 mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ATTRACTIONS */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8" style={{ background: "linear-gradient(180deg,#F1F8E9,#ffffff)" }}>
        <div className="max-w-7xl mx-auto">
          <FadeIn className="text-center mb-12">
            <span className="text-sky-400 font-semibold text-sm uppercase tracking-wide">Wahana Unggulan</span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-800 mt-2">Apa Saja yang Bisa Dijelajahi?</h2>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {attractions.map((a, i) => (
              <FadeIn key={a.id} delay={i * 100}>
                <button onClick={() => navigate(a.path)} className="group block w-full text-left bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all hover:-translate-y-2">
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <Pill gradient={a.gradient} image={a.image} className="w-full h-full group-hover:scale-110 transition-transform duration-500"><Ico name={a.iconName} size={48} className="text-white/50" /></Pill>
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-lg text-gray-800 group-hover:text-green-700 transition-colors">{a.name}</h3>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-2">{a.short}</p>
                    <span className="inline-flex items-center gap-1 text-green-700 text-sm font-semibold mt-3 group-hover:gap-2 transition-all">Lihat Detail <Ico name="ArrowRight" size={14} /></span>
                  </div>
                </button>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="text-center mb-12">
            <span className="text-sky-400 font-semibold text-sm uppercase tracking-wide">Galeri</span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-800 mt-2">Momen Seru di Jlengut</h2>
          </FadeIn>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {galleryItems.map((img, i) => (
              <FadeIn key={i} delay={i * 60}>
                <div className="group block w-full aspect-square rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all relative">
                  <Pill gradient={img.gradient} image={img.image} className="w-full h-full group-hover:scale-110 transition-transform duration-500"><Ico name="Camera" size={28} className="text-white/40" /></Pill>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-end p-3">
                    <span className="text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">{img.tag}</span>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8" style={{ background: "linear-gradient(135deg,#2E7D32,#1B5E20)" }}>
        <div className="max-w-5xl mx-auto text-center">
          <FadeIn>
            <Ico name="Quote" size={48} className="mx-auto text-white/30 mb-4" />
            <p className="text-white text-lg sm:text-xl lg:text-2xl font-medium leading-relaxed mb-6">"{testimonial.quote}"</p>
            <div className="flex items-center justify-center gap-1 mb-2">{[...Array(testimonial.rating)].map((_, i) => <Ico key={i} name="Star" size={18} className="text-yellow-400" fill="#FFC107" />)}</div>
            <p className="text-white/70 text-sm">{testimonial.author}</p>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <FadeIn className="max-w-4xl mx-auto rounded-3xl p-8 sm:p-12 text-center shadow-xl" style={{ background: "linear-gradient(135deg,#FFC107,#FFB300)" }}>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">Siap Berpetualang Bersama Keluarga?</h2>
          <p className="text-white/90 mb-6">Dapatkan tiket sekarang dan nikmati pengalaman seru di Taman Wisata Jlengut!</p>
          <button onClick={() => openWA()} className="px-8 py-3.5 rounded-full font-bold text-yellow-700 bg-white shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all inline-flex items-center gap-2">
            <Ico name="Ticket" size={18} /> Pesan Tiket Sekarang
          </button>
        </FadeIn>
      </section>
    </>
  );
}
