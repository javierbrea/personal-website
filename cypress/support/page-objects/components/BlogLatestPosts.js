import Element from "../common/Element";

import BlogLatestPostsItem from "./BlogLatestPostsItem";

export default class BlogLatestPosts {
  constructor() {
    this.SELECTORS = {
      CONTAINER: "blog-latest-posts",
      EMPTY_MESSAGE: "no-posts",
    };
  }

  get container() {
    return new Element(cy.findByTestId(this.SELECTORS.CONTAINER));
  }

  get emptyMessage() {
    return new Element(cy.findByTestId(this.SELECTORS.EMPTY_MESSAGE));
  }

  at(index) {
    return new BlogLatestPostsItem(index, this.SELECTORS.CONTAINER);
  }
}
