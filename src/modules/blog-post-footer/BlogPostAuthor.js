/*
Copyright 2022 Javier Brea

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
*/

import avatar from "images/javierbrea-icon-80.png";

import * as classes from "./blogPostAuthor.module.scss";

const BlogPostAuthor = () => {
  return (
    <div className={classes.authorContainer}>
      <div className={classes.author}>
        <img alt="Javier Brea avatar" height="80" src={avatar} width="80" />
        <p>
          <span className={classes.authorName}>Javier Brea</span>
          Web developer. Front-end specialist. <br /> Head of front-end development at Telefónica
          Tech
        </p>
      </div>
    </div>
  );
};

export default BlogPostAuthor;
