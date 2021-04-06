export default {
  name: "texteListUI",
  title: "Texte liste UI",
  type: "object",
  fields: [
    {
      name: "title",
      type: "string"
    },
    {
      name: "liste",
      type: "array",
      of: [{ type: "titleTexte" }]
    }
  ],
  preview: {
    select: {
      title: "title"
    },
    prepare(selection) {
      const { title } = selection;
      return {
        title: title,
        subtitle: "Textes liste UI"
      };
    }
  }
};
