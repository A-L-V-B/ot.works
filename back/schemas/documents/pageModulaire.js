// import i18n from "../i18n";
// import localizePreview from "../localizePreview";
import {baseLanguage} from '../i18n'

import {FiFileText} from 'react-icons/fi'

export default {
  name: 'pageModulaire',
  type: 'document',
  title: 'Page Modulaire',
  icon: FiFileText,
  preview: {
    select: {
      // title: `title.${baseLanguage.name}`,
      title: 'title',
      slug: 'slug',
    },
    prepare(selection) {
      const {title, slug} = selection
      return {
        title: title,
        subtitle: slug[baseLanguage.name].current,
      }
    },
  },

  fields: [
    {
      name: 'home',
      type: 'boolean',
      title: 'Homepage',
      // description: "Cocher si cette page est la home du site",
      layout: 'checkbox',
    },
    {
      name: 'seo',
      type: 'seo',
    },
    {
      name: 'title',
      type: 'string',
      title: 'Name',
      description: 'Le nom de la page dans le back',
    },
    {
      name: 'slug',
      type: 'localeSlug',
      title: 'Slug',
      description: 'Au plus court, sans connecteurs logiques',
      // options: {
      //   source: "title",
      //   maxLength: 96
      // }
    },

    {
      name: 'modules',
      title: 'Page content',
      type: 'pageModules',
    },
  ],
}
