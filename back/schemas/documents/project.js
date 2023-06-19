import {FiXSquare} from 'react-icons/fi'
import {languages} from '../i18n'

export default {
  name: 'project',
  type: 'document',
  title: 'Projects',
  icon: FiXSquare,
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
      description: 'Le nom du projet dans le back uniquement',
    },
    {
      name: 'title',
      type: 'object',
      title: 'Title',
      description: 'Description de la mission et du client, 80 caractères max.',
      fields: languages.map((lang) => ({
        title: lang.title,
        name: lang.name,
        type: 'string',
        validation: (Rule) => [Rule.max(80).warning('Keep your title short')],
      })),
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: 'Au plus court, sans connecteurs logiques',
    },
    // {
    //   name: "localeSlug",
    //   type: "localeSlug",
    //   title: "localeSlug",
    //   description: "Au plus court, sans connecteurs logiques"
    // },
    {
      name: 'client',
      type: 'string',
      title: 'Client',
      description: 'Si le projet est perso, le nom du projet',
    },
    {
      title: 'Category',
      name: 'category',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        list: [
          {value: 'work', title: 'Work'},
          {value: 'personal', title: 'Perso'},
          {value: 'pro-bono', title: 'Pro bono'},
        ],
      },
    },
    {
      name: 'dateDelivered',
      type: 'date',
      title: 'Date delivered',
    },
    {
      name: 'projectUrl',
      type: 'url',
      title: 'Live project URL',
    },
    // {
    //   name: "projectImage",
    //   type: "image",
    //   title: "Project image"
    // },
    {
      name: 'imageFeatured',
      type: 'imageFeatured',
      title: 'Project Image',
    },
    {
      name: 'collaborations',
      type: 'array',
      title: 'En collaboration avec',
      of: [
        {
          type: 'reference',
          to: [{type: 'collaboration'}],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'name',
      date: 'dateDelivered',
      media: 'imageFeatured.asset',
    },
    prepare(selection) {
      const {title, date, media} = selection
      const year = date && date.split('-')[0]

      return {
        title: title,
        subtitle: year,
        media: media,
      }
    },
  },
}
