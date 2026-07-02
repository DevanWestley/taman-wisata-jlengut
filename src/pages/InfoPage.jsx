import { useState } from "react";
import Ico from "../components/Icon";
import FadeIn from "../components/Common/FadeIn";
import { faqs, operatingHours, guidelines } from "../data/mockData";

export default function InfoPage() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="pt-16 lg:pt-20">
      <div className="py-12 px-4 sm:px-6 lg:px-8 text-center" style={{ background: "linear-gradient(135deg,#4FC3F7,#2E7D32)" }}>
        <FadeIn><Ico name="HelpCircle" size={40} className="text-white mx-auto mb-3" /><h1 className="text-3xl sm:text-4xl font-extrabold text-white">Information Center</h1><p className="text-white/90 mt-2">Semua yang perlu kamu tahu sebelum berkunjung</p></FadeIn>
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 lg:py-16 space-y-16">
        <FadeIn>
          <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2"><Ico name="Clock" className="text-green-700" /> Jam Operasional</h2>
          <div className="rounded-2xl border border-gray-100 overflow-hidden divide-y divide-gray-100">
            {operatingHours.map((h, i) => (
              <div key={i} className="flex items-center justify-between px-5 py-4 bg-white">
                <span className="font-medium text-gray-700">{h.day}</span>
                <span className="text-green-700 font-semibold text-sm">{h.hours}</span>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={100}>
          <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2"><Ico name="CheckCircle" className="text-sky-400" /> Panduan Pengunjung</h2>
          <div className="space-y-3">
            {guidelines.map((g, i) => (
              <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-green-50">
                <Ico name="CheckCircle" size={18} className="text-green-700 shrink-0 mt-0.5" />
                <span className="text-gray-700 text-sm">{g}</span>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={200}>
          <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2"><Ico name="HelpCircle" className="text-yellow-400" /> FAQ</h2>
          <div className="space-y-3">
            {faqs.map((f, i) => (
              <div key={i} className="border border-gray-100 rounded-2xl overflow-hidden">
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex justify-between items-center px-5 py-4 text-left hover:bg-gray-50 transition-colors">
                  <span className="font-medium text-gray-800 pr-4">{f.q}</span>
                  <Ico name="ChevronDown" size={18} className={`text-gray-400 shrink-0 transition-transform ${openFaq === i ? "rotate-180" : ""}`} />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openFaq === i ? "max-h-40" : "max-h-0"}`}>
                  <p className="px-5 pb-4 text-gray-600 text-sm leading-relaxed">{f.a}</p>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
