/*
Copyright 2020 Javier Brea

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
*/

import Section from "components/section";
import MainTitle from "components/main-title";
import ProjectItem from "components/project-item";

import Column from "./Column";

import classes from "./latestProjects.module.scss";

import telefonicaImage from "images/projects/telefonica.jpg";
import orangeImage from "images/projects/orange.jpg";
import ingImage from "images/projects/ing.jpg";

const LatestProjects = () => {
  return (
    <Section className={classes.root} odd>
      <MainTitle
        subtitle="Companies in which I have been working on my latest projects"
        title="Latest Projects"
      />
      <div className="row">
        <Column>
          <ProjectItem
            description="Front-end architect"
            image={telefonicaImage}
            imageAlt="Telefónica"
            title="Telefónica I+D"
            // to="/"
          />
        </Column>
        <Column>
          <ProjectItem
            description="Front-end architect"
            image={orangeImage}
            imageAlt="Orange"
            title="XByOrange"
            // to="/"
          />
        </Column>
        <Column odd>
          <ProjectItem
            description="Front-end architect"
            image={ingImage}
            imageAlt="ING"
            title="ING"
            // to="/"
          />
        </Column>
      </div>
    </Section>
  );
};

export default LatestProjects;
