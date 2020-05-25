/*
Copyright 2020 Javier Brea

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
*/

const SITE_URL = "https://www.javierbrea.com";

const {
  NODE_ENV,
  URL: NETLIFY_SITE_URL = SITE_URL,
  DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_SITE_URL,
  CONTEXT: NETLIFY_ENV = NODE_ENV,
} = process.env;
const isNetlifyProduction = NETLIFY_ENV === "production";
const siteUrl = isNetlifyProduction ? NETLIFY_SITE_URL : NETLIFY_DEPLOY_URL;

module.exports = {
  siteMetadata: {
    siteUrl,
    title: `Javier Brea`,
    description: `Javier Brea personal website`,
    author: `@javierbrea`,
    keywords: [
      "Javier Brea",
      "front-end",
      "architect",
      "software",
      "developer",
      "javascript",
      "curriculum",
      "about",
      "projects",
      "career",
    ],
    socialImage: "business-card",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-plugin-sass",
      options: {
        includePaths: [`${__dirname}/node_modules/bootstrap`],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    "gatsby-plugin-sitemap",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Javier Brea personal website`,
        short_name: `Javier Brea`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `minimal-ui`,
        icon: `src/images/javierbrea-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        resolveEnv: () => NETLIFY_ENV,
        env: {
          production: {
            sitemap: `${siteUrl}/sitemap.xml`,
            policy: [{ userAgent: "*" }],
          },
          "branch-deploy": {
            policy: [{ userAgent: "*", disallow: ["/"] }],
            sitemap: null,
            host: null,
          },
          "deploy-preview": {
            policy: [{ userAgent: "*", disallow: ["/"] }],
            sitemap: null,
            host: null,
          },
        },
      },
    },
    {
      resolve: "gatsby-plugin-gtag",
      options: {
        // your google analytics tracking id
        trackingId: "UA-4223464-6",
        // Puts tracking script in the head instead of the body
        head: true,
      },
    },
    {
      resolve: "gatsby-plugin-preconnect",
      options: {
        domains: ["https://www.google-analytics.com"],
      },
    },
    {
      resolve: "gatsby-plugin-module-resolver",
      options: {
        root: "./src", // <- will be used as a root dir
        aliases: {
          images: "./images",
          components: "./components",
          modules: "./modules",
          styles: "./styles",
          data: "./data",
          helpers: "./helpers",
        },
      },
    },
  ],
};
