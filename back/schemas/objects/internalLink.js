export default {
  title: "Internal Link",
  name: "internalLink",
  type: "object",
  hidden: true,
  fields: [
    {
      name: "label",
      // title: 'Title',
      type: "string"
    },
    {
      name: "link",
      // title: 'Link',
      type: "reference",
      to: [{ type: "pageModulaire" }]
    }
  ]
};
