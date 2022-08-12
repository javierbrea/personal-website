import Blog from "../support/page-objects/pages/Blog";
import BlogPost from "../support/page-objects/pages/BlogPost";

const TOTAL_POSTS = 6;
const SPELL_CHECK_POST_INDEX = TOTAL_POSTS - 1;
const FIRST_MONOREPO_POST_INDEX = TOTAL_POSTS - 2;

describe("About", () => {
  let page, blogPost;

  function getPost(index = 0) {
    return page.posts.at(index);
  }

  function getSpellCheckPost() {
    return getPost(SPELL_CHECK_POST_INDEX);
  }

  function getFirstMonorepoPost() {
    return getPost(FIRST_MONOREPO_POST_INDEX);
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
    it(`should display ${TOTAL_POSTS} posts`, () => {
      page.posts.shouldHaveLength(TOTAL_POSTS);
    });

    it("should display first pnpm post", () => {
      getFirstMonorepoPost().title.shouldHaveText("Pnpm and Nx monorepo. Part 1");
      getFirstMonorepoPost().date.shouldHaveText("April 13, 2022");
    });

    it("should display spell checking post", () => {
      getSpellCheckPost().container.shouldBeVisible();
      getSpellCheckPost().title.shouldHaveText(
        "Spell checking Markdown documents using a Github action"
      );
      getSpellCheckPost().date.shouldHaveText("April 11, 2022");
      getSpellCheckPost().subtitle.shouldContainText(
        "How to spell check your docs in a continuous integration pipeline"
      );
      getSpellCheckPost().excerpt.shouldContainText(
        "As software engineers, we write a lot of documentation"
      );
    });

    it("should navigate to post page when clicks on post", () => {
      getSpellCheckPost().container.click();
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
