export default {
  name: "home",
  type: "document",
  title: "Home",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "seo",
      title: "SEO",
      type: "seo",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
    },
    {
      name: "projects",
      type: "reference",
      type: "array",
      of: [{ type: "reference", to: { type: "project" } }],
    },
  ],
};
