/*
Copyright 2022 Javier Brea

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
*/

import { Link } from "gatsby";
import PropTypes from "prop-types";

import { faCaretRight, faCaretLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import * as classes from "./blogPostPagination.module.scss";

const BlogPostPagination = ({ previous, next }) => {
  return (
    <div className={classes.pagination}>
      <nav>
        <div className={classes.paginationTitle}>
          <span>Previous post</span>
          <span>Next post</span>
        </div>
        <ul>
          <li>
            {previous && (
              <Link rel="prev" to={previous.url}>
                <FontAwesomeIcon icon={faCaretLeft} /> {previous.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link rel="next" to={next.url}>
                {next.title} <FontAwesomeIcon icon={faCaretRight} />
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
};

BlogPostPagination.propTypes = {
  data: PropTypes.object,
  next: PropTypes.shape({
    url: PropTypes.string,
    title: PropTypes.string,
  }),
  previous: PropTypes.shape({
    url: PropTypes.string,
    title: PropTypes.string,
  }),
};

export default BlogPostPagination;
