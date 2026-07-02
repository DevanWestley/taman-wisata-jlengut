import BaseModel from "./BaseModel";

/**
 * PhotoSpot
 * ---------------------------------------------------------------------------
 * Represents one of the instagramable photo spots at Jlengut (e.g. Gapura
 * Ikonik, Jembatan Bambu, Spot Panorama).
 */
export default class PhotoSpot extends BaseModel {
  /**
   * @param {Object} props
   * @param {string} props.id
   * @param {string} props.name
   * @param {string} props.desc - short teaser text
   * @param {string} props.longDesc - full description for detail page
   * @param {string[]} [props.tips] - "tips foto" bullet list
   * @param {string} [props.gradient]
   * @param {string} [props.image]
   * @param {string} [props.heroImage]
   */
  constructor({ id, name, desc, longDesc, tips = [], gradient, image, heroImage }) {
    super({ id, name, image, gradient });
    this.desc = desc;
    this.longDesc = longDesc;
    this.tips = tips;
    this.heroImage = heroImage || image;
  }

  /** Route path for this photo spot's detail page. */
  get path() {
    return `/photospot/${this.id}`;
  }

  static others(allSpots, currentId) {
    return allSpots.filter((s) => s.id !== currentId);
  }

  static fromList(list) {
    return list.map((item) => new PhotoSpot(item));
  }
}
