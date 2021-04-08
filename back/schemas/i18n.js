const languages = [
  { name: "fr", title: "Français", isDefault: true },
  { name: "en", title: "English" }
];
// const baseLanguage = languages[0];
const baseLanguage = languages.find(l => l.isDefault);

export { languages, baseLanguage };
// export default {
//   languages: {
//     query: '*[_type=="language"]{_id,name}',
//     // these are the object paths to get out of the results to use for name and title
//     // it is also possible to pass a simple string which will then be used for both title and name
//     value: {
//       title: "name",
//       name: "_id"
//     }
//   }
// };
