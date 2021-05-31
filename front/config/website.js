module.exports = {
  pathPrefix: "/", // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"
  title: "Olivier Talbot, communication et sincérité", // Navigation and Site Title
  titleAlt: "Olivier Talbot", // Title for JSONLD
  description:
    "Travaille à l’intersection de la stratégie, de la communication et du design. Aide ses clients à faire clair, simple et sincère. ",
  headline: "", // Headline for schema.org JSONLD
  url: "https://oliviertalbot.works", // Domain of your site. No trailing slash!
  logo: "/src/images/icon.png", // Used for SEO
  ogLanguage: "fr_FR", // Facebook Language

  // JSONLD / Manifest
  favicon: "src/images/icons/favicon.ico", // Used for manifest favicon generation
  shortName: "ot", // shortname for manifest. MUST be shorter than 12 characters
  author: "Olivier Talbot", // Author for schemaORGJSONLD
  themeColor: "#000000",
  backgroundColor: "#000000",

  instagram: "",
  twitter: "", // Twitter Username
  facebook: "", // Facebook Site Name
  // googleAnalyticsID: "",

  skipNavId: "reach-skip-nav", // ID for the "Skip to content" a11y feature
}
