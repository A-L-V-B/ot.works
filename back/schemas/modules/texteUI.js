import { FiAlignLeft } from "react-icons/fi";

export default {
  name: "texteUI",
  title: "Text",
  type: "object",
  icon: FiAlignLeft,
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
      title: "Text"
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
        subtitle: "Text"
      };
    }
  }
};
