export default {
  name: 'texteUI',
  title: 'Texte UI',
  type: 'object',
  fields: [
    {
      name: 'text',
      type: 'portableText',
      title: 'Texte',
    },
  ],
  preview: {
    select: {
      title: 'text'
    },
    prepare(selection) {
      const { title } = selection
      return {
        title: 'Texte UI'
      }
    }
  }
};