export default {
  name: 'imageFeatured',
  type: 'image',
  title: 'Image',
  options: {
    hotspot: true,
  },
  // validation: Rule =>
  //   Rule.custom(fields => {
  //     if (fields.authors.length > 0 && Object.keys(fields.guest).length > 0)
  //       return "You can't have an author AND guest author";
  //     return true;
  //   }),
  fields: [
    {
      name: 'credits',
      type: 'reference',
      title: 'Crédit',
      to: [{type: 'collaboration'}],
    },
    {
      name: 'alt',
      type: 'localeString',
      title: 'Alt text',
    },
  ],
  preview: {
    select: {
      imageUrl: 'asset.url',
      title: 'caption',
    },
  },
}
