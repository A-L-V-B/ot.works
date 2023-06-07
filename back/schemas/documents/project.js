import { baseLanguage } from "../i18n";
import { FiXSquare } from "react-icons/fi";

export default {
  name: "project",
  type: "document",
  title: "Projects",
  icon: FiXSquare,
  preview: {
    select: {
      // title: `title.${baseLanguage.name}`,
      title: "name",
      category: "category.0",
      media: "imageFeatured"
    },
    prepare(selection) {
      const { title, category, media } = selection;

      return {
        title: title,
        subtitle: category,
        media: media ? media : ""
      };
    }
  },
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name",
      description: "Le nom du projet dans le back uniquement"
    },
    {
      name: "title",
      type: "localeString",
      title: "Title",
      description: "Description de la mission et du client, 80 caractères max."
      // validation: Rule => Rule.max(80).warning("Keep your titles short")
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug",
      description: "Au plus court, sans connecteurs logiques"
    },
    // {
    //   name: "localeSlug",
    //   type: "localeSlug",
    //   title: "localeSlug",
    //   description: "Au plus court, sans connecteurs logiques"
    // },
    {
      name: "client",
      type: "string",
      title: "Client",
      description: "Si le projet est perso, le nom du projet"
    },
    {
      title: "Category",
      name: "category",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: [
          { value: "work", title: "Work" },
          { value: "personal", title: "Perso" },
          { value: "pro-bono", title: "Pro bono" }
        ]
      }
    },
    {
      name: "dateDelivered",
      type: "date",
      title: "Date delivered"
    },
    {
      name: "projectUrl",
      type: "url",
      title: "Live project URL"
    },
    // {
    //   name: "projectImage",
    //   type: "image",
    //   title: "Project image"
    // },
    {
      name: "imageFeatured",
      type: "imageFeatured",
      title: "Project Image"
    }
  ]
};
