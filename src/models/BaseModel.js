/**
 * BaseModel
 * ---------------------------------------------------------------------------
 * Parent class for every content entity in the app (Attraction, Animal,
 * PhotoSpot, TicketPackage, FAQItem, etc).
 *
 * Centralizing shared fields (id, name, image, gradient) and shared
 * behaviour (image fallback, gradient CSS, slug helpers) here means any
 * future entity type gets these features for free just by extending this
 * class — that's the core maintainability win of the OOP approach:
 * change the behaviour once, every model benefits.
 */
export default class BaseModel {
  /**
   * @param {Object} props
   * @param {string} props.id - unique slug identifier, used for routing
   * @param {string} props.name - display name
   * @param {string} [props.image] - path to the image (relative to /public)
   * @param {string} [props.gradient] - CSS gradient fallback (used while
   *   the image loads, or as a decorative overlay tint)
   */
  constructor({ id, name, image = "", gradient = "linear-gradient(135deg,#2E7D32,#4FC3F7)" }) {
    if (!id) throw new Error("BaseModel: 'id' is required");
    if (!name) throw new Error("BaseModel: 'name' is required");
    this.id = id;
    this.name = name;
    this.image = image;
    this.gradient = gradient;
  }

  /** Returns the CSS gradient string, usable directly in a style prop. */
  getGradientStyle() {
    return { background: this.gradient };
  }

  /** Returns the public image path, or null if none was set. */
  getImage() {
    return this.image || null;
  }

  /** Slug used to build route paths, e.g. /attraction/minizoo */
  get slug() {
    return this.id;
  }
}
