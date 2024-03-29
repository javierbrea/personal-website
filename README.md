[![Netlify Status](https://api.netlify.com/api/v1/badges/3f165d03-3a16-448c-b4f4-cdb01950c72c/deploy-status)](https://app.netlify.com/sites/javierbrea/deploys)

# personal-website

Personal website built with Gatsby

## Development

### NPM commands reference

* `start` - Starts application in development mode, listening at port 3000.
* `build-and-serve` - Builds application as in production environment and serve it at port 3000.
* `lint` - Run JavaScript `linter`.
* `stylelint` - Run Sass `linter`.
* `test:e2e` - Serve built application and run Cypress e2e tests (read E2E tests for further info).
* `test:e2e:ci` - Build application, serve it and run Cypress e2e tests (read E2E tests for further info).

### Running development commands using docker

A docker-compose file is provided in order to allow running NPM commands without worrying about your current OS. Run any NPM command using `docker-compose run command npm run [command]`. The port 3000 is automatically binded to the host.

Example:

``` bash
docker-compose build
docker-compose run command npm i
# Run "test-ci" npm command inside docker:
docker-compose run command npm run test:e2e
```

> Changes in `src`, `cypress` or `static` folders do not require to rebuild the Docker image, but any other change in any file in the root folder do.

### E2E tests

Using the `npm run test:e2e:ci` command the application is built, served and Cypress tests are ran.

> Caveat: `test:e2e:ci` command should be executed only on same Linux OS than used in the pipeline, as it compares image snapshots that could defer depending of the OS in which they were generated. Use a docker command as described in previous chapter for running e2e tests or disable visual tests.

#### Visual regression tests

The `npm run test:e2e` command should be executed only on same Linux OS than used in the pipeline, as it compares image snapshots that could defer depending of the OS in which they were generated. Use the `docker-compose run npm-command npm run test:e2e` command in order to avoid possible conflicts with the CI/CD tool, or disable visual regression tests locally setting the environment variable `CYPRESS_VISUAL_TESTS` to `false`.

> NOTE: Change the `type` env var to `base` in the `cypress.json` file to generate base snapshots. Restore it to `actual` again after generating base snapshots in order to run comparison in tests.

```bash
npm run build
docker-compose run command npm install
docker-compose run command npm run test:e2e
# Then add to git new snapshots in the cypress/snapshots folder
```

```bash
CYPRESS_VISUAL_TESTS=false npm run test:e2e
# Visual regression tests are not executed
```
