/*
Copyright 2020 Javier Brea

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
*/

import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFrown } from "@fortawesome/free-solid-svg-icons";

import classes from "./notFound.module.scss";

const NotFound = () => (
  <div className={clsx("container", classes.notFound)}>
    <div className="row">
      <div className="col-lg-12">
        <h1 className={classes.title}>
          <FontAwesomeIcon className={classes.icon} icon={faFrown} /> Not found
        </h1>
        <p>
          You either tried some shady route or you came here by mistake. Whichever it is, try using
          the navigation.
        </p>
      </div>
    </div>
  </div>
);

export default NotFound;
