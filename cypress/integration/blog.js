import Blog from "../support/page-objects/pages/Blog";
import BlogPost from "../support/page-objects/pages/BlogPost";

describe("About", () => {
  let page, blogPost;

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
    it("should display one post", () => {
      page.posts.at(0).container.shouldBeVisible();
      page.posts
        .at(0)
        .title.shouldHaveText("Spell checking Markdown documents using a Github action");
      page.posts.at(0).date.shouldHaveText("April 11, 2022");
      page.posts
        .at(0)
        .subtitle.shouldContainText(
          "How to spell check your docs in a continuous integration pipeline"
        );
      page.posts
        .at(0)
        .excerpt.shouldContainText("As software engineers, we write a lot of documentation");
    });

    it("should navigate to post page when clicks on post", () => {
      page.posts.at(0).container.click();
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
