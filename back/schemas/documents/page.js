import i18n from '../i18n'

export default {
  name: 'page',
  type: 'document',
  title: 'Page',
  preview: {
    select: {
      title: 'title',
      slug: 'slug',
    },
    prepare(selection) {
      const {title, slug} = selection
      // console.log(slug)
      return {
        title: title,
        subtitle: slug.current,
      }
    },
  },
  i18n: i18n,
  fields: [
    {
      name: 'locale',
      type: 'string',
      readOnly: true,
    },
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: 'Au plus court, sans connecteurs logiques',
    },
    {
      name: 'seo',
      type: 'seo',
    },
    {
      name: 'home',
      type: 'boolean',
      title: 'Homepage',
      description: 'Cocher si cette page est la home du site',
      layout: 'checkbox',
    },
    {
      name: 'text',
      type: 'portableText',
      title: 'Texte',
    },
    // {
    //   name: "projectList",
    //   type: "object",
    //   title: "Liste de réalisations",
    //   fields: [
    //     {
    //       name: "listTitle",
    //       type: "string",
    //       title: "Titre de la liste"
    //     },
    //     {
    //       name: "listedProjects",
    //       type: "reference",
    //       title: "Réalisations listées",
    //       to: [{ type: "project" }]
    //     }
    //   ]
    // }
  ],
}
