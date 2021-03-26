import i18n from "../i18n";

export default {
  name: "footer",
  type: "document",
  title: "Footer",
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
