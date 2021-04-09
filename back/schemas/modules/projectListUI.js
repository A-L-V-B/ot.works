export default {
  name: "projectListUI",
  title: "project Liste",
  type: "object",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Titre"
    },
    {
      name: "listTitle",
      type: "localeString",
      title: "Titre de la liste"
    },
    {
      name: "listedProjects",
      type: "array",
      title: "Réalisations listées",
      of: [
        {
          type: "reference",
          to: [{ type: "project" }]
        }
      ]
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
        subtitle: "Project Liste"
      };
    }
  }
};
