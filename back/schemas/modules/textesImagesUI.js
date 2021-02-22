export default {
  name: 'textesImagesUI',
  title: 'Textes images UI',
  type: 'object',
  fields: [
    {
      name: 'title',
      type: 'string',
    },
    {
      name: 'textes',
      type: 'array',
      of: [{
        type: 'texteUI'
      }]
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