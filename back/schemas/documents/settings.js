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
      title: 'Site Title',
      type: 'localeString',
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
