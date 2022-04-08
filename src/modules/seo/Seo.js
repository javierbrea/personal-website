/*
Copyright 2020 Javier Brea

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
*/

import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

function SEO({ description, lang, meta, keywords, onlyCustomKeywords, title, socialImage }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            siteUrl
            title
            description
            keywords
            social {
              twitter
              image
            }
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;

  const customKeywords = keywords || [];
  const allKeywords = onlyCustomKeywords
    ? customKeywords
    : customKeywords.concat(site.siteMetadata.keywords);
  const socialImagePath = socialImage || site.siteMetadata.social.image;

  const fullTitle = `${title} | ${site.siteMetadata.title}`;
  const socialImageUrl = `${site.siteMetadata.siteUrl}${socialImagePath}`;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      meta={[
        {
          name: "description",
          content: metaDescription,
        },
        {
          property: "og:title",
          content: fullTitle,
        },
        {
          property: "og:description",
          content: metaDescription,
        },
        {
          property: "og:type",
          content: "website",
        },
        {
          property: "og:image",
          content: socialImageUrl,
        },
        {
          name: "twitter:card",
          content: "summary",
        },
        {
          name: "twitter:site",
          content: site.siteMetadata.social.twitter,
        },
        {
          name: "twitter:creator",
          content: site.siteMetadata.social.twitter,
        },
        {
          name: "twitter:title",
          content: fullTitle,
        },
        {
          name: "twitter:description",
          content: metaDescription,
        },
        {
          name: "twitter:image",
          content: socialImageUrl,
        },
        {
          name: "twitter:image:alt",
          content: metaDescription,
        },
      ]
        .concat(
          allKeywords.length > 0
            ? [
                {
                  name: `keywords`,
                  content: allKeywords.join(`, `),
                },
              ]
            : []
        )
        .concat(meta)}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
    />
  );
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  keywords: [],
  description: ``,
};

SEO.propTypes = {
  description: PropTypes.string,
  keywords: PropTypes.arrayOf(PropTypes.string),
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  onlyCustomKeywords: PropTypes.bool,
  socialImage: PropTypes.string,
  title: PropTypes.string.isRequired,
};

export default SEO;
