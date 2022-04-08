/*
Copyright 2022 Javier Brea

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
*/

/* eslint-disable filenames/match-exported */

import { graphql } from "gatsby";
import PropTypes from "prop-types";

import Layout from "modules/layout";
import BlogLatestPosts from "modules/blog-latest-posts";
import PageTitle from "components/page-title";

const DESCRIPTION = "Latest blog posts";

const keywords = ["blog", "posts", "tech"];

const Page = ({ data }) => {
  const posts = data.allMarkdownRemark.nodes;
  return (
    <Layout
      data-testid="blog-page"
      description={DESCRIPTION}
      invertedHeader
      keywords={keywords}
      title="Blog"
    >
      <PageTitle title={DESCRIPTION} />
      <BlogLatestPosts posts={posts} />
    </Layout>
  );
};

Page.propTypes = {
  data: PropTypes.object,
};

export default Page;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
          featured {
            image {
              publicURL
            }
          }
        }
      }
    }
  }
`;
