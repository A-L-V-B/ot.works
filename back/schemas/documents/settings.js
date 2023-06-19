import {languages} from '../i18n'

export default {
  name: 'settings',
  type: 'document',
  title: 'Site Settings',
  preview: {
    select: {
      siteTitle: 'siteTitle',
    },
    prepare(selection) {
      const {siteTitle} = selection
      return {
        title: siteTitle.fr,
      }
    },
  },
  fields: [
    {
      name: 'siteTitle',
      type: 'object',
      title: 'Site Title',
      fields: languages.map((lang) => ({
        title: lang.title,
        name: lang.name,
        type: 'string',
        validation: (Rule) => [Rule.max(60).warning('Keep your title short')],
      })),
    },
    {
      name: 'version',
      type: 'string',
      title: 'Version du site',
    },
    {
      name: 'message404',
      type: 'localeText',
      title: 'Message 404',
    },
  ],
}
