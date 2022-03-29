/*
Copyright 2020 Javier Brea

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
*/

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faDesktop, faServer } from "@fortawesome/free-solid-svg-icons";

import Title from "components/title";
import Link from "components/link";

import StatsItem from "./StatsItem";

import * as classes from "./aboutStats.module.scss";

const AboutStats = () => {
  return (
    <div className={classes.root}>
      <Title className={classes.title}>Some numbers</Title>
      <p className={classes.text}>
        As programmers, we usually tend to try to measure all. I think that knowledge is something
        difficult to measure, but during my long career I have participated in a lot of projects,
        which, obviously, made me acquire a lot of skills. This is only a fast approach to my
        person through the numbers, a mere curiosity. If you really want to know more about me,{" "}
        <Link to="/about">you should read this introduction.</Link>
      </p>
      <div className="row">
        <StatsItem amount={17} icon={<FontAwesomeIcon icon={faClock} />} text="Years of career" />
        <StatsItem
          amount={168}
          icon={<FontAwesomeIcon icon={faDesktop} />}
          text="Front-end projects"
        />
        <StatsItem
          amount={44}
          icon={<FontAwesomeIcon icon={faServer} />}
          text="Back-end projects"
        />
      </div>
    </div>
  );
};

export default AboutStats;
