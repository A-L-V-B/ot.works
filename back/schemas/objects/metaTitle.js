import {languages} from '../i18n'

export default {
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
}
