// import i18n from "../i18n";

export default {
  name: "footer",
  type: "document",
  title: "Footer",
  // i18n: i18n,
  preview: {
    select: {
      name: "texteList"
    },
    prepare(selection) {
      const { texteList } = selection;
      return {
        title: "footer"
      };
    }
  },
  fields: [
    // {
    //   name: "name",
    //   title: "name",
    //   type: "string"
    // },
    {
      name: "texteList",
      type: "texteListUI",
      title: "Texte Liste"
    }
  ]
};
