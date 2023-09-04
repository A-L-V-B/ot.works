export default {
  name: 'seo',
  type: 'object',
  title: 'SEO',
  options: {
    collapsible: true,
    collapsed: true,
  },
  // collapsible: "true",
  // fieldsets: [
  //   {
  //     title: "SEO",
  //     name: "seoGroup"
  //     // options: { collapsible: true }
  //   }
  // ],
  fields: [
    {
      name: 'metaTitle',
      type: 'metaTitle',
      title: 'Meta Title',
      description:
        'Description courte et précise de la page, écrire pour les utilisateurs, 60 caractères max.',
    },
    {
      name: 'metaDescription',
      type: 'localeTextShort',
      title: 'Meta description',
      description:
        'Description libre de la page pour informer les utilisateurs et faire marque, 50-160 caractères.',
      // fieldset: "seoGroup"
    },
    {
      name: 'metaImage',
      type: 'localeImage',
      title: 'Meta image',
      description: 'Taille recommandée : 1200×628',
    },
  ],
}
