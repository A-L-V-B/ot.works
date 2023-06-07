import { baseLanguage } from "../i18n";

export default {
  title: "Internal Link",
  name: "internalLink",
  type: "object",
  preview: {
    select: {
      label: `label.${baseLanguage.name}`
    },
    prepare(selection) {
      const { label } = selection;
      return {
        title: label,
        subtitle: "test"
      };
    }
  },
  fields: [
    {
      name: "label",
      title: "Label",
      type: "localeString"
    },
    {
      name: "link",
      // title: 'Link',
      type: "reference",
      to: [{ type: "pageModulaire" }]
    }
  ]
};
