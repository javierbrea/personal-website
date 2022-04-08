import Home from "../support/page-objects/pages/Home";

describe("Layout", () => {
  let page;

  before(() => {
    page = new Home();
    page.visit();
    cy.resetScrollBehavior();
  });

  describe("When viewport is l", () => {
    beforeEach(() => {
      cy.setWindowWidth("l");
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

    it("should match snapshot", () => {
      cy.shouldMatchSnapshot("home-viewport-l");
    });
  });

  describe("When viewport is s", () => {
    beforeEach(() => {
      cy.setWindowWidth("s");
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

    it("should match snapshot", () => {
      cy.shouldMatchSnapshot("home-viewport-s");
    });

    it("should display navigation links when collapse button is clicked", () => {
      page.layout.navBar.collapseButton.click();
      page.layout.navBar.homeLink.shouldBeVisible();
      page.layout.navBar.aboutLink.shouldBeVisible();
    });
  });

  describe("When scrolling to bottom", () => {
    before(() => {
      cy.scrollTo("bottom", { easing: "linear" });
      cy.wait(2000);
    });

    it("should display footer", () => {
      page.layout.footer.container.shouldBeVisible();
    });

    it("should match snapshot", () => {
      page.layout.footer.container.shouldMatchSnapshot("home-footer");
    });

    it("should display social links", () => {
      page.layout.footer.linkedinLink.shouldBeVisible();
      page.layout.footer.twitterLink.shouldBeVisible();
      page.layout.footer.githubLink.shouldBeVisible();
    });
  });
});
