import i18n from "../i18n";

export default {
  name: "page",
  type: "document",
  title: "Page",
  preview: {
    select: {
      title: "title",
      slug: "slug",
    },
    prepare(selection) {
      const { title, slug } = selection;
      // console.log(slug)
      return {
        title: title,
        subtitle: slug.current,
      };
    },
  },
  i18n: i18n,
  fields: [
    {
      name: "locale",
      type: "string",
      readOnly: true,
    },
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug",
      description: "Au plus court, sans connecteurs logiques",
    },
    {
      name: "seo",
      type: "object",
      title: "SEO",
      collapsible: "true",
      fields: [
        {
          name: "titleTag",
          type: "string",
          title: "Title Tag",
          description: "Description courte et précise de la page, écrire pour les utilisateurs",
          validation: Rule => Rule.max(45).warning(`Pas plus de 60 caractères dans le titre de la page.`)
        },
        {
          name: "metaDescription",
          type: "text",
          title: "Meta description",
          description: "Description libre de la page pour informer les utilisateurs et faire marque",
          validation: Rule => Rule.min(50).max(160).warning(`Viser entre 50 et 160 caractères.`),
          rows : "4"
        },
        {
          name: "posterImage",
          type: "image",
          title: "Poster image",
          description: "Taille recommandée : 1200×628",
        },
      ]
    },
    {
      name: "home",
      type: "boolean",
      title: "Homepage",
      description: "Cocher si cette page est la home du site",
      layout : "checkbox"
    },
    {
      name: 'text',
      type: 'array', 
      title: 'Texte', 
    },
    {
      name: "projectList",
      type: "object",
      title: "Liste de réalisations",
      fields: [
       {
         name: "listTitle",
         type: "string",
         title: "Titre de la liste"
       },
       {
         name: "listedProjects",
         type: "reference",
         title: "Réalisations listées"
         to: [{type: 'project'}]
        },
      ]
    },
  ],
};
