import "@testing-library/cypress/add-commands";
import { addMatchImageSnapshotCommand } from "cypress-image-snapshot/command";

import Browser from "./page-objects/common/Browser";

const browser = new Browser();

addMatchImageSnapshotCommand({
  failureThreshold: 0.03, // threshold for entire image
  failureThresholdType: "percent", // percent of image or number of pixels
  customDiffConfig: { threshold: 0.1 }, // threshold for each pixel,
  customDiffDir: "cypress/screenshots",
  capture: "viewport", // capture viewport in screenshot
});

Cypress.Commands.add("setWindowWidth", (width) => {
  browser.setViewPort(width);
});

Cypress.Commands.add("shouldMatchSnapshot", () => {
  if (Cypress.env("VISUAL_TESTS")) {
    cy.matchImageSnapshot();
  }
});
