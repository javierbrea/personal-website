import Page from "../common/Page";

import AboutMe from "../components/AboutMe";

export default class About extends Page {
  constructor() {
    super();
    this._url = `/about`;
    this.SELECTORS = {
      CONTAINER: "about-page"
    };
    this._aboutMe = new AboutMe();
  }

  get aboutMe() {
    return this._aboutMe;
  }
}
