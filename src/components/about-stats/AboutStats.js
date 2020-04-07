/*
Copyright 2020 Javier Brea

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
*/

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faDesktop, faServer } from "@fortawesome/free-solid-svg-icons";

import Title from "components/title";
import Link from "components/link";

import StatsItem from "./StatsItem";

import classes from "./aboutStats.module.scss";

const AboutStats = () => {
  return (
    <div className={classes.root}>
      <Title className={classes.title}>About Myself</Title>
      <p className={classes.text}>
        Always passionate about technology, I guided my professional career by a motto:{" "}
        &quot;Choose a job you love, and you will never have to work a day in your life&quot;. I
        think I got it. But this doesn&apos;t mean that I like the immobility nor that I think I
        have earned all, quite the opposite.
        <br /> <Link to="/about">Read more...</Link>
      </p>
      <div className="row">
        <StatsItem
          amount={168}
          icon={<FontAwesomeIcon icon={faDesktop} />}
          text="Front-end projects"
        />
        <StatsItem
          amount={43}
          icon={<FontAwesomeIcon icon={faServer} />}
          text="Back-end projects"
        />
        <StatsItem amount={16} icon={<FontAwesomeIcon icon={faClock} />} text="Years of career" />
      </div>
    </div>
  );
};

export default AboutStats;
