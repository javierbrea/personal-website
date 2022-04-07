import Layout from "../components/Layout";
import PageTitle from "../components/PageTitle";
import Element from "./Element";

export default class Page {
  constructor() {
    this._layout = new Layout();
    this._title = new PageTitle();
  }

  get layout() {
    return this._layout;
  }

  get container() {
    return new Element(cy.findByTestId(this.SELECTORS.CONTAINER));
  }

  get title() {
    return this._title;
  }

  visit() {
    cy.visit(this._url);
  }
}
