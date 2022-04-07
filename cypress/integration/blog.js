import Blog from "../support/page-objects/pages/Blog";

describe("About", () => {
  let page;

  before(() => {
    page = new Blog();
    page.visit();
    cy.resetScrollBehavior();
  });

  describe("Title", () => {
    it("should display title", () => {
      page.title.title.shouldHaveText("Latest blog posts");
    });
  });

  describe("Latest posts", () => {
    it("should display no posts message", () => {
      page.posts.emptyMessage.shouldBeVisible();
    });
  });
});
