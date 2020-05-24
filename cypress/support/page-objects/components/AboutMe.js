import Element from "../common/Element";

import ImagesGallery from "./ImagesGallery";

export default class AboutMe {
  constructor() {
    this.SELECTORS = {
      CONTAINER: "about-me",
      PROFESSIONAL: "as-a-professional",
      PERSONAL: "personal-life",
      PERSONAL_GALLERY: "personal-life-gallery"
    };

    this._personalGallery = new ImagesGallery(this.SELECTORS.PERSONAL_GALLERY);
  }

  get container() {
    return new Element(cy.findByTestId(this.SELECTORS.CONTAINER));
  }

  get professional() {
    return new Element(cy.findByTestId(this.SELECTORS.PROFESSIONAL));
  }

  get personal() {
    return new Element(cy.findByTestId(this.SELECTORS.PERSONAL));
  }

  get personalGallery() {
    return this._personalGallery;
  }
}
