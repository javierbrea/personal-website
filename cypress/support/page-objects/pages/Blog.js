import Page from "../common/Page";
import BlogLatestPosts from "../components/BlogLatestPosts";

export default class Blog extends Page {
  constructor() {
    super();
    this._url = `/blog`;
    this.SELECTORS = {
      CONTAINER: "blog-page",
    };
  }

  get posts() {
    return new BlogLatestPosts();
  }
}
