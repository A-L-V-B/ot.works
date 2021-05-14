import React from "react"
import { graphql } from "gatsby"
import Helmet from "react-helmet"
import PortableText from "@sanity/block-content-to-react"

export const query = graphql`
  query {
    settings: sanitySettings {
      message404 {
        en: _rawEn(resolveReferences: { maxDepth: 10 })
        # en: _rawEn(resolveReferences: { maxDepth: 10 })
      }
    }
  }
`

const Page404 = (props) => {
  console.log(props.data)
  const { settings } = props.data

  return (
    <div className="page-404 ">
      <Helmet>
        <body className={"template-404"} />
      </Helmet>
      <div className="container-fluid">
        <div className="texte">
          <PortableText blocks={settings.message404.en} />
        </div>
      </div>
    </div>
  )
}

export default Page404
