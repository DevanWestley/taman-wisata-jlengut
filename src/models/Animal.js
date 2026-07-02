import BaseModel from "./BaseModel";

/**
 * Animal
 * ---------------------------------------------------------------------------
 * Represents a single species housed in the Mini Zoo (e.g. Merak, Kelinci,
 * Buaya). Extends BaseModel to reuse id/name/image/gradient handling.
 */
export default class Animal extends BaseModel {
  /**
   * @param {Object} props
   * @param {string} props.id
   * @param {string} props.name
   * @param {string} props.desc - short teaser text
   * @param {string} props.longDesc - full description for detail page
   * @param {string} [props.icon] - emoji fallback icon
   * @param {string[]} [props.facts] - "fakta menarik" bullet list
   * @param {string} [props.gradient]
   * @param {string} [props.image]
   * @param {string} [props.attractionId] - parent attraction (defaults to minizoo)
   */
  constructor({
    id,
    name,
    desc,
    longDesc,
    icon = "🐾",
    facts = [],
    gradient,
    image,
    attractionId = "minizoo",
  }) {
    super({ id, name, image, gradient });
    this.desc = desc;
    this.longDesc = longDesc;
    this.icon = icon;
    this.facts = facts;
    this.attractionId = attractionId;
  }

  /** Route path for this animal's detail page. */
  get path() {
    return `/animal/${this.id}`;
  }

  /**
   * Given the full list of animals, return up to `limit` other animals
   * (used to populate the "Satwa Lainnya" related-content section).
   */
  static others(allAnimals, currentId, limit = 6) {
    return allAnimals.filter((a) => a.id !== currentId).slice(0, limit);
  }

  static fromList(list) {
    return list.map((item) => new Animal(item));
  }
}
