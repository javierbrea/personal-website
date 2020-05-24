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
  });

  describe("Personal section", () => {
    it("should be visible", () => {
      about.aboutMe.personal.shouldBeVisible();
    });
  });

  describe("Personal section images gallery", () => {
    it("should display images gallery when clicks on image", () => {
      about.aboutMe.personalGallery.clickImage(0);
      about.aboutMe.personalGallery.dialog.shouldBeVisible();
    });

    it("should display 10 images", () => {
      about.aboutMe.personalGallery.shouldDisplayCount(1, 10);
    });

    it("should display second image when clicks on next button", () => {
      about.aboutMe.personalGallery.getPaginationButton(0).click();
      cy.wait(1000);
      about.aboutMe.personalGallery.shouldDisplayCount(2, 10);
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
