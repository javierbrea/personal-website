import Element from "../common/Element";

export default class BlogLatestPostsItem {
  constructor(index, parentTestId) {
    this._baseSelector = `[data-testid="${parentTestId}"] li:eq(${index})`;
    this.SELECTORS = {
      TITLE: "h2",
      DATE: "small",
      SUBTITLE: "p:first",
      EXCERPT: "p:last",
    };
  }

  get container() {
    return new Element(cy.get(this._baseSelector));
  }

  get title() {
    return new Element(cy.get(`${this._baseSelector} ${this.SELECTORS.TITLE}`));
  }

  get date() {
    return new Element(cy.get(`${this._baseSelector} ${this.SELECTORS.DATE}`));
  }

  get subtitle() {
    return new Element(cy.get(`${this._baseSelector} ${this.SELECTORS.SUBTITLE}`));
  }

  get excerpt() {
    return new Element(cy.get(`${this._baseSelector} ${this.SELECTORS.EXCERPT}`));
  }
}
