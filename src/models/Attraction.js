import BaseModel from "./BaseModel";

/**
 * Attraction
 * ---------------------------------------------------------------------------
 * Represents one of the main "wahana" (attractions) at Taman Wisata Jlengut:
 * Mini Zoo, Playground, Taman Edukasi, Photo Spot.
 *
 * Wrapping this in a class (instead of a plain object) gives us:
 *  - Guaranteed shape via the constructor (fewer "undefined is not a
 *    function" bugs when a field is missing in the data file)
 *  - Query helpers (hasAnimals / hasPhotoSpots) instead of scattering
 *    `attraction.id === "minizoo"` string checks across every page
 *  - A single place to extend behaviour later (e.g. add a `bookingUrl`
 *    getter) without touching every component that renders an attraction
 */
export default class Attraction extends BaseModel {
  /**
   * @param {Object} props
   * @param {string} props.id
   * @param {string} props.name
   * @param {string} props.iconName - lucide/local icon key, see Icon.jsx
   * @param {string} props.short - short teaser text for cards
   * @param {string} props.desc - full description for the detail page
   * @param {string[]} props.facilities - list of facilities/activities
   * @param {string} props.color - primary brand color (hex)
   * @param {string} [props.gradient]
   * @param {string} [props.image]
   * @param {string} [props.heroImage]
   */
  constructor({
    id,
    name,
    iconName,
    short,
    desc,
    facilities = [],
    color = "#2E7D32",
    gradient,
    image,
    heroImage,
  }) {
    super({ id, name, image, gradient });
    this.iconName = iconName;
    this.short = short;
    this.desc = desc;
    this.facilities = facilities;
    this.color = color;
    this.heroImage = heroImage || image;
  }

  /** Mini Zoo is the only attraction that lists individual Animal cards. */
  hasAnimals() {
    return this.id === "minizoo";
  }

  /** Photo Spot is the only attraction that lists individual PhotoSpot cards. */
  hasPhotoSpots() {
    return this.id === "photospot";
  }

  /** Route path for this attraction's detail page. */
  get path() {
    return `/attraction/${this.id}`;
  }

  /**
   * Build an array of Attraction instances from plain data objects.
   * Keeps the "new Attraction(...)" boilerplate out of the data file.
   */
  static fromList(list) {
    return list.map((item) => new Attraction(item));
  }
}
