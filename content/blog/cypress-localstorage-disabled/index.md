---
title: "Testing localStorage exceptions with Cypress"
date: "2022-08-31T12:00:00Z"
description: "How to use Cypress to test if your application is handling localStorage exceptions"
tags:
    - localStorage
    - disable
    - error handling
    - error
    - Cypress
    - testing
    - E2E
    - Command
    - test
    - automation
featured: {image: ./allow-for-error.jpg, thumbnail: ./allow-for-error_thumbnail.jpg }
---

![Allow for error](./allow-for-error.jpg)

<div class="photoAuthor">Photo by @brettjordan in Pexels</div>

## Web Storage error handling

When developing a web that implies using Web Storage, __possible exceptions should be handled__. From [MDN docs](https://developer.mozilla.org/en-US/docs/Web/API/Storage/setItem): 

> "Developers should make sure to always catch possible exceptions from `[localStorage.]setItem()`"

Some of the reasons that may produce localStorage exceptions are:

* The user may have their browser configured to deny permission to persist data for the specified origin.
* The storage is full.

So, the application should take this into account and it should handle these possible errors and act in consequence.

## Error handling should be tested

In this article, we are going to suppose that our web application handles the Web Storage exceptions properly, and it displays a notification when the localStorage is disabled or full. That's great, but, __as this could be considered as another feature of our application, we should also test it__, right?

No problem, in this post we are going to figure out __how to use the [cypress-localstorage-commands plugin](https://github.com/javierbrea/cypress-localstorage-commands#readme) to simulate that the localStorage is disabled__, and then write a test checking that our notification is displayed properly.

## The cypress-localstorage-commands plugin

The [cypress-localstorage-commands plugin](https://github.com/javierbrea/cypress-localstorage-commands#readme) extends [Cypress](https://www.cypress.io/)' `cy` commands with localStorage methods. It allows to:

* Preserve localStorage between tests and spec files
* __Disable localStorage to check error handling__ 👍
* Get, set and remove values from localStorage

## Installation

The plugin is distributed via NPM and should be installed as one of your project's devDependencies:

```shell
npm i --save-dev cypress-localstorage-commands
```

Then, import the plugin at the top of your Cypress' support file (usually cypress/support/e2e.js for e2e testing type):

```js
import "cypress-localstorage-commands";
```

This will extend Cypress' `cy` commands, adding the plugin's ones.

> _Note: For some features, the plugin also requires to install its Node.js events, but that is not needed for disabling localStorage, so, we are going to skip that step in this tutorial._

## Simulating disabled localStorage

Now that the plugin is installed, we have available all its commands in the Cypress `cy` object. Let's use the `disableLocalStorage` one for simulating that localStorage is disabled:

```js
describe("when localStorage is disabled", () => {
  beforeEach(() => {
    cy.disableLocalStorage();
    cy.visit("/");
  });
});
```

This would deactivate `localStorage` and visit the page.

## Testing the error handling

Now we only need to write some tests checking the expected behavior of the web when localStorage is disabled. For example:

```js
describe("when localStorage is disabled", () => {
  beforeEach(() => {
    cy.disableLocalStorage();
    cy.visit("/");
  });

  it("should display localStorage warning", () => {
    cy.get("#localstorage-warning").should("be.visible");
  });

  it("should display accept-cookies button disabled", () => {
    cy.get("#accept-cookies").should("be.disabled");
  });
});
```

## Testing different errors

If the application handles different localStorage exceptions, we can also use the `cy.disableLocalStorage` command to simulate all of them. It accepts passing a custom error as a parameter. So, we could simulate different errors and test the expected behavior for each case. For example:

```js
describe("when localStorage throws X error", () => {
  beforeEach(() => {
    cy.disableLocalStorage({
      withError: new Error("X"),
    });
    cy.visit("/");
  });

  it("should display X error message", () => {
    cy.get("#localstorage-error").should("have.text", "X");
  });
});
```

## Conclusion

* [Web Storage possible exceptions should be caught.](https://developer.mozilla.org/en-US/docs/Web/API/Storage/setItem)
* If our application handles localStorage exceptions, we should test it, as any other feature
* We can use the [cypress-localstorage-commands Cypress plugin](https://github.com/javierbrea/cypress-localstorage-commands#readme) to simulate localStorage exceptions, and write corresponding tests.
