/*
Copyright 2020 Javier Brea

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
*/

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

import Title from "components/title";

import IconCard from "components/icon-card";

import * as classes from "./whoAmI.module.scss";

const WhoAmI = () => {
  return (
    <div className={classes.root}>
      <Title className={classes.title}>Who am I</Title>
      <p className={classes.text}>
        I&lsquo;m currently working as <b>head of front-end development at Telefónica Tech</b>.
        Known for:
        <br />
        <ul>
          <li>High quality code advocate</li>
          <li>Modular solutions oriented</li>
          <li>Detail oriented</li>
          <li>Opensource author</li>
        </ul>
      </p>
      <div className="row">
        <IconCard icon={<FontAwesomeIcon icon={faClock} />} text="Years of career" title={19} />
        <IconCard
          icon={<FontAwesomeIcon icon={faLinkedin} />}
          title="Linkedin"
          to="https://www.linkedin.com/in/javierbrea/"
        />
        <IconCard
          icon={<FontAwesomeIcon icon={faGithub} />}
          title={"Github"}
          to="https://github.com/javierbrea"
        />
      </div>
    </div>
  );
};

export default WhoAmI;
