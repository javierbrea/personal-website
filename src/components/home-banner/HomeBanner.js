/*
Copyright 2020 Javier Brea

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
*/

import React from "react";
import clsx from "clsx";

import bannerHome from "images/banner/home-avatar.png";

import classes from "./homeBanner.module.scss";
import "./homeBanner.scss";

const HomeBanner = () => {
  return (
    <div className={classes.wrapper}>
      <section className={clsx("home_banner_area", classes.section)}>
        <div className="banner_inner">
          <div className="container">
            <div className="row home_banner_row">
              <div className="col-lg-6 home_left_img_container">
                <div className="home_left_img">
                  <img alt="" height={550} src={bannerHome} width={360} />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="banner_content">
                  <h5>This is me</h5>
                  <h2>Javier Brea</h2>
                  <p>Full stack JS developer. Front end arquitect.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeBanner;
