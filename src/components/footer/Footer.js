import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faTwitter, faGithub } from "@fortawesome/free-brands-svg-icons";

import "./footer.scss";

const Footer = () => {
  return (
    <footer className="footer_area p_120">
      <div className="container">
        <div className="row footer_inner">
          <div className="col-lg-5 col-sm-6">
            <aside className="f_widget ab_widget">
              <div className="f_title">
                <h3>About Me</h3>
              </div>
              <p>Working on designing and developing software from 2004</p>
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
                  <a href="https://www.linkedin.com/in/javierbrea/">
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/javierbrea">
                    <i className="fa fa-twitter"></i>
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                </li>
                <li>
                  <a href="https://github.com/javierbrea">
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

export default Footer;
