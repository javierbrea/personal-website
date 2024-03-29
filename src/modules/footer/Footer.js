/*
Copyright 2020 Javier Brea

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
*/

import clsx from "clsx";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faTwitter, faGithub } from "@fortawesome/free-brands-svg-icons";

import Link from "components/link";

import "./footer.scss";

const Footer = ({ className }) => {
  return (
    <footer className={clsx("footer_area", className)} data-testid="footer">
      <div className="container">
        <div className="row footer_inner">
          <div className="col-lg-5 col-sm-6">
            <aside className="f_widget ab_widget">
              <div className="f_title">
                <h3>About Me</h3>
              </div>
              <p>Web developer. Front-end architect</p>
              <p>Designing and developing software since 2002</p>
              <p>Copyright &copy;2022 Javier Brea</p>
            </aside>
          </div>
          <div className="col-lg-5 col-sm-6"></div>
          <div className="col-lg-2">
            <aside className="social_widget">
              <div className="f_title">
                <h3>Contact info</h3>
              </div>
              <p>Let us be social</p>
              <ul className="list">
                <li>
                  <Link
                    aria-label="Linkedin profile"
                    data-testid="social-link-linkedin"
                    to="https://www.linkedin.com/in/javierbrea/"
                  >
                    <FontAwesomeIcon icon={faLinkedin} />
                  </Link>
                </li>
                <li>
                  <Link
                    aria-label="Twitter profile"
                    data-testid="social-link-twitter"
                    to="https://twitter.com/javierbrea"
                  >
                    <FontAwesomeIcon icon={faTwitter} />
                  </Link>
                </li>
                <li>
                  <Link
                    aria-label="Github profile"
                    data-testid="social-link-github"
                    to="https://github.com/javierbrea"
                  >
                    <FontAwesomeIcon icon={faGithub} />
                  </Link>
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
  className: PropTypes.string,
};

export default Footer;
