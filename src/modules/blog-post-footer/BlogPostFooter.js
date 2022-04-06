/*
Copyright 2022 Javier Brea

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
*/

import clsx from "clsx";
import PropTypes from "prop-types";

import BlogPostPagination from "./BlogPostPagination";
import BlogPostAuthor from "./BlogPostAuthor";

import * as classes from "./blogPostFooter.module.scss";

const BlogPostFooter = ({ previous, next }) => {
  return (
    <div className={clsx("row", classes.blogFooter)}>
      <div className="col-xl-6">
        <BlogPostAuthor />
      </div>
      <div className="col-xl-6">
        <BlogPostPagination next={next} previous={previous} />
      </div>
    </div>
  );
};

BlogPostFooter.propTypes = {
  next: PropTypes.object,
  previous: PropTypes.object,
};

export default BlogPostFooter;
