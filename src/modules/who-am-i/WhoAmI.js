/*
Copyright 2020 Javier Brea

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
*/

import Title from "components/title";

import * as classes from "./whoAmI.module.scss";

const WhoAmI = () => {
  return (
    <div className={classes.root}>
      <Title centered>Who am I</Title>
      <div className={classes.text}>
        <p>
          I&lsquo;m currently working as head of front-end software development at Telefonica Tech.
        </p>
        <p>
          I&lsquo;m writing code professionally since 2003, working as a front-end specialist since
          2010, and as a front-end architect since 2015.
        </p>
        <p>
          My main skills are: building web apps in JavaScript & Node.js, CI/CD, development tools,
          E2E testing and data modeling. I am known for being a high quality code advocate, modular
          solutions oriented, detail oriented and opensource author.
        </p>
      </div>
    </div>
  );
};

export default WhoAmI;
