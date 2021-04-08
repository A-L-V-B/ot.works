export default {
  name: "seo",
  type: "object",
  title: "SEO",
  collapsible: "true",
  fields: [
    {
      name: "metaTitle",
      type: "localeString",
      title: "Meta Title",
      description:
        "Description courte et précise de la page, écrire pour les utilisateurs"
      // validation: Rule =>
      //   Rule.max(45).warning(
      //     `Pas plus de 60 caractères dans le titre de la page.`
      //   )
    },
    {
      name: "metaDescription",
      type: "localeString",
      title: "Meta description",
      description:
        "Description libre de la page pour informer les utilisateurs et faire marque",
      validation: Rule =>
        Rule.required()
          // .min(50)
          // .max(160)
          .warning(`Viser entre 50 et 160 caractères.`)
      // validation: Rule =>
      //   Rule.min(50).max(160).warning(`Viser entre 50 et 160 caractères.`)
    },
    {
      name: "posterImage",
      type: "image",
      title: "Poster image",
      description: "Taille recommandée : 1200×628"
    }
  ]
};
