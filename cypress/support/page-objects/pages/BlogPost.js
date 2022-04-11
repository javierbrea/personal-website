import Element from "../common/Element";
import Page from "../common/Page";

export default class BlogPost extends Page {
  constructor(url) {
    super();
    this._url = url;
    this.SELECTORS = {
      CONTAINER: "blog-post-page",
      HEADER: "blog-post-header",
      CONTENT: "blog-post-content",
      FOOTER: "blog-post-footer",
    };
  }

  get header() {
    return new Element(cy.findByTestId(this.SELECTORS.HEADER));
  }

  get content() {
    return new Element(cy.findByTestId(this.SELECTORS.CONTENT));
  }

  get subtitle() {
    return new Element(cy.get(`[data-testid="${this.SELECTORS.CONTENT}"] h1:first`));
  }

  get footer() {
    return new Element(cy.findByTestId(this.SELECTORS.FOOTER));
  }
}
