import {languages, baseLanguage} from '../i18n'

export default {
  name: 'localeTitle',
  type: 'object',
  title: 'Localized title',
  // fieldsets: [
  //   {
  //     title: "Translations",
  //     name: "translations"
  //     options: { collapsible: false }
  //   }
  // ],
  fields: languages.map((lang) => ({
    title: lang.title,
    name: lang.name,
    type: 'string',
    validation: (Rule) => Rule.max(80).warning('Keep your titles short'),
    // fieldset: lang.isDefault ? null : "translations"
  })),
}
