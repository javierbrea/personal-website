import "@testing-library/cypress/add-commands";
const compareSnapshotCommand = require("cypress-visual-regression/dist/command");

import Browser from "./page-objects/common/Browser";

const browser = new Browser();

compareSnapshotCommand();

Cypress.Commands.add("setWindowWidth", (width) => {
  browser.setViewPort(width);
});

Cypress.Commands.add(
  "shouldMatchSnapshot",
  (snapshotName, { element, errorThreshold = 0.1, capture = "fullPage", ...rest } = {}) => {
    if (Cypress.env("VISUAL_TESTS")) {
      const elementToCheck = element || cy;
      elementToCheck.compareSnapshot(snapshotName, {
        errorThreshold,
        capture: !!element ? "viewport" : capture,
        blackout: ['[data-testid="github-stats"]', '[data-testid="opensource-project-links"]'],
        ...rest,
      });
    }
  }
);

Cypress.Commands.add("resetScrollBehavior", () => {
  cy.root().then(($el) => {
    $el.css("scroll-behavior", "auto");
  });
});
