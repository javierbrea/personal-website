/*
Copyright 2020 Javier Brea

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
*/

import clsx from "clsx";
import PropTypes from "prop-types";

import Link from "components/link";

import * as classes from "./jobItem.module.scss";

const JobItem = ({ dates, image, imageAlt, to, title, description }) => {
  return (
    <Link to={to}>
      <div className={clsx(classes.root, to && classes.link)}>
        {<img alt={imageAlt} className="img-fluid" height="340" src={image} width="360" />}
        <div className={classes.text}>
          <p className={classes.title}>{title}</p>
          <p className={classes.description}>
            {description} - {dates}
          </p>
        </div>
      </div>
    </Link>
  );
};

JobItem.propTypes = {
  dates: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  to: PropTypes.string,
};

export default JobItem;
