/*
Copyright 2020 Javier Brea

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
*/

import PropTypes from "prop-types";
import clsx from "clsx";

import * as classes from "./section.module.scss";

const Section = ({
  children,
  className,
  odd,
  separator,
  compact,
  compactBottom,
  compactTop,
  "data-testid": dataTestid,
}) => {
  return (
    <div className={clsx(odd && classes.odd)} data-testid={dataTestid}>
      <div
        className={clsx(
          "container",
          classes.section,
          compact && classes.compact,
          compactTop && classes.compactTop,
          compactBottom && classes.compactBottom,
          separator && classes.separator,
          className
        )}
      >
        {children}
      </div>
    </div>
  );
};

Section.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  compact: PropTypes.bool,
  compactBottom: PropTypes.bool,
  compactTop: PropTypes.bool,
  "data-testid": PropTypes.string,
  odd: PropTypes.bool,
  separator: PropTypes.bool,
};

export default Section;
