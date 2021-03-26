import i18n from "../i18n";

export default {
  name: "header",
  type: "document",
  title: "Header",
  i18n: i18n,
  fields: [
    {
      name: "title",
      title: "Site Title",
      type: "string"
    },
    {
      name: "about",
      type: "portableText",
      title: "About"
    }
  ]
};
