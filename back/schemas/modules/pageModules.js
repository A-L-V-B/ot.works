export default {
  title: "Page Modules",
  name: "pageModules",
  type: "object",
  fields: [
    {
      name: "modules",
      type: "array",
      of: [
        {
          type: "textesUI",
        },
        {
          type: "imagesUI",
        },
        {
          type: "texteImagesUI",
        },
        {
          type: "textesImagesUI",
        },
      ],
    },
  ],
};
