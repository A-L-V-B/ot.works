import i18n from "../i18n";

export default {
  name: "page",
  type: "document",
  title: "Page",
  preview: {
    select: {
      title: "title",
      slug: "slug",
    },
    prepare(selection) {
      const { title, slug } = selection;
      // console.log(slug)
      return {
        title: title,
        subtitle: slug.current,
      };
    },
  },
  i18n: i18n,
  fields: [
    {
      name: "locale",
      type: "string",
      hidden: true,
    },
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug",
      description:
        "Some frontends will require a slug to be set to be able to show the post",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "template",
      type: "array",
      max: 1,
      of: [{ type: "string" }],
      validation: (Rule) => Rule.unique(),
      options: {
        list: [{ title: "Home", value: "home" }],
      },
    },
    {
      name: "seo",
      type: "seo",
    },
    {
      name: "texte",
      type: "portableText",
      title: "Texte",
    },
    {
      name: "liste",
      type: "array",
      of: [{ type: "titleTexte" }],
    },
  ],
};
