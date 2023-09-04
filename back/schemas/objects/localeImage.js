import {languages} from '../i18n'

export default {
  name: 'localeImage',
  type: 'object',
  title: 'Localized image',
  fieldsets: [
    {
      title: 'Translations',
      name: 'translations',
      options: {collapsible: true},
    },
  ],
  fields: languages.map((lang) => ({
    title: lang.title,
    name: lang.name,
    type: 'image',
  })),
}
