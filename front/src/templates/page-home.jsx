import React from "react"
import { graphql } from "gatsby"
//import PubSub from 'pubsub-js';
//import cookie from 'react-cookies'
import SEO from "../components/seo"
import Modules from "../components/modules/"

class PageHome extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const { page } = this.props.data

    return (
      <div className="home">
        {/* <SEO
          pageTitle={page.title}
          pageDescription={page.seo ? page.seo.description : ''}
          pageImage={page.seo ? page.seo.image.asset.url : ''}
          template="template-home"
          page={false}
          // pathname={location.pathname}
          />  */}

        {/* <h1>{homepage.data.title.text}</h1> */}
        <h1>home</h1>
        {/* <Modules _rawContent={page._rawContent} /> */}
      </div>
    )
  }
}

export default PageHome

// export const pageQuery = graphql `
//   query HomePage {
//     page: sanityPage(isHome: {eq: true}) {
//       title
//       seo{
//         ...seo
//       }
//       _rawContent(resolveReferences: {maxDepth: 10})
//     }
//   }
// `
