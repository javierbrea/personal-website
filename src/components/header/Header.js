/*
Copyright 2020 Javier Brea

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
*/

import PropTypes from "prop-types";
import clsx from "clsx";
import { useScrollYPosition } from "react-use-scroll-position";

import Link from "components/link";
import logo from "images/logo.png";
import logoWhite from "images/logo_white.png";

import "./header.scss";

const Header = ({ className, inverted }) => {
  const scrollY = useScrollYPosition();
  const isFixed = scrollY > 90;

  return (
    <header
      className={clsx(
        "header_area",
        isFixed && "navbar_fixed",
        inverted && "white_menu",
        className
      )}
    >
      <div className="main_menu" id="mainNav">
        <nav className="navbar navbar-expand-lg navbar-light" data-testid="navbar">
          <div className="container box_1620">
            {/* <!-- Brand and toggle get grouped for better mobile display --> */}
            <Link className="navbar-brand logo_h" data-testid="main-logo-link" to="/">
              <img alt="JBREA" className="logo" data-testid="main-logo" src={logo} />
              <img
                alt="JBREA"
                className="logo_white"
                data-testid="main-logo-white"
                src={logoWhite}
              />
            </Link>
            <button
              aria-controls="navbar-supported-content"
              aria-expanded="false"
              aria-label="Toggle navigation"
              className="navbar-toggler"
              data-bs-target="#navbar-supported-content"
              data-bs-toggle="collapse"
              data-testid="navbar-collapse-button"
              type="button"
            >
              <span className="navbar-toggler-icon"></span>
              <span className="navbar-toggler-icon"></span>
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse offset justify-content-end"
              id="navbar-supported-content"
            >
              <ul className="nav navbar-nav menu_nav">
                <li className="nav-item active">
                  <Link className="nav-link" data-testid="navigate-to-home" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" data-testid="navigate-to-blog" to="/blog">
                    Blog
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" data-testid="navigate-to-about" to="/about">
                    About
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

Header.propTypes = {
  className: PropTypes.string,
  inverted: PropTypes.bool,
};

export default Header;
