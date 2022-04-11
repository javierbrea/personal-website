/*
Copyright 2022 Javier Brea

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
*/

import { Link } from "gatsby";
import PropTypes from "prop-types";
import clsx from "clsx";

import * as classes from "./blogPostItem.module.scss";

const BlogPostItem = ({ post }) => {
  const title = post.frontmatter.title || post.fields.slug;
  return (
    <li
      className={clsx("col-lg-4", "col-md-6", "col-sm-12", classes.container)}
      key={post.fields.slug}
    >
      <article itemScope itemType="http://schema.org/Article">
        <Link className={classes.postListItemLink} itemProp="url" to={`/blog${post.fields.slug}`}>
          <div className={clsx("card", classes.postListItem)}>
            <img
              alt={title}
              className="card-img-top"
              height="150"
              src={post.frontmatter.featured.image.publicURL}
              width="350"
            />
            <div className="card-body">
              <h2>
                <span itemProp="headline">{title}</span>
              </h2>
              <small>{post.frontmatter.date}</small>
              <p
                className={clsx("card-text", classes.postDescription)}
                dangerouslySetInnerHTML={{
                  __html: post.frontmatter.description || post.excerpt,
                }}
                itemProp="description"
              />
              <p
                className={clsx("card-text", classes.postExcerpt)}
                dangerouslySetInnerHTML={{
                  __html: post.excerpt,
                }}
              />
            </div>
          </div>
        </Link>
      </article>
    </li>
  );
};

BlogPostItem.propTypes = {
  post: PropTypes.object,
};

export default BlogPostItem;
