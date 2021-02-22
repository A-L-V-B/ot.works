// export default [
//   { name: 'fr', title: 'Français' },
//   { name: 'en', title: 'English' }
// ]
export default {
  languages: {
    query: '*[_type=="lang"]{title,name} | order(default)',
    // these are the object paths to get out of the results to use for name and title
    // it is also possible to pass a simple string which will then be used for both title and name
    value: {
      title: 'title',
      name: 'name'
    }
  },
  fieldNames : {
    lang: 'locale'
  }
}