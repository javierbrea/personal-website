/*
Copyright 2020 Javier Brea

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
*/

import Skill from "./Skill";

import Title from "components/title";

import * as classes from "./homeSkills.module.scss";

const HomeSkills = () => {
  return (
    <div className={classes.root}>
      <Title centered>Key skills</Title>
      <div>
        <Skill amount={95} title="Front-end development" />
        <Skill amount={90} title="Modular architectures" />
        <Skill amount={90} title="Node.js" />
        <Skill amount={85} title="CI/CD" />
        <Skill amount={80} title="E2E Testing" />
      </div>
    </div>
  );
};

export default HomeSkills;
