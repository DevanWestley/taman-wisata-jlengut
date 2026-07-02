/**
 * FaqItem
 * ---------------------------------------------------------------------------
 * Represents a single question/answer pair on the Information page.
 */
export default class FaqItem {
  /**
   * @param {Object} props
   * @param {string} props.q - question
   * @param {string} props.a - answer
   */
  constructor({ q, a }) {
    this.q = q;
    this.a = a;
  }

  static fromList(list) {
    return list.map((item) => new FaqItem(item));
  }
}
