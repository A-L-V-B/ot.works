import React, { useEffect, useMemo } from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import Modules from "../components/modules"

export const query = graphql`
  query PageBySlug($slug: String!) {
    sanityPageModulaire(slug: { current: { eq: $slug } }) {
      title
      seo {
        titleTag
        metaDescription
      }
      _rawModules(resolveReferences: { maxDepth: 10 })
      # modules {
      #   modules {
      #     ... on SanityTexteUI {
      #       _rawText
      #     }
      #     ... on SanityProjectListUI {
      #       _type
      #       listTitle
      #       listedProjects {
      #         client
      #         title
      #         projectUrl
      #         projectImage {
      #           asset {
      #             url
      #           }
      #         }
      #         dateDelivered
      #       }
      #     }
      #     ... on SanityTexteListUI {
      #       _type
      #       title
      #       liste {
      #         _rawTexte
      #       }
      #     }
      #   }
      # }
    }
  }
`

const PageModulaire = ({ data }) => {
  // console.log(data)
  const { title, seo, _rawModules } = data.sanityPageModulaire

  // useEffect(() => {}, [])

  return (
    <div className="page">
      <SEO
        pageTitle={seo.titleTag}
        pageDescription={seo.metaDescription}
        // pageImage={image_featured.url}
        template={`template-modulaire`}
        page={true}
      />

      {_rawModules && <Modules input={_rawModules.modules} />}
    </div>
  )
}

export default PageModulaire
