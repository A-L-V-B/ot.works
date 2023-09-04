import {languages} from '../i18n'

export default {
  name: 'siteTitle',
  type: 'object',
  title: 'Site Title',
  fields: languages.map((lang) => ({
    title: lang.title,
    name: lang.name,
    type: 'string',
    validation: (Rule) => [Rule.max(60).warning('Keep your title short')],
  })),
}
