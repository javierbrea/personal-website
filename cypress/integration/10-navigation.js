import Home from "../support/page-objects/pages/Home";
import Browser from "../support/page-objects/common/Browser";

describe("Layout", () => {
  let page;
  let browser;

  before(() => {
    page = new Home();
    browser = new Browser();
    page.visit();
  });

  describe("When viewport is l", () => {
    beforeEach(() => {
      page.visit();
    });

    it("should display navigation bar", () => {
      page.layout.navBar.container.shouldBeVisible();
    });

    it("should display navigation links", () => {
      page.layout.navBar.homeLink.shouldBeVisible();
      page.layout.navBar.aboutLink.shouldBeVisible();
    });

    it("should not display collapse button", () => {
      page.layout.navBar.collapseButton.shouldNotBeVisible();
    });
  });

  describe("When viewport is s", () => {
    beforeEach(() => {
      browser.setViewPort("s");
    });

    it("should display navigation bar", () => {
      page.layout.navBar.container.shouldBeVisible();
    });

    it("should not display navigation links", () => {
      page.layout.navBar.homeLink.shouldNotBeVisible();
      page.layout.navBar.aboutLink.shouldNotBeVisible();
    });

    it("should display collapse button", () => {
      page.layout.navBar.collapseButton.shouldBeVisible();
    });

    it("should display navigation links when collapse button is clicked", () => {
      page.layout.navBar.collapseButton.click();
      page.layout.navBar.homeLink.shouldBeVisible();
      page.layout.navBar.aboutLink.shouldBeVisible();
    });
  });
});
