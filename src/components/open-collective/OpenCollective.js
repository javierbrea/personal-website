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
            description="The web has evolved.  Finally, testing has too."
            link="https://opencollective.com/cypressio"
            logo="https://images.opencollective.com/cypressio/b6f8a1e/logo.png"
            name="Cypress.io"
            role="backer"
            since="since April 2020"
          />
        </Column>
        <Column>
          <MemberShip
            description="JS async data provider empowering modular architectures"
            link="https://opencollective.com/data-provider"
            logo="https://images.opencollective.com/data-provider/2839c3b/logo.png"
            name="Data Provider"
            role="collective admin"
            since="since April 2020"
          />
        </Column>
        <Column>
          <MemberShip
            description="The web has evolved.  Finally, testing has too."
            link="https://opencollective.com/cypressio"
            logo="https://images.opencollective.com/cypressio/b6f8a1e/logo.png"
            name="Cypress.io"
            role="backer"
            since="since April 2020"
          />
        </Column>
        <Column>
          <MemberShip
            description="JS async data provider empowering modular architectures"
            link="https://opencollective.com/data-provider"
            logo="https://images.opencollective.com/data-provider/2839c3b/logo.png"
            name="Data Provider"
            role="collective admin"
            since="since April 2020"
          />
        </Column>
        <Column odd oddRight>
          <MemberShip
            description="The web has evolved.  Finally, testing has too."
            link="https://opencollective.com/cypressio"
            logo="https://images.opencollective.com/cypressio/b6f8a1e/logo.png"
            name="Cypress.io"
            role="backer"
            since="since April 2020"
          />
        </Column>
        <Column odd oddLeft>
          <MemberShip
            description="JS async data provider empowering modular architectures"
            link="https://opencollective.com/data-provider"
            logo="https://images.opencollective.com/data-provider/2839c3b/logo.png"
            name="Data Provider"
            role="collective admin"
            since="since April 2020"
          />
        </Column>
      </div>
    </Section>
  );
};

export default OpenCollective;
