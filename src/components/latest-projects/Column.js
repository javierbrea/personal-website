/*
Copyright 2020 Javier Brea

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
*/

import PropTypes from "prop-types";
import clsx from "clsx";

import * as classes from "./column.module.scss";

const Column = ({ children, odd }) => {
  return (
    <div className={clsx("col-lg-4 col-sm-6", odd && classes.odd)}>
      <div className={clsx(classes.wrapper)}>
        <div className={clsx(odd && classes.oddContainer)}>{children}</div>
      </div>
    </div>
  );
};

Column.propTypes = {
  children: PropTypes.node,
  odd: PropTypes.bool,
};

export default Column;
