import React from "react"
import { graphql } from "gatsby"
import Seo from "../components/seo"
import Modules from "../components/modules"
import { _localizeField } from "../core/utils"

export const query = graphql`
  query PageBySlug($slug: String!) {
    sanityPageModulaire(slug: { current: { eq: $slug } }) {
      home
      title
      seo {
        metaTitle {
          fr
          en
        }
        metaDescription {
          fr
          en
        }
        posterImage {
          asset {
            url
          }
        }
      }
      _rawModules(resolveReferences: { maxDepth: 10 })
    }
  }
`

const PageModulaire = ({ data }) => {
  console.log(data.sanityPageModulaire)
  const { home, seo, _rawModules } = data.sanityPageModulaire

  // useEffect(() => {}, [])

  return (
    <div className="page">
      <Seo
        pageTitle={_localizeField(seo.metaTitle)}
        pageDescription={_localizeField(seo.metaDescription)}
        pageImage={seo.posterImage?.asset?.url}
        template={`template-modulaire`}
        page={home}
      />

      {_rawModules && <Modules input={_rawModules.modules} />}
    </div>
  )
}

export default PageModulaire
