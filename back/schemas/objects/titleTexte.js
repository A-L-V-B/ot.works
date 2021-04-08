export default {
  type: "object",
  name: "titleTexte",
  title: "Title texte",
  preview: {
    select: {
      title: "title"
    },
    prepare(selection) {
      const { title } = selection;
      return {
        title: title.fr
      };
    }
  },
  fields: [
    {
      name: "title",
      type: "localeString",
      title: "Title"
    },
    {
      name: "texte",
      type: "localeText",
      title: "Texte"
    }
  ]
};
