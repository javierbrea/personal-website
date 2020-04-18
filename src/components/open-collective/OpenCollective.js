/*
Copyright 2020 Javier Brea

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
*/

import React, { Fragment } from "react";

import Section from "components/section";
import MainTitle from "components/main-title";
import Link from "components/link";

import MemberShip from "./MemberShip";
import Column from "./Column";

const OpenCollective = () => {
  return (
    <Section odd>
      <MainTitle
        subtitle={
          <Fragment>
            I proudly support these projects in{" "}
            <Link to="https://opencollective.com/javier-brea-alcocer">open collective</Link>
          </Fragment>
        }
        title="My contributions"
      />
      <div className="row">
        <Column>
          <MemberShip
            link="https://opencollective.com/cypressio"
            logo="https://images.opencollective.com/cypressio/b6f8a1e/logo.png"
            name="Cypress.io"
            role="contributor"
          />
        </Column>
        <Column>
          <MemberShip
            link="https://opencollective.com/sinon"
            logo="https://images.opencollective.com/sinon/1565a5d/logo/128.png"
            name="Sinon"
            role="contributor"
          />
        </Column>
        <Column>
          <MemberShip
            link="https://opencollective.com/docusaurus"
            logo="https://images.opencollective.com/docusaurus/48a7e37/logo.png"
            name="Docusaurus"
            role="contributor"
          />
        </Column>
        <Column>
          <MemberShip
            link="https://opencollective.com/eslint"
            logo="https://images.opencollective.com/eslint/96b09dc/logo.png"
            name="ESLint"
            role="contributor"
          />
        </Column>
        <Column odd oddRight>
          <MemberShip
            link="https://opencollective.com/webpack"
            logo="https://images.opencollective.com/webpack/c517443/logo/128.png"
            name="Webpack"
            role="contributor"
          />
        </Column>
        <Column odd oddLeft>
          <MemberShip
            link="https://opencollective.com/create-react-app"
            logo="https://images.opencollective.com/create-react-app/logo/128.png"
            name="Create React App"
            role="contributor"
          />
        </Column>
      </div>
    </Section>
  );
};

export default OpenCollective;
