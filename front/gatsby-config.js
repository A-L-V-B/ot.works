const dotenv = require("dotenv")

if (process.env.ENVIRONMENT !== "production") {
  dotenv.config()
}
// const { projectId, accessToken } = process.env
const isProd = process.env.NODE_ENV === "production"
const { SANITY_READ_TOKEN, SANITY_DATASET, SANITY_PROJECT_ID } = process.env
const projectId = SANITY_PROJECT_ID
const dataset = SANITY_DATASET

const website = require("./config/website")
const pathPrefix = website.pathPrefix === "/" ? "" : website.pathPrefix

module.exports = {
  siteMetadata: {
    siteTitle: website.title,
    siteDescription: website.description,
    siteUrl: website.url + pathPrefix,
    pathPrefix,
    banner: website.logo,
    ogLanguage: website.ogLanguage,
    author: website.author,
    twitter: website.twitter,
    facebook: website.facebook,
  },
  plugins: [
    {
      resolve: "gatsby-source-sanity",
      options: {
        // projectId: projectId,
        // dataset: "production",
        projectId,
        dataset,
        overlayDrafts: !isProd,
        watchMode: !isProd,
        token: SANITY_READ_TOKEN,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-image`,
    `gatsby-plugin-react-helmet`,
    // "gatsby-plugin-sitemap",
    {
      resolve: `gatsby-plugin-advanced-sitemap`,
      options: {
        // query: `{}`, // your query
        // mapping: {}, // add if needed
        exclude: [`/dev-404-page`, `/404`, `/404.html`, `/en/404`, `/en/404/`],
        createLinkInHead: true,
        // addUncaughtPages: true,
        // additionalSitemaps: [], // add if needed
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: `src/images/icon.png`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,

    // {
    //   resolve: "gatsby-source-filesystem",
    //   options: {
    //     name: "images",
    //     path: "./src/images/"
    //   },
    //   __key: "images"
    // }
  ],
}
