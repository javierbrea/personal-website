import Element from "../common/Element";

export default class NavBar extends Element {
  constructor() {
    super();
    this.SELECTORS = {
      CONTAINER: "navbar",
      COLLAPSE: "navbar-collapse-button",
      HOME_LINK: "navigate-to-home",
      ABOUT_LINK: "navigate-to-about"
    };
  }

  get container() {
    return new Element(cy.findByTestId(this.SELECTORS.CONTAINER));
  }

  get collapseButton() {
    return new Element(cy.findByTestId(this.SELECTORS.COLLAPSE));
  }

  get homeLink() {
    return new Element(cy.findByTestId(this.SELECTORS.HOME_LINK));
  }

  get aboutLink() {
    return new Element(cy.findByTestId(this.SELECTORS.ABOUT_LINK));
  }

  clickHomeLink() {
    return cy.findByTestId(this.SELECTORS.HOME_LINK).click();
  }
}
