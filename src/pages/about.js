/*
Copyright 2020 Javier Brea

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
*/

/* eslint-disable filenames/match-exported */

import React from "react";

import Layout from "modules/layout";
import AboutBanner from "components/about-banner";
import AboutMe from "components/about-me";

const Page = () => (
  <Layout data-testid="about-page" description="About Javier Brea" invertedHeader title="About">
    <AboutBanner />
    <AboutMe />
  </Layout>
);

export default Page;
