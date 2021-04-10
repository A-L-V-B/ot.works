// import i18n from "../i18n";

export default {
  name: "header",
  type: "document",
  title: "Header",
  preview: {
    select: {
      name: "homeButton"
    },
    prepare(selection) {
      const { homeButton } = selection;
      return {
        title: homeButton
      };
    }
  },
  fields: [
    {
      name: "homeButton",
      title: "Home button",
      type: "string"
    },
    {
      name: "nav",
      title: "Nav",
      type: "array",
      of: [
        {
          type: "internalLink"
        }
      ]
    },
    {
      name: "contact",
      type: "portableText",
      title: "Contact"
    }
  ]
};
