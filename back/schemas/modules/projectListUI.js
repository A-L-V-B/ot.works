export default {
  name: "projectListUi",
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
      type: "reference",
      title: "Réalisations listées",
      to: [{ type: "project" }]
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
        subtitle: "project Liste UI"
      };
    }
  }
};
