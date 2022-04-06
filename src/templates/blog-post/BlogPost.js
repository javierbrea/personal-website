import { Link, graphql } from "gatsby";
import clsx from "clsx";
import PropTypes from "prop-types";

import Layout from "modules/layout";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BlogBanner from "components/blog-banner";
import Section from "components/section";
import { faCalendar, faCaretRight, faCaretLeft } from "@fortawesome/free-solid-svg-icons";
import avatar from "images/javierbrea-icon.png";

import * as classes from "./blogPost.module.scss";

const BlogPost = ({ data }) => {
  const post = data.markdownRemark;
  const { previous, next } = data;

  return (
    <Layout
      description={post.frontmatter.description || post.excerpt}
      invertedHeader
      title={post.frontmatter.title}
    >
      <BlogBanner title={post.frontmatter.title} />
      <Section odd ultraCompact>
        <p className={classes.date}>
          <span>
            <FontAwesomeIcon icon={faCalendar} />
          </span>
          <time>{post.frontmatter.date}</time>
        </p>
      </Section>
      <Section compact>
        <article itemScope itemType="http://schema.org/Article">
          <section dangerouslySetInnerHTML={{ __html: post.html }} itemProp="articleBody" />
          <footer></footer>
        </article>
      </Section>
      <Section compact odd>
        <div className={clsx("row", classes.blogFooter)}>
          <div className="col-xl-6">
            <div className={classes.authorContainer}>
              <div className={classes.author}>
                <img height="80" src={avatar} width="80" />
                <p>
                  <span className={classes.authorName}>Javier Brea</span>
                  Web developer. Front-end specialist. <br /> Head of front-end development at
                  Telefónica Tech
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className={classes.pagination}>
              <nav>
                <div className={classes.paginationTitle}>
                  <span>Previous post</span>
                  <span>Next post</span>
                </div>
                <ul
                  style={{
                    display: `flex`,
                    flexWrap: `wrap`,
                    justifyContent: `space-between`,
                    listStyle: `none`,
                    padding: 0,
                  }}
                >
                  <li>
                    {previous && (
                      <Link rel="prev" to={`/blog${previous.fields.slug}`}>
                        <FontAwesomeIcon icon={faCaretLeft} /> {previous.frontmatter.title}
                      </Link>
                    )}
                  </li>
                  <li>
                    {next && (
                      <Link rel="next" to={`/blog${next.fields.slug}`}>
                        {next.frontmatter.title} <FontAwesomeIcon icon={faCaretRight} />
                      </Link>
                    )}
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

BlogPost.propTypes = {
  data: PropTypes.object,
  location: PropTypes.object,
};

export default BlogPost;

export const pageQuery = graphql`
  query BlogPostBySlug($id: String!, $previousPostId: String, $nextPostId: String) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`;
