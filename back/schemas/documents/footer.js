import i18n from "../i18n";

export default {
  name: "footer",
  type: "document",
  title: "Footer",
  i18n: i18n,
  fields: [
    {
      name: "footerNote",
      type: "object",
      title: "Note footer",
    },
    {
      name: "footerLastLine",
      type: "string",
      title: "Pied de page",
    },
  }
