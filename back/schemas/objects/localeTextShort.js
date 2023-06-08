import {languages, baseLanguage} from '../i18n'

export default {
  name: 'localeTextShort',
  type: 'object',
  title: 'Localized text short',
  fieldsets: [
    {
      title: 'Translations',
      name: 'translations',
      // options: { collapsible: true }
    },
  ],
  fields: languages.map((lang) => ({
    title: lang.title,
    name: lang.name,
    type: 'text',
    rows: 3,
    validation: (Rule) => [
      Rule.min(50).warning('Make your descriptions longer'),
      Rule.max(160).warning('Keep your descriptions short'),
    ],
  })),
}
