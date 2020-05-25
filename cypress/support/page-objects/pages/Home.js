import Page from "../common/Page";

import HomeBanner from "../components/HomeBanner";

export default class Home extends Page {
  constructor() {
    super();
    this._url = `/`;
    this.SELECTORS = {
      CONTAINER: "home-page",
    };
    this._banner = new HomeBanner();
  }

  get banner() {
    return this._banner;
  }
}
