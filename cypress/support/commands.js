import "@testing-library/cypress/add-commands";

import Browser from "./page-objects/common/Browser";

const browser = new Browser();

Cypress.Commands.add("setWindowWidth", width => {
  browser.setViewPort(width);
});
