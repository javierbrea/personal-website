/*
Copyright 2022 Javier Brea

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
*/

import { useMemo } from "react";
import { graphql } from "gatsby";
import PropTypes from "prop-types";

import { blogUrl } from "helpers/urls";

import PageTitle from "components/page-title";
import Section from "components/section";

import Layout from "modules/layout";
import BlogPostContent from "modules/blog-post-content";
import BlogPostHeader from "modules/blog-post-header";
import BlogPostFooter from "modules/blog-post-footer";

function getPaginationData(data) {
  if (!data) {
    return null;
  }
  return {
    url: blogUrl(data.fields.slug),
    title: data.frontmatter.title,
  };
}

const BLOG_KEYWORDS = ["blog", "post", "article", "tech", "tutorial", "example"];

const BlogPost = ({ data }) => {
  const { markdownRemark: post, previous, next } = data;

  const previousData = useMemo(() => {
    return getPaginationData(previous);
  }, [previous]);

  const nextData = useMemo(() => {
    return getPaginationData(next);
  }, [next]);

  const keywords = useMemo(() => {
    const postKeyWords = post?.frontmatter?.tags || [];
    return postKeyWords.concat(BLOG_KEYWORDS);
  }, [post]);

  if (!post) {
    return <div>No post</div>;
  }

  return (
    <Layout
      data-testid="blog-post-page"
      description={post.frontmatter.description || post.excerpt}
      invertedHeader
      keywords={keywords}
      onlyCustomKeywords
      socialImage={post.frontmatter.featured.image.publicURL}
      title={post.frontmatter.title}
    >
      <PageTitle title={post.frontmatter.title} />
      <Section data-testid="blog-post-header" odd ultraCompact>
        <BlogPostHeader date={post.frontmatter.date} />
      </Section>
      <Section compact data-testid="blog-post-content">
        <BlogPostContent html={post.html} subtitle={post.frontmatter.description} />
      </Section>
      <Section compact data-testid="blog-post-footer" odd>
        <BlogPostFooter next={nextData} previous={previousData} />
      </Section>
    </Layout>
  );
};

BlogPost.propTypes = {
  data: PropTypes.object,
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
        tags
        featured {
          image {
            publicURL
          }
        }
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
