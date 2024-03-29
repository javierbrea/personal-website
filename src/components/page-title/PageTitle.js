/*
Copyright 2022 Javier Brea

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
*/

import clsx from "clsx";
import PropTypes from "prop-types";

import { ParallaxBanner } from "react-scroll-parallax";

import MainBanner from "components/main-banner";
import bannerAbout from "images/banner/about-banner.jpg";

import * as classes from "./pageTitle.module.scss";

const PageTitle = ({ title, subtitle }) => {
  return (
    <MainBanner small>
      <div className={classes.root}>
        <div className={clsx("align-items-center", classes.inner)}>
          <ParallaxBanner
            className={classes.overlay}
            layers={[
              {
                image: bannerAbout,
                speed: -25,
              },
            ]}
          />
          <div className={clsx("text-center", classes.text)}>
            <header>
              <h1 data-testid="page-title">{title}</h1>
              {subtitle ? <h2 data-testid="page-subtitle">{subtitle}</h2> : null}
            </header>
          </div>
        </div>
      </div>
    </MainBanner>
  );
};

PageTitle.propTypes = {
  subtitle: PropTypes.string,
  title: PropTypes.string.isRequired,
};

export default PageTitle;
