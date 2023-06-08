import {FiUser} from 'react-icons/fi'

export default {
  name: 'collaboration',
  type: 'document',
  title: 'Collaborations',
  icon: FiUser,
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Nom',
    },
    {
      name: 'job',
      type: 'string',
      title: 'Métier',
    },
    {
      name: 'url',
      type: 'url',
      title: 'URL',
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'job',
    },
    prepare: ({title, subtitle}) => {
      return {
        title,
        subtitle,
        media: FiUser,
      }
    },
  },
}
