/*
Copyright 2022 Javier Brea

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
*/

import PropTypes from "prop-types";

import "./blogPostContent.scss";

import * as classes from "./blogPostContent.module.scss";

const BlogPostContent = ({ html, subtitle }) => {
  return (
    <article itemScope itemType="http://schema.org/Article">
      <section
        className={classes.content}
        dangerouslySetInnerHTML={{ __html: `<h1>${subtitle}</h1>${html}` }}
        itemProp="articleBody"
      />
      <footer></footer>
    </article>
  );
};

BlogPostContent.propTypes = {
  html: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default BlogPostContent;
