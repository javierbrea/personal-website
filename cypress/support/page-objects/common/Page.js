import Layout from "../components/Layout";

export default class Page {
  constructor() {
    this._layout = new Layout();
  }

  get layout() {
    return this._layout;
  }

  visit() {
    cy.visit(this._url);
  }
}
