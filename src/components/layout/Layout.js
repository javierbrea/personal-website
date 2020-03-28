import React, { Fragment } from "react";
import PropTypes from "prop-types";

import "styles/base";
import Header from "components/header";
import Footer from "components/footer";

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Header />
      {children}
      <Footer />
    </Fragment>
  );
};

Layout.propTypes = {
  children: PropTypes.node
};

export default Layout;
