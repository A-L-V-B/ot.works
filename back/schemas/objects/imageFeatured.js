export default {
  name: "imageFeatured",
  type: "image",
  title: "Image",
  options: {
    hotspot: true
  },
  fields: [
    {
      name: "credits",
      type: "string",
      title: "Crédits",
      options: {
        isHighlighted: true
      }
    },
    {
      name: "alt",
      type: "localeString",
      title: "Alt text",
      description: "Important for SEO and accessiblity.",
      // validation: Rule =>
      //   Rule.error("You have to fill out the alternative text.").required(),
      options: {
        isHighlighted: true
      }
    }
  ],
  preview: {
    select: {
      imageUrl: "asset.url",
      title: "caption"
    }
  }
};
