/*
Copyright 2020 Javier Brea

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
*/

import React from "react";
import clsx from "clsx";

import BannerButton from "components/banner-button";
import MainBanner from "components/main-banner";

import bannerHome from "images/banner/home-avatar.png";
import classes from "./homeBanner.module.scss";

const HomeBanner = () => {
  return (
    <MainBanner className={classes.root}>
      <div className={clsx("container", classes.container)}>
        <div className={clsx("row", classes.row)}>
          <div className="col-lg-6">
            <div className={clsx(classes.img_container)}>
              <img alt="" height={550} src={bannerHome} width={360} />
            </div>
          </div>
          <div className={clsx("col-lg-6", classes.content_col)}>
            <div className={clsx(classes.content)}>
              <h5>This is me</h5>
              <h2>Javier Brea</h2>
              <p>Full stack JS developer. Front end arquitect.</p>
              <BannerButton to="/about">About me</BannerButton>
            </div>
          </div>
        </div>
      </div>
    </MainBanner>
  );
};

export default HomeBanner;
