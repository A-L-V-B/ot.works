export default {
  name: 'textesUI',
  title: 'Textes UI',
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
        subtitle: "Textes UI"
      }
    }
  }
};