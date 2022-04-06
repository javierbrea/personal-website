/*
Copyright 2020 Javier Brea

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
*/

import { useMemo } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import * as classes from "./title.module.scss";

const Title = ({ children, inverted, className, small, centered }) => {
  const content = useMemo(
    () => (
      <h2
        className={clsx(
          classes.title,
          inverted && classes.inverted,
          small && classes.small,
          className
        )}
      >
        {children}
      </h2>
    ),
    [children, className, inverted, small]
  );
  if (centered) {
    return <div className={classes.centered}>{content}</div>;
  }
  return content;
};

Title.propTypes = {
  centered: PropTypes.bool,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  inverted: PropTypes.bool,
  small: PropTypes.bool,
};

export default Title;
