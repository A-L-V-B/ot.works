export default {
  name: "seo",
  type: "object",
  title: "SEO",
  collapsible: "true",
  // fieldsets: [
  //   {
  //     title: "SEO",
  //     name: "seoGroup"
  //     // options: { collapsible: true }
  //   }
  // ],
  fields: [
    {
      name: "metaTitle",
      type: "localeString",
      title: "Meta Title",
      description:
        "Description courte et précise de la page, écrire pour les utilisateurs"
      // fieldset: "seoGroup"
    },
    {
      name: "metaDescription",
      type: "localeTextShort",
      title: "Meta description",
      description:
        "Description libre de la page pour informer les utilisateurs et faire marque"
      // fieldset: "seoGroup"
    },
    {
      name: "posterImage",
      type: "image",
      title: "Poster image",
      description: "Taille recommandée : 1200×628"
      // fieldset: "seoGroup"
    }
  ]
};
