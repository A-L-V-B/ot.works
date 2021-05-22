const dotenv = require("dotenv")

if (process.env.ENVIRONMENT !== "production") {
  dotenv.config()
}
// const { projectId, accessToken } = process.env
const isProd = process.env.NODE_ENV === "production"
const {
  api: { projectId, dataset },
} = require("../back/sanity.json")
const { SANITY_READ_TOKEN } = process.env

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
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
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
