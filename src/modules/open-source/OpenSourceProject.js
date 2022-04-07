/*
Copyright 2020 Javier Brea

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
*/

import clsx from "clsx";
import PropTypes from "prop-types";
import GitHubButton from "react-github-btn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

import Link from "components/link";

import * as classes from "./openSourceProject.module.scss";

const OpenSourceProject = ({ name, description, github, npm, website, odd }) => {
  return (
    <div className={clsx(classes.openSourceProject, odd && classes.odd)}>
      <p className={classes.name}>{name}</p>
      <p className={classes.description}>{description}</p>
      <div>
        <div className={classes.links} data-testid="opensource-project-links">
          <Link to={`https://www.npmjs.com/package/${npm}`}>
            <img alt="NPM Downloads" src={`https://img.shields.io/npm/dm/${npm}.svg`} />
          </Link>
          <GitHubButton
            aria-label={`Star ${github} on GitHub`}
            data-icon="octicon-star"
            data-show-count="true"
            href={`https://github.com/${github}`}
          >
            Star
          </GitHubButton>
          <Link to={website}>
            <span className={classes.website}>
              <FontAwesomeIcon icon={faGlobe} /> Website
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

OpenSourceProject.propTypes = {
  description: PropTypes.string,
  github: PropTypes.string,
  name: PropTypes.string,
  npm: PropTypes.string,
  odd: PropTypes.bool,
  website: PropTypes.string,
};

export default OpenSourceProject;
