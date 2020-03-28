/*
Copyright 2020 Javier Brea

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
*/

import React, { Fragment } from "react";
import PropTypes from "prop-types";

import "styles/base";

import Seo from "modules/seo";
import Header from "components/header";
import Footer from "components/footer";

const Layout = ({ children, title, keywords, socialImage, description }) => {
  return (
    <Fragment>
      <Seo description={description} keywords={keywords} socialImage={socialImage} title={title} />
      <Header />
      {children}
      <Footer />
    </Fragment>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
  description: PropTypes.string,
  keywords: PropTypes.array,
  socialImage: PropTypes.string,
  title: PropTypes.string
};

export default Layout;
