/*
Copyright 2020 Javier Brea

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
*/

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

import Title from "components/title";

import StatsItem from "./StatsItem";

import * as classes from "./aboutStats.module.scss";

const AboutStats = () => {
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
        <StatsItem amount={19} icon={<FontAwesomeIcon icon={faClock} />} text="Years of career" />
        <StatsItem
          amount="Linkedin"
          icon={<FontAwesomeIcon icon={faLinkedin} />}
          to="https://www.linkedin.com/in/javierbrea/"
        />
        <StatsItem
          amount={"Github"}
          icon={<FontAwesomeIcon icon={faGithub} />}
          to="https://github.com/javierbrea"
        />
      </div>
    </div>
  );
};

export default AboutStats;
