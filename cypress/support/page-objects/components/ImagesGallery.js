import Element from "../common/Element";

export default class ImagesGallery {
  constructor(dataTestid) {
    this.SELECTORS = {
      CONTAINER: dataTestid,
      DIALOG_CONTAINER: ".react-images__container",
      IMAGES_COUNT: ".react-images__footer__count",
      NAVIGATION: ".react-images__navigation",
      HEADER: ".react-images__header",
    };
    this._dataTestid = dataTestid;
  }

  get container() {
    return new Element(cy.findByTestId(this.SELECTORS.CONTAINER));
  }

  get dialog() {
    return new Element(cy.get(this.SELECTORS.DIALOG_CONTAINER));
  }

  get imagesCount() {
    return new Element(cy.get(this.SELECTORS.IMAGES_COUNT));
  }

  get closeButton() {
    return new Element(cy.get(this.SELECTORS.HEADER).find("button").eq(1));
  }

  getPaginationButton(index) {
    return new Element(cy.get(this.SELECTORS.NAVIGATION).find("button").eq(index));
  }

  clickPaginationButton(index) {
    this.getPaginationButton(index).click();
  }

  image(index) {
    return new Element(cy.findByTestId(`${this._dataTestid}-${index}`));
  }

  clickImage(index) {
    this.image(index).scrollIntoView();
    this.image(index).click({ force: true });
  }

  shouldDisplayCount(current, total) {
    this.imagesCount.shouldHaveText(`${current} of ${total}`);
  }
}
