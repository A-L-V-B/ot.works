export default {
  name: "projectListUI",
  title: "project List UI",
  type: "object",
  fields: [
    {
      name: "listTitle",
      type: "string",
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
      title: "listTitle"
    },
    prepare(selection) {
      const { title } = selection;
      return {
        title: title,
        subtitle: "project Liste UI"
      };
    }
  }
};
