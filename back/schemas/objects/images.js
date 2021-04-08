export default {
  title: "Images",
  name: "images",
  type: "object",
  fields: [
    {
      title: 'Images',
      name: 'images',
      type: 'array',
      of: [{
        type: 'image',
        options: {
          hotspot: true
        }
      }],
      options: {
        layout: 'grid'
      }
    }
  ]
}