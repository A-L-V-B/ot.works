export default {
  name: "texteUI",
  title: "Texte",
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
      title: "title"
    },
    prepare(selection) {
      const { title } = selection;
      return {
        title: title,
        subtitle: "Texte"
      };
    }
  }
};
