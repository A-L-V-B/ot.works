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
          type: "texteUI"
        },
        {
          type: "textesUI"
        },
        {
          type: "texteListUI"
        },

        {
          type: "projectListUI"
        }
      ]
    }
  ]
};
