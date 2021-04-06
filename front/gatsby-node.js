const path = require("path")
const i18n = require("./config/i18n")

// const templateZones = path.resolve("src/templates/zones.jsx")
// const templateZone = path.resolve("src/templates/zone.jsx")
// const templateHome = path.resolve("src/templates/home.jsx")
// const templateDefault = path.resolve("src/templates/default.jsx")
const templateModulaire = path.resolve("src/templates/modulaire.jsx")

const getLocalizedPath = (node, path) => {
  // console.log(path, node.locale)
  return i18n[node.locale].default ? path : `/${i18n[node.locale].path}${path}`
}

// const getTemplate = (template) => {
//   switch (template) {
//     case "zones":
//       return templateZones
//     // case "zone": return templateZone
//     case "default":
//       return templateDefault
//     case "home":
//       return templateHome
//     default:
//       return templateDefault
//   }
// }

/// /////////////////////////////////////////////////////////////
/// /////////////////////////////////////////////////////////////
// async function createAllPages(graphql, actions) {
//   const { createPage } = actions
//   const result = await graphql(`
//     {
//       allSanityPage {
//         nodes {
//           _id
//           locale
//           title
//           template
//           slug {
//             current
//           }
//         }
//       }
//     }
//   `)
//   if (result.errors) throw result.errors

//   const pages = (result.data.allSanityPage || {}).nodes || []
//   pages.forEach((edge, index) => {
//     // console.log(JSON.stringify(edge))
//     const { _id, locale, template, slug = {} } = edge
//     // const locale = getLocale(_id)
//     // console.log(slug.current)
//     // console.log(locale)
//     const _template = template[0]

//     const path = _template === `home` ? `/` : `/${slug.current}`
//     const localizedPath = getLocalizedPath(edge, path)
//     console.log(localizedPath)

//     createPage({
//       path: localizedPath,
//       component: getTemplate(_template),
//       context: {
//         slug: slug.current,
//         template: _template,
//         locale: locale,
//       },
//     })
//   })
// }

/// /////////////////////////////////////////////////////////////
/// /////////////////////////////////////////////////////////////
async function createAllPagesModulaire(graphql, actions) {
  const { createPage } = actions
  const result = await graphql(`
    {
      allSanityPageModulaire {
        nodes {
          id
          locale
          home
          slug {
            current
          }
        }
      }
    }
  `)
  if (result.errors) throw result.errors

  const pages = (result.data.allSanityPageModulaire || {}).nodes || []
  pages.forEach((edge, index) => {
    // console.log(JSON.stringify(edge))
    const { id, locale, home, slug = {} } = edge

    const path = home ? `/` : `/${slug.current}`
    // const localizedPath = getLocalizedPath(edge, path)
    // console.log(localizedPath)
    createPage({
      path: path,
      component: templateModulaire,
      context: {
        // id: id,
        slug: slug.current,
        template: "modulaire",
        locale: locale,
      },
    })
  })
}

exports.createPages = async ({ graphql, actions }) => {
  await createAllPagesModulaire(graphql, actions)
}
