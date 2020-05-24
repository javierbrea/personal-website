import Browser from "../support/page-objects/common/Browser";
import Home from "../support/page-objects/pages/Home";
import About from "../support/page-objects/pages/About";

describe("Navigation", () => {
  let home;
  let browser;
  let about;

  before(() => {
    home = new Home();
    about = new About();
    browser = new Browser();
    home.visit();
  });

  describe("When viewport is l", () => {
    it("should navigate to about when about link is clicked", () => {
      home.layout.navBar.aboutLink.click();
      about.container.shouldBeVisible();
    });

    it("should navigate to home when home link is clicked", () => {
      home.layout.navBar.homeLink.click();
      home.container.shouldBeVisible();
    });
  });

  describe("When viewport is s", () => {
    before(() => {
      home.visit();
    });

    beforeEach(() => {
      browser.setViewPort("s");
    });

    it("should navigate to about when about link is clicked", () => {
      home.layout.navBar.collapseButton.click();
      home.layout.navBar.aboutLink.click();
      about.container.shouldBeVisible();
    });

    it("should hide navigation menu", () => {
      about.layout.navBar.homeLink.shouldNotBeVisible();
    });

    it("should navigate to home when home link is clicked", () => {
      about.layout.navBar.collapseButton.click();
      about.layout.navBar.homeLink.click();
      home.container.shouldBeVisible();
    });
  });
});
