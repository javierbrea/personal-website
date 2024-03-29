/*
Copyright 2020 Javier Brea

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
*/

import MainTitle from "components/main-title";

import OpenSourceProject from "./OpenSourceProject";

const OpenSource = () => {
  return (
    <>
      <MainTitle
        subtitle="Main open source projects I'm currently maintaining"
        title="Featured Open Source projects"
      />
      <div className="row">
        <div className="col-lg-6 col-sm-12">
          <OpenSourceProject
            description="Extends Cypress' cy commands with localStorage methods. Allows preserving localStorage between tests."
            github="javierbrea/cypress-localstorage-commands"
            name="cypress-localstorage-commands"
            npm="cypress-localstorage-commands"
            website="https://github.com/javierbrea/cypress-localstorage-commands"
          />
        </div>
        <div className="col-lg-6 col-sm-12">
          <OpenSourceProject
            description="Enables fail fast in Cypress, skipping the rest of tests on first failure."
            github="javierbrea/cypress-fail-fast"
            name="cypress-fail-fast"
            npm="cypress-fail-fast"
            website="https://github.com/javierbrea/cypress-fail-fast"
          />
        </div>
        <div className="col-lg-6 col-sm-12">
          <OpenSourceProject
            description="Eslint plugin checking imports to ensure that architecture boundaries are respected by the elements in a project"
            github="javierbrea/eslint-plugin-boundaries"
            name="eslint-plugin-boundaries"
            npm="eslint-plugin-boundaries"
            website="https://github.com/javierbrea/eslint-plugin-boundaries"
          />
        </div>
        <div className="col-lg-6 col-sm-12">
          <OpenSourceProject
            description="Node.js mock server supporting multiple api behaviors. Simple and easy out-of-the-box but very powerful and customizable with plugins."
            github="mocks-server/main"
            name="Mocks Server"
            npm="@mocks-server/main"
            website="https://www.mocks-server.org"
          />
        </div>
        <div className="col-lg-12 col-sm-12">
          <OpenSourceProject
            description="An async data provider built on top of Redux. Agnostic about specific data origins, queryable, with powerful selectors, cache and memoization."
            github="data-provider/core"
            name="Data Provider"
            npm="@data-provider/core"
            odd
            website="https://www.data-provider.org"
          />
        </div>
      </div>
    </>
  );
};

export default OpenSource;
