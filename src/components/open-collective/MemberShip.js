/*
Copyright 2020 Javier Brea

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
*/

import PropTypes from "prop-types";
import Link from "components/link";

import * as classes from "./memberShip.module.scss";

const MemberShip = ({ link, logo, name, role }) => {
  return (
    <div className={classes.container}>
      <Link to={link}>
        <div className={classes.card}>
          <div className={classes.head}>
            <div className={classes.imageBackground}></div>
            <div className={classes.logo}>
              <div className={classes.logoContainer}>
                <img className={classes.logoImage} src={logo} />
              </div>
            </div>
          </div>
          <div className={classes.body}>
            <div className={classes.name}>{name}</div>
          </div>
          <div className={classes.footer}>
            <div className={classes.membership}>
              <div className={classes.role}>
                <ul className={classes.commaList}>
                  <li>{role}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

MemberShip.propTypes = {
  link: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
};

export default MemberShip;
