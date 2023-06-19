import {languages} from '../i18n'

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
      type: 'object',
      title: 'Meta Title',
      description:
        'Description courte et précise de la page, écrire pour les utilisateurs, 60 caractères max.',
      fields: languages.map((lang) => ({
        title: lang.title,
        name: lang.name,
        type: 'string',
        validation: (Rule) => [Rule.max(60).warning('Keep your title short')],
      })),
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
      name: 'posterImage',
      type: 'image',
      title: 'Poster image',
      description: 'Taille recommandée : 1200×628',
      // fieldset: "seoGroup"
    },
  ],
}
