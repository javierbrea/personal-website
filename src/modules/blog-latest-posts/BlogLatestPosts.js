/*
Copyright 2022 Javier Brea

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
*/

import PropTypes from "prop-types";
import clsx from "clsx";

import { faPersonDigging } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Section from "components/section";

import BlogPostItem from "./BlogPostItem";

import * as classes from "./blogLatestPosts.module.scss";

const DATA_TEST_ID = "blog-latest-posts";

const BlogLatestPosts = ({ posts }) => {
  if (posts.length === 0) {
    return (
      <Section data-testid={DATA_TEST_ID}>
        <div className={classes.noPosts} data-testid="no-posts">
          <p className={classes.noPostsIcon}>
            <FontAwesomeIcon icon={faPersonDigging} />
          </p>
          <p>I&lsquo;m working on my first post</p>
        </div>
      </Section>
    );
  }
  return (
    <Section data-testid={DATA_TEST_ID}>
      <ol className={clsx("row", classes.postsListContainer)}>
        {posts.map((post, index) => {
          return <BlogPostItem key={`${index}-${post.frontmatter.date}`} post={post} />;
        })}
      </ol>
    </Section>
  );
};

BlogLatestPosts.propTypes = {
  posts: PropTypes.array,
};

export default BlogLatestPosts;
