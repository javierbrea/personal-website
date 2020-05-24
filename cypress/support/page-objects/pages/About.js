import Page from "../common/Page";

export default class About extends Page {
  constructor() {
    super();
    this._url = `/about`;
    this.SELECTORS = {
      CONTAINER: "about-page"
    };
  }
}
