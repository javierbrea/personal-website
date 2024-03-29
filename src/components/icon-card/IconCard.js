/*
Copyright 2020 Javier Brea

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
*/

import PropTypes from "prop-types";
import clsx from "clsx";

import Link from "components/link";

import * as classes from "./iconCard.module.scss";

const IconCard = ({ title, text, icon, to }) => {
  return (
    <div className={clsx("col-md-4", classes.root)}>
      <Link to={to}>
        <div className={clsx(classes.iconCard)}>
          {icon}
          <p>
            {title} <span>{text}</span>
          </p>
        </div>
      </Link>
    </div>
  );
};

IconCard.propTypes = {
  icon: PropTypes.node.isRequired,
  text: PropTypes.string,
  title: PropTypes.string.isRequired,
  to: PropTypes.string,
};

export default IconCard;
