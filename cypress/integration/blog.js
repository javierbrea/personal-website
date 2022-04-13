import Blog from "../support/page-objects/pages/Blog";
import BlogPost from "../support/page-objects/pages/BlogPost";

describe("About", () => {
  let page, blogPost;

  function getPost(index = 1) {
    return page.posts.at(index);
  }

  before(() => {
    page = new Blog();
    blogPost = new BlogPost();
    page.visit();
    cy.resetScrollBehavior();
  });

  describe("Title", () => {
    it("should display title", () => {
      page.title.title.shouldHaveText("Latest blog posts");
    });
  });

  describe("Latest posts", () => {
    it("should display two posts", () => {
      page.posts.shouldHaveLength(2);
    });

    it("should display first pnpm post", () => {
      getPost(0).title.shouldHaveText("Pnpm and Nx monorepo. Part 1");
      getPost(0).date.shouldHaveText("April 13, 2022");
    });

    it("should display spell checking post", () => {
      getPost().container.shouldBeVisible();
      getPost().title.shouldHaveText("Spell checking Markdown documents using a Github action");
      getPost().date.shouldHaveText("April 11, 2022");
      getPost().subtitle.shouldContainText(
        "How to spell check your docs in a continuous integration pipeline"
      );
      getPost().excerpt.shouldContainText(
        "As software engineers, we write a lot of documentation"
      );
    });

    it("should navigate to post page when clicks on post", () => {
      getPost().container.click();
      blogPost.title.title.shouldHaveText(
        "Spell checking Markdown documents using a Github action"
      );
    });
  });

  describe("Blog post", () => {
    it("should display header", () => {
      blogPost.header.shouldBeVisible();
    });

    it("should display content", () => {
      blogPost.content.shouldBeVisible();
    });

    it("should display subtitle", () => {
      blogPost.subtitle.shouldHaveText(
        "How to spell check your docs in a continuous integration pipeline"
      );
    });

    it("should display footer", () => {
      blogPost.footer.shouldBeVisible();
    });
  });
});
