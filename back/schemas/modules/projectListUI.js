import { FiList } from "react-icons/fi";

export default {
  name: "projectListUI",
  title: "Project list",
  type: "object",
  icon: FiList,
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title"
    },
    {
      name: "listTitle",
      type: "localeString",
      title: "List title"
    },
    {
      name: "listedProjects",
      type: "array",
      title: "Listed projects",
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
        subtitle: "Project list"
      };
    }
  }
};
