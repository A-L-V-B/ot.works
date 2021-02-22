export default {
  name: 'texteImagesUI',
  title: 'Texte images UI',
  type: 'object',
  fields: [
    {
      name: "template",
      type: 'array',
      max: 1,
      of: [{type: 'string'}],
      validation: Rule => Rule.unique(),
      options: {
        list: [
          {title: 'Template 1', value: 'template1'},
          {title: 'Template 2', value: 'template2'},
          {title: 'Template 3', value: 'template3'},
          {title: 'Template 4', value: 'template4'}
        ]
      }
    },
    {
      name: 'title',
      type: 'text',
    },
    {
      name: 'text',
      type: 'portableText',
      title: 'Texte',
    },
    {
      name: 'images',
      type: 'array',
      of: [{
        type: 'imageUI'
      }]
    }
  ],
  preview: {
    select: {
      title: 'title'
    },
    prepare(selection) {
      const {
        title
      } = selection
      return {
        title: title,
        subtitle: "Texte images UI"
      }
    }
  }
};