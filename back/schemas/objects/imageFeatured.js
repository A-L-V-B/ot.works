export default {
  name: "imageFeatured",
  type: "image",
  title: "Image",
  options: {
    hotspot: true
  },
  // validation: Rule =>
  //   Rule.custom(fields => {
  //     if (fields.authors.length > 0 && Object.keys(fields.guest).length > 0)
  //       return "You can't have an author AND guest author";
  //     return true;
  //   }),
  fields: [
    {
      name: "attribution",
      type: "string",
      title: "Attribution",
      description: 'Au format "Travail : Nom"',
      options: {
        isHighlighted: true
      }
    },
    {
      name: "alt",
      type: "localeString",
      title: "Alt text",
      // description: "Important for SEO and accessiblity.",
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
