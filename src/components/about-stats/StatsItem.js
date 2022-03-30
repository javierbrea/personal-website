/*
Copyright 2020 Javier Brea

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
*/

import PropTypes from "prop-types";
import clsx from "clsx";

import Link from "components/link";

import * as classes from "./statsItem.module.scss";

const StatsItem = ({ amount, text, icon, to }) => {
  return (
    <div className="col-md-4">
      <Link to={to}>
        <div className={clsx(classes.item)}>
          {icon}
          <h4>
            {amount} <span>{text}</span>
          </h4>
        </div>
      </Link>
    </div>
  );
};

StatsItem.propTypes = {
  amount: PropTypes.number.isRequired,
  icon: PropTypes.node.isRequired,
  text: PropTypes.string,
  to: PropTypes.string,
};

export default StatsItem;
