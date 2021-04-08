import { languages, baseLanguage } from "../i18n";

export default {
  name: "localeSlug",
  type: "object",
  title: "Localized slug",
  fieldsets: [
    {
      title: "Translations",
      name: "translations",
      options: { collapsible: true }
    }
  ],
  fields: languages.map(lang => ({
    title: lang.title,
    name: lang.name,
    type: "slug",
    fieldset: lang.isDefault ? null : "translations"
  }))
};
