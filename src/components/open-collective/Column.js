/*
Copyright 2020 Javier Brea

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
*/

import PropTypes from "prop-types";
import clsx from "clsx";

import classes from "./column.module.scss";

const Column = ({ children, odd, oddRight, oddLeft }) => {
  return (
    <div className={clsx("col-lg-3 col-sm-4 col-6", classes.column, odd && classes.odd)}>
      <div
        className={clsx(
          classes.container,
          oddRight && classes.oddRight,
          oddLeft && classes.oddLeft
        )}
      >
        {children}
      </div>
    </div>
  );
};

Column.propTypes = {
  children: PropTypes.node,
  odd: PropTypes.bool,
  oddLeft: PropTypes.bool,
  oddRight: PropTypes.bool,
};

export default Column;
