/**
 * TicketPackage
 * ---------------------------------------------------------------------------
 * Represents a single ticket/pricing option shown on the Tickets page.
 * Kept lightweight (doesn't extend BaseModel) since it has no id/image —
 * it's a pure value object, but still benefits from having its WhatsApp
 * message-building logic centralized here instead of duplicated in JSX.
 */
export default class TicketPackage {
  /**
   * @param {Object} props
   * @param {string} props.name
   * @param {string} props.price - formatted price string, e.g. "Rp 35.000"
   * @param {string} props.desc
   * @param {boolean} [props.popular]
   */
  constructor({ name, price, desc, popular = false }) {
    this.name = name;
    this.price = price;
    this.desc = desc;
    this.popular = popular;
  }

  /** Pre-filled WhatsApp order message for this package. */
  buildOrderMessage() {
    return `Halo Taman Wisata Jlengut, saya ingin memesan tiket:\n\nPaket: ${this.name}\n\nMohon info lebih lanjut. Terima kasih!`;
  }

  static fromList(list) {
    return list.map((item) => new TicketPackage(item));
  }
}
