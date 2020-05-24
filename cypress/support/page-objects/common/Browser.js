export default class Browser {
  constructor() {
    this.VIEWPORTS = {
      xxs: [470, 700],
      xs: [570, 700],
      s: [760, 700],
      m: [980, 700],
      l: [1100, 700],
      xl: [1650, 700]
    };
  }

  setViewPort(size) {
    const [width, height] = this.VIEWPORTS[size];
    return cy.viewport(width, height);
  }

  reload() {
    cy.reload();
  }
}
