export default class Element {
  constructor(element) {
    this._element = element;
  }

  shouldBeVisible() {
    this._element.should("be.visible");
  }

  shouldNotBeVisible() {
    this._element.should("not.be.visible");
  }

  click(options) {
    this._element.click(options);
  }

  shouldExist() {
    this._element.should("exist");
  }

  shouldNotExist() {
    this._element.should("not.exist");
  }

  shouldHaveText(text) {
    this._element.should("have.text", text);
  }

  shouldMatchSnapshot(snapshotName, options) {
    cy.shouldMatchSnapshot(snapshotName, { element: this._element, ...options });
  }

  scrollIntoView() {
    this._element.scrollIntoView();
  }
}
