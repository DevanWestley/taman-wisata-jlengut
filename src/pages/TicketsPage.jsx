import Ico from "../components/Icon";
import FadeIn from "../components/Common/FadeIn";
import { ticketPrices } from "../data/mockData";
import { openWA } from "../utils/whatsapp";

export default function TicketsPage() {
  return (
    <div className="pt-16 lg:pt-20">
      <div className="py-12 px-4 sm:px-6 lg:px-8 text-center" style={{ background: "linear-gradient(135deg,#2E7D32,#4FC3F7)" }}>
        <FadeIn><Ico name="Ticket" size={40} className="text-white mx-auto mb-3" /><h1 className="text-3xl sm:text-4xl font-extrabold text-white">Tiket & Booking</h1><p className="text-white/90 mt-2">Pilih paket tiket yang sesuai untuk perjalanan seru bersama keluarga</p></FadeIn>
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 lg:py-16">
        <div className="grid sm:grid-cols-3 gap-6 mb-12">
          {ticketPrices.map((t, i) => (
            <FadeIn key={i} delay={i * 100}>
              <div className={`relative rounded-3xl p-6 h-full flex flex-col bg-white ${t.popular ? "shadow-2xl ring-2 ring-yellow-400 scale-105" : "shadow-md border border-gray-100"}`}>
                {t.popular && <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs font-bold text-white bg-yellow-400">PALING POPULER</span>}
                <h3 className="font-bold text-lg text-gray-800 mb-1">{t.name}</h3>
                <p className="text-3xl font-extrabold text-green-700 mb-2">{t.price}</p>
                <p className="text-sm text-gray-500 mb-6 flex-1">{t.desc}</p>
                <button onClick={() => openWA(t)} className={`w-full py-3 rounded-full font-semibold transition-all flex items-center justify-center gap-2 ${t.popular ? "text-white shadow-lg hover:shadow-xl" : "text-green-700 border-2 border-green-700 hover:bg-green-50"}`} style={t.popular ? { background: "linear-gradient(135deg,#FFC107,#FFB300)" } : {}}>
                  <Ico name="MessageCircle" size={16} /> Pesan via WhatsApp
                </button>
              </div>
            </FadeIn>
          ))}
        </div>
        <FadeIn>
          <div className="max-w-2xl mx-auto rounded-3xl p-8 text-center shadow-md" style={{ background: "linear-gradient(135deg,#25D366,#128C7E)" }}>
            <Ico name="MessageCircle" size={36} className="text-white mx-auto mb-3" fill="white" />
            <h2 className="text-xl font-bold text-white mb-2">Pemesanan Tiket via WhatsApp</h2>
            <p className="text-white/90 text-sm">Seluruh pemesanan dan reservasi tiket dilayani langsung melalui chat WhatsApp. Pilih paket di atas, sebutkan tanggal kunjungan & jumlah tiket, dan tim kami akan segera membalas.</p>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
