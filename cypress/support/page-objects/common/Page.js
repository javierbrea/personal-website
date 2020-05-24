import Layout from "../components/Layout";
import Element from "./Element";

export default class Page {
  constructor() {
    this._layout = new Layout();
  }

  get layout() {
    return this._layout;
  }

  get container() {
    return new Element(cy.findByTestId(this.SELECTORS.CONTAINER));
  }

  visit() {
    cy.visit(this._url);
  }
}
