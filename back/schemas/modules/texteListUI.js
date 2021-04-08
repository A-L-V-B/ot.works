export default {
  name: "texteListUI",
  title: "Texte liste UI",
  type: "object",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Module Title"
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
      console.log(title);
      return {
        title: title,
        subtitle: "Textes liste UI"
      };
    }
  }
};
