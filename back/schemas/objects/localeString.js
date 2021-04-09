import { languages, baseLanguage } from "../i18n";

export default {
  name: "localeString",
  type: "object",
  title: "Localized string",
  // fieldsets: [
  //   {
  //     title: "Translations",
  //     name: "translations"
  //     options: { collapsible: false }
  //   }
  // ],
  fields: languages.map(lang => ({
    title: lang.title,
    name: lang.name,
    type: "string"
    // fieldset: lang.isDefault ? null : "translations"
  }))
};
