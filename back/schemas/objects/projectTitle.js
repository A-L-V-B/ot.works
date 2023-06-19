import {languages} from '../i18n'

export default {
  name: 'projectTitle',
  type: 'object',
  title: 'Title',
  description: 'Description de la mission et du client, 80 caractères max.',
  fields: languages.map((lang) => ({
    title: lang.title,
    name: lang.name,
    type: 'string',
    validation: (Rule) => [Rule.max(80).warning('Keep your title short')],
  })),
}
