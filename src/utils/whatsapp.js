import { WA_NUMBER } from "../data/mockData";

/**
 * Opens WhatsApp with a pre-filled message.
 * Accepts either a plain package name string or a TicketPackage instance
 * (anything with a `.buildOrderMessage()` method).
 */
export function openWA(pkg = "") {
  let msg;
  if (pkg && typeof pkg === "object" && typeof pkg.buildOrderMessage === "function") {
    msg = pkg.buildOrderMessage();
  } else if (pkg) {
    msg = `Halo Taman Wisata Jlengut, saya ingin memesan tiket:\n\nPaket: ${pkg}\n\nMohon info lebih lanjut. Terima kasih!`;
  } else {
    msg = "Halo Taman Wisata Jlengut, saya ingin memesan tiket. Mohon info lebih lanjut. Terima kasih!";
  }
  window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`, "_blank");
}

export function waLink() {
  return `https://wa.me/${WA_NUMBER}`;
}
