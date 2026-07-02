import Ico from "../components/Icon";
import FadeIn from "../components/Common/FadeIn";
import Pill from "../components/Common/Pill";
import StaticMap from "../components/Common/StaticMap";
import { CONTACT, MAPS_URL, miscImages } from "../data/mockData";

export default function AboutPage() {
  return (
    <div className="pt-16 lg:pt-20">
      <div className="py-12 px-4 sm:px-6 lg:px-8 text-center" style={{ background: "linear-gradient(135deg,#2E7D32,#1B5E20)" }}>
        <FadeIn><Ico name="Heart" size={40} className="text-white mx-auto mb-3" /><h1 className="text-3xl sm:text-4xl font-extrabold text-white">Tentang Kami</h1><p className="text-white/90 mt-2">Mengenal lebih dekat Taman Wisata Jlengut</p></FadeIn>
      </div>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 lg:py-16 space-y-16">
        <FadeIn>
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="text-sky-400 font-semibold text-sm uppercase tracking-wide">Sejarah</span>
              <h2 className="text-2xl font-extrabold text-gray-800 mt-2 mb-4">Perjalanan Taman Wisata Jlengut</h2>
              <p className="text-gray-600 leading-relaxed mb-3">Taman Wisata Jlengut didirikan dengan visi menghadirkan ruang terbuka hijau yang dapat dinikmati keluarga sekaligus menjadi sarana edukasi tentang alam dan lingkungan bagi generasi muda di Klaten.</p>
              <p className="text-gray-600 leading-relaxed">Berawal dari lahan pertanian seluas 3 hektar, kini Jlengut telah berkembang menjadi destinasi wisata keluarga terpadu dengan berbagai wahana edukasi, rekreasi, dan konservasi.</p>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-xl aspect-[4/3]"><Pill gradient="linear-gradient(135deg,#2E7D32,#FFC107)" image={miscImages.aboutHistory} className="w-full h-full"><Ico name="Award" size={64} className="text-white/40" /></Pill></div>
          </div>
        </FadeIn>
        <FadeIn delay={100}>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="p-6 rounded-3xl bg-green-50">
              <Ico name="Sparkles" className="text-green-700 mb-3" size={28} /><h3 className="font-bold text-lg text-gray-800 mb-2">Visi</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Menjadi destinasi wisata keluarga dan edukasi alam terdepan di Jawa Tengah yang menginspirasi kecintaan terhadap lingkungan sejak usia dini.</p>
            </div>
            <div className="p-6 rounded-3xl bg-blue-50">
              <Ico name="Users" className="text-sky-400 mb-3" size={28} /><h3 className="font-bold text-lg text-gray-800 mb-2">Misi</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Menyediakan wahana rekreasi yang aman dan edukatif, melestarikan flora & fauna lokal, serta membangun pengalaman wisata yang berkesan bagi setiap keluarga.</p>
            </div>
          </div>
        </FadeIn>
        <FadeIn delay={200}>
          <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2"><Ico name="MapPin" className="text-green-700" /> Lokasi Kami</h2>
          <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="group block relative rounded-3xl overflow-hidden shadow-md aspect-video border border-gray-100">
            <StaticMap />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
            <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-2 rounded-full bg-white text-green-700 text-sm font-bold shadow-md">
              <Ico name="MapPin" size={14} /> Buka di Maps <Ico name="ArrowRight" size={12} />
            </span>
          </a>
          <p className="text-gray-600 text-sm mt-3 flex items-center gap-2"><Ico name="MapPin" size={16} className="text-green-700" /> {CONTACT.address}</p>
        </FadeIn>
        <FadeIn delay={300}>
          <h2 className="text-xl font-bold text-gray-800 mb-6">Hubungi Kami</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            <a href={`tel:${CONTACT.phoneHref}`} className="flex items-center gap-3 p-4 rounded-2xl border border-gray-100 hover:border-green-600 hover:bg-green-50 transition-colors"><Ico name="Phone" size={20} className="text-green-700" /><div><div className="text-xs text-gray-400">Telepon</div><div className="font-medium text-gray-700 text-sm">{CONTACT.phone}</div></div></a>
            <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-3 p-4 rounded-2xl border border-gray-100 hover:border-green-600 hover:bg-green-50 transition-colors"><Ico name="Mail" size={20} className="text-sky-400" /><div><div className="text-xs text-gray-400">Email</div><div className="font-medium text-gray-700 text-sm">{CONTACT.email}</div></div></a>
            <a href={CONTACT.instagramUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 rounded-2xl border border-gray-100 hover:border-green-600 hover:bg-green-50 transition-colors"><Ico name="Instagram" size={20} className="text-yellow-500" /><div><div className="text-xs text-gray-400">Instagram</div><div className="font-medium text-gray-700 text-sm">{CONTACT.instagram}</div></div></a>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
