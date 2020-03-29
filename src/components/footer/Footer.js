/*
Copyright 2020 Javier Brea

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
*/

import React from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faTwitter, faGithub } from "@fortawesome/free-brands-svg-icons";

import "./footer.scss";

const Footer = ({ className }) => {
  return (
    <footer className={clsx("footer_area p_120", className)}>
      <div className="container">
        <div className="row footer_inner">
          <div className="col-lg-5 col-sm-6">
            <aside className="f_widget ab_widget">
              <div className="f_title">
                <h3>About Me</h3>
              </div>
              <p>Designing and developing software from 2004</p>
              <p>Copyright &copy; Javier Brea</p>
            </aside>
          </div>
          <div className="col-lg-5 col-sm-6"></div>
          <div className="col-lg-2">
            <aside className="f_widget social_widget">
              <div className="f_title">
                <h3>Follow Me</h3>
              </div>
              <p>Let us be social</p>
              <ul className="list">
                <li>
                  <a aria-label="Linkedin profile" href="https://www.linkedin.com/in/javierbrea/">
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                </li>
                <li>
                  <a aria-label="Twitter profile" href="https://twitter.com/javierbrea">
                    <i className="fa fa-twitter"></i>
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                </li>
                <li>
                  <a aria-label="Github profile" href="https://github.com/javierbrea">
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                </li>
              </ul>
            </aside>
          </div>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  className: PropTypes.string
};

export default Footer;
