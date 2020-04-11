/*
Copyright 2020 Javier Brea

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
*/

import React from "react";
// import clsx from "clsx";

import Section from "components/section";
import MainTitle from "components/main-title";
import ProjectItem from "components/project-item";

import classes from "./lastProjects.module.scss";

import telefonicaImage from "images/projects/telefonica.jpg";
import orangeImage from "images/projects/orange.jpg";
import ingImage from "images/projects/ing.jpg";

const LastProjects = () => {
  return (
    <Section className={classes.root} odd>
      <MainTitle
        subtitle="Companies in which I have been working on my last projects"
        title="Last Projects"
      />
      <div className="row">
        <div className="col-lg-4 col-sm-6">
          <ProjectItem
            description="Front-end architect"
            image={telefonicaImage}
            imageAlt="Telefónica"
            title="Telefónica I+D"
            // to="/"
          />
        </div>
        <div className="col-lg-4 col-sm-6">
          <ProjectItem
            description="Front-end architect"
            image={orangeImage}
            imageAlt="Orange"
            title="XByOrange"
            // to="/"
          />
        </div>
        <div className="col-lg-4 col-sm-6">
          <ProjectItem
            description="Front-end architect"
            image={ingImage}
            imageAlt="ING"
            title="ING"
            // to="/"
          />
        </div>
      </div>
    </Section>
  );
};

export default LastProjects;
