import About from "../support/page-objects/pages/About";

describe("About", () => {
  let about;

  before(() => {
    about = new About();
    about.visit();
  });

  describe("Professional section", () => {
    it("should be visible", () => {
      about.aboutMe.professional.shouldBeVisible();
    });

    it("should match snapshot", () => {
      cy.shouldMatchSnapshot();
    });
  });

  describe("Personal section", () => {
    it("should be visible", () => {
      about.aboutMe.personal.shouldBeVisible();
    });
  });

  describe("Personal section images gallery", () => {
    it("should match snapshot", () => {
      about.aboutMe.personalGallery.image(0).scrollIntoView();
      cy.wait(1000);
      cy.shouldMatchSnapshot();
    });

    it("should display images gallery when clicks on image", () => {
      cy.wait(500);
      about.aboutMe.personalGallery.clickImage(0);
      about.aboutMe.personalGallery.dialog.shouldBeVisible();
    });

    it("should display 10 images", () => {
      about.aboutMe.personalGallery.shouldDisplayCount(1, 10);
    });

    it("should match snapshot of first gallery image", () => {
      cy.shouldMatchSnapshot();
    });

    it("should display second image when clicks on next button", () => {
      about.aboutMe.personalGallery.getPaginationButton(0).click();
      cy.wait(1000);
      about.aboutMe.personalGallery.shouldDisplayCount(2, 10);
    });

    it("should match snapshot of second gallery image", () => {
      cy.shouldMatchSnapshot();
    });

    it("should display first image again when clicks on prev button", () => {
      about.aboutMe.personalGallery.getPaginationButton(0).click();
      cy.wait(1000);
      about.aboutMe.personalGallery.shouldDisplayCount(1, 10);
    });

    it("should close gallery when clicks on close button", () => {
      about.aboutMe.personalGallery.closeButton.click();
      cy.wait(1000);
      about.aboutMe.personalGallery.dialog.shouldNotExist();
    });
  });
});
