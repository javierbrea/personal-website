/*
Copyright 2020 Javier Brea

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
*/

/* eslint-disable filenames/match-exported */

import Layout from "modules/layout";

import OpenCollective from "modules/open-collective";
import OpenSource from "modules/open-source";
import LatestJobs from "modules/latest-jobs";
import HomeBanner from "modules/home-banner";
import WhoAmI from "modules/who-am-i";
import HomeSkills from "modules/home-skills";
import GithubStats from "modules/github-stats";
import SocialLinks from "modules/social-links";

import Section from "components/section";

const Page = () => {
  return (
    <Layout data-testid="home-page" title="Home">
      <HomeBanner />
      <Section>
        <div className="row">
          <div className="col-lg-6">
            <WhoAmI />
          </div>
          <div className="col-lg-6">
            <HomeSkills />
          </div>
        </div>
      </Section>
      <Section odd>
        <div className="row">
          <div className="col-lg-6">
            <GithubStats />
          </div>
          <div className="col-lg-6">
            <SocialLinks />
          </div>
        </div>
      </Section>
      <Section>
        <LatestJobs />
      </Section>
      <Section odd>
        <OpenSource />
      </Section>
      <Section>
        <OpenCollective />
      </Section>
    </Layout>
  );
};

export default Page;
