/*
Copyright 2020 Javier Brea

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
*/

import React from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import { ParallaxProvider } from "react-scroll-parallax";

import "styles/base";

import Seo from "modules/seo";
import Header from "components/header";
import Footer from "components/footer";

import classes from "./layout.module.scss";

const Layout = ({ children, title, keywords, socialImage, description, invertedHeader }) => {
  return (
    <ParallaxProvider>
      <div className={classes.root}>
        <Seo
          description={description}
          keywords={keywords}
          socialImage={socialImage}
          title={title}
        />
        <Header className={classes.mainBlock} inverted={invertedHeader} />
        <main className={clsx(classes.mainBlock, classes.content)}>{children}</main>
        <Footer className={classes.mainBlock} />
      </div>
    </ParallaxProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
  description: PropTypes.string,
  invertedHeader: PropTypes.bool,
  keywords: PropTypes.array,
  socialImage: PropTypes.string,
  title: PropTypes.string
};

export default Layout;
