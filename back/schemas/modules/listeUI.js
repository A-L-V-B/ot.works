export default {
  name: 'listeUI',
  title: 'Liste UI',
  type: 'object',
  fields: [
    {
      name: 'title',
      type: 'string',
    },
    {
      name: "liste",
      type: 'array',
      of: [{
        type: 'text',
        name: 'texte'
      }],
    },
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
        subtitle: "Liste UI"
      }
    }
  }
};