export default {
  name: "texteUI",
  title: "Texte UI",
  type: "object",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Module Title"
    },
    {
      name: "text",
      // type: "portableText",
      type: "localeText",
      title: "Texte"
    }
  ],
  preview: {
    select: {
      title: "text"
    },
    prepare(selection) {
      const { title } = selection;
      return {
        title: "Texte UI"
      };
    }
  }
};
