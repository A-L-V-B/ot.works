export default {
  name: 'imagesUI',
  title: 'Images UI',
  type: 'object',
  fields: [
    {
      name: 'title',
      type: 'string',
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
        subtitle: "Images UI"
      }
    }
  }
}