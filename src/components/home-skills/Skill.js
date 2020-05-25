/*
Copyright 2020 Javier Brea

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
*/

import React, { useMemo } from "react";
import PropTypes from "prop-types";
// import clsx from "clsx";

import classes from "./skill.module.scss";

const Skill = ({ title, amount }) => {
  const style = useMemo(() => {
    return { width: `${amount}%` };
  }, [amount]);

  return (
    <div className={classes.root}>
      <h4>
        {title} <span className="counter">{amount}</span>%
      </h4>
      <div className={classes.progress}>
        <div
          aria-valuemax="100"
          aria-valuemin="0"
          aria-valuenow={amount}
          className={classes.progressBar}
          role="progressbar"
          style={style}
        ></div>
      </div>
    </div>
  );
};

Skill.propTypes = {
  amount: PropTypes.number,
  title: PropTypes.string,
};

export default Skill;
