// import i18n from "../i18n";

export default {
  name: "menu",
  // _id: 'menu',
  title: "Menu",
  type: "document",
  description: "",
  // icon: Icon,
  // i18n: i18n,
  fields: [
    // {
    //   name: "locale",
    //   type: "string",
    //   hidden: true
    // },
    {
      name: "title",
      title: "Title",
      type: "string"
    },
    {
      name: "items",
      title: "Nav Items",
      type: "array",
      of: [
        {
          type: "internalLink"
        }
      ]
    }
  ]
};
