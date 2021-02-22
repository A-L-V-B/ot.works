export default {
  name: "settings",
  type: "document",
  title: "Site Settings",
  fields: [
    {
      name: "title",
      title: "Site Title",
      type: "string",
    },
    {
      name: "about",
      type: "portableText",
      title: "About",
    },
  ],
};
