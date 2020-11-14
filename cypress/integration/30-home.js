import Home from "../support/page-objects/pages/Home";
import About from "../support/page-objects/pages/About";

describe("Home", () => {
  let home;
  let about;

  before(() => {
    home = new Home();
    about = new About();
    home.visit();
  });

  describe("Banner section", () => {
    it("should be visible", () => {
      home.banner.container.shouldBeVisible();
    });

    it("should display about me button", () => {
      home.banner.aboutMeButton.shouldBeVisible();
    });

    it("should match snapshot", () => {
      cy.shouldMatchSnapshot();
    });

    it("should navigate to about when about me button is clicked", () => {
      home.banner.aboutMeButton.click();
      about.container.shouldBeVisible();
    });
  });
});
