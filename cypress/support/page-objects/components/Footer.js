import Element from "../common/Element";

export default class Footer {
  constructor() {
    this.SELECTORS = {
      CONTAINER: "footer",
      LINKEDIN_LINK: "social-link-linkedin",
      TWITTER_LINK: "social-link-twitter",
      GITHUB_LINK: "social-link-github",
    };
  }

  get container() {
    return new Element(cy.findByTestId(this.SELECTORS.CONTAINER));
  }

  get linkedinLink() {
    return new Element(cy.findByTestId(this.SELECTORS.LINKEDIN_LINK));
  }

  get twitterLink() {
    return new Element(cy.findByTestId(this.SELECTORS.TWITTER_LINK));
  }

  get githubLink() {
    return new Element(cy.findByTestId(this.SELECTORS.GITHUB_LINK));
  }
}
