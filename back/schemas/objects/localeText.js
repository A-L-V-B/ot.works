import { languages, baseLanguage } from "../i18n";

export default {
  name: "localeText",
  type: "object",
  title: "Localized string",
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
    type: "portableText",
    fieldset: lang.isDefault ? null : "translations"
  }))
};
