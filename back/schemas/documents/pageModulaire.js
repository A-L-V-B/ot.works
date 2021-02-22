import i18n from "../i18n";

export default {
  name: "pageModulaire",
  type: "document",
  title: "Page Modulaire",
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
      name: "seo",
      type: "seo",
    },
    {
      name: "imageHero",
      type: "imageFeatured",
      title: "Image Hero",
    },
    {
      name: "modules",
      type: "pageModules",
    },
  ],
};
