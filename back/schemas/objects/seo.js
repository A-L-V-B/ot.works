export default {
  title: "SEO",
  name: "seo",
  type: "object",
  // initialValue: {
  //     description: "SEO description",
  //     image: {
  //         _type: 'image',
  //         asset: {
  //             _type: 'reference',
  //             _ref: 'https://i1.wp.com/healthyclemsy.fr/wp-content/uploads/2016/05/placeholder-1.png?fit=1920%2C1280&ssl=1'
  //         }
  //     }
  // },
  fields: [
    {
      name: "description",
      type: "string",
      title: "Description",
    },
    {
      name: "image",
      type: "image",
      title: "Image",
    },
  ],
};
