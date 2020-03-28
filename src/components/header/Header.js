/*
Copyright 2020 Javier Brea

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
*/

import React from "react";
import clsx from "clsx";
import { useScrollYPosition } from "react-use-scroll-position";

import "./header.scss";

const Header = () => {
  const scrollY = useScrollYPosition();
  return null;
  return (
    <header className={clsx("header_area", scrollY > 90 && "navbar_fixed")}>
      <div className="main_menu" id="mainNav">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container box_1620">
            {/* <!-- Brand and toggle get grouped for better mobile display --> */}
            <a className="navbar-brand logo_h" href="index.html">
              <img alt="" src="img/logo.png" />
            </a>
            <button
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              className="navbar-toggler"
              data-target="#navbarSupportedContent"
              data-toggle="collapse"
              type="button"
            >
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <div className="collapse navbar-collapse offset" id="navbarSupportedContent">
              <ul className="nav navbar-nav menu_nav ml-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="/">
                    Home
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;