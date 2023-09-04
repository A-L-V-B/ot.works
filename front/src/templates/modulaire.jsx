import React from "react"
import { graphql } from "gatsby"
import Seo from "../components/seo"
import Modules from "../components/modules"
import { _localizeField } from "../core/utils"

export const query = graphql`
  {
    allSanityPageModulaire {
      nodes {
        home
        title
        slug {
          fr {
            current
          }
          en {
            current
          }
        }
        seo {
          metaTitle {
            fr
            en
          }
          metaDescription {
            fr
            en
          }
          metaImage {
            fr {
              asset {
                url
              }
            }
            en {
              asset {
                url
              }
            }
          }
        }
        _rawModules(resolveReferences: { maxDepth: 80 })
      }
    }
  }
`

const PageModulaire = ({ data, pageContext }) => {
  const { nodes } = data.allSanityPageModulaire

  const page = nodes.find(
    (el) => el.slug[pageContext.locale].current === pageContext.slug
  )

  const { home, seo, _rawModules } = page

  return (
    <div className="page">
      <Seo
        pageTitle={_localizeField(seo.metaTitle)}
        pageDescription={_localizeField(seo.metaDescription)}
        pageImage={_localizeField(seo.metaImage).asset?.url}
        template={`template-modulaire`}
        page={home}
      />

      {_rawModules && <Modules input={_rawModules.modules} />}
    </div>
  )
}

export default PageModulaire
