/*
Copyright 2020 Javier Brea

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
*/

import React from "react";
// import clsx from "clsx";

import Section from "components/section";
import AboutStats from "components/about-stats";
import HomeSkills from "components/home-skills";

const HomeWelcome = () => {
  return (
    <Section>
      <div className="row">
        <div className="col-lg-6">
          <AboutStats />
        </div>
        <div className="col-lg-6">
          <HomeSkills />
        </div>
      </div>
    </Section>
  );
};

export default HomeWelcome;
