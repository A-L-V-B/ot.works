export default {
  name: "project",
  type: "document",
  title: "Project",
  // initialValue: {
  //   seo: {
  //     description: "test"
  //   }
  // },
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug",
      description:
        "Some frontends will require a slug to be set to be able to show the post",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "seo",
      title: "SEO",
      type: "seo",
    },

    {
      name: "date",
      type: "string",
      title: "Date",
    },
  ],
};
