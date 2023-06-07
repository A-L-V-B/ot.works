import { languages, baseLanguage } from "../i18n";

export default {
  name: "localeTextShort",
  type: "object",
  title: "Localized text short",
  fieldsets: [
    {
      title: "Translations",
      name: "translations"
      // options: { collapsible: true }
    }
  ],
  fields: languages.map(lang => ({
    title: lang.title,
    name: lang.name,
    type: "text",
    rows: 3
  }))
};
