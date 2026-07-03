/**
 * StaticMap — Peta interaktif asli dari Google Maps
 * yang otomatis menyesuaikan ukuran kotak di Footer & About page.
 */
export default function StaticMap() {
  return (
    <iframe
      // URL Google Maps asli milik Anda
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31631.91847106889!2d110.50874948501588!3d-7.684241150984501!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a4300433c01a7%3A0xf836f1b9a4dce8b5!2sTaman%20Wisata%20Jlengut!5e0!3m2!1sen!2sid!4v1783055846769!5m2!1sen!2sid" 
      
      // Menggunakan Tailwind agar peta otomatis memenuhi kotak pembungkus secara rapi
      className="w-full h-full border-0"
      
      // Penulisan atribut wajib menggunakan camelCase agar tidak error di React/HTML terpadu
      allowFullScreen="" 
      loading="lazy" 
      referrerPolicy="strict-origin-when-cross-origin"
    ></iframe>
  );
}