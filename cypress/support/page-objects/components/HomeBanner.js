import Element from "../common/Element";

export default class HomeBanner {
  constructor() {
    this.SELECTORS = {
      CONTAINER: "home-banner",
      ABOUT_BUTTON: "about-me-button"
    };
  }

  get container() {
    return new Element(cy.findByTestId(this.SELECTORS.CONTAINER));
  }

  get aboutMeButton() {
    return new Element(cy.findByTestId(this.SELECTORS.ABOUT_BUTTON));
  }
}
