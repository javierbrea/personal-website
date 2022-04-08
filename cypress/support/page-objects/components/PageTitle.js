import Element from "../common/Element";

export default class PageTitle {
  constructor() {
    this.SELECTORS = {
      TITLE: "page-title",
      SUBTITLE: "page-subtitle",
    };
  }

  get title() {
    return new Element(cy.findByTestId(this.SELECTORS.TITLE));
  }

  get subtitle() {
    return new Element(cy.findByTestId(this.SELECTORS.SUBTITLE));
  }
}
