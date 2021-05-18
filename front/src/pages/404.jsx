import React from "react"
import { graphql } from "gatsby"
import Helmet from "react-helmet"
// import PortableText from "@sanity/block-content-to-react"
import Texte from "../components/modules/Texte"

export const query = graphql`
  query {
    settings: sanitySettings {
      message404 {
        fr: _rawFr(resolveReferences: { maxDepth: 10 })
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
          {/* <PortableText blocks={settings.message404.fr} /> */}
          <Texte input={{ text: settings.message404 }} />
        </div>
      </div>
    </div>
  )
}

export default Page404
