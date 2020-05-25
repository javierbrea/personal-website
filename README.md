[![Netlify Status](https://api.netlify.com/api/v1/badges/3f165d03-3a16-448c-b4f4-cdb01950c72c/deploy-status)](https://app.netlify.com/sites/javierbrea/deploys)

# personal-website

Personal website built with Gatsby

## Development

### NPM commands reference

* `start` - Starts application in development mode, listening at port 3000.
* `build-and-serve` - Builds application as in production environment and serve it at port 3000.
* `lint` - Run javascript linter.
* `stylelint` - Run Sass linter.
* `test:ci` - Build application, serve it and run Cypress tests.

> Caveat: `test:ci` command should be executed only on same Linux OS than used in the Travis.ci pipeline, as it compares image snapshots that could defer depending of the OS in which they were generated. Use a docker command as described in next chapter for running e2e tests.

### Running development commands using docker

A docker-compose file is provided in order to allow running npm commands without worrying about your current OS. Run any npm command using `docker-compose run npm-command npm run [command]`. The port 3000 is automatically binded to the host.

Example:

``` bash
docker-compose build
# Run "test-ci" npm command inside docker:
docker-compose run npm-command npm run test:ci
```

