import React from "react"
import { graphql } from "gatsby"
//import PubSub from 'pubsub-js';
//import cookie from 'react-cookies'
import SEO from "../components/seo"
import Modules from "../components/modules/"

class PageDefault extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    // const { page } = this.props.data
    // console.log(page)
    return (
      <div className="page">
        {/* <SEO
          pageTitle={page.title}
          pageDescription={page.seo ? page.seo.description : ''}
          pageImage={page.seo ? page.seo.image.asset.url : ''}
          template="template-default"
          page={true}
          // pathname={location.pathname}
          />  */}

        {/* <h1>{page.title}</h1> */}
        {/* <Modules _rawContent={page._rawContent} /> */}
      </div>
    )
  }
}

export default PageDefault

// export const pageQuery = graphql `
//   query PageBySlug($slug: String!) {
//     page: sanityPage(slug: {current: {eq: $slug}}) {
//       title
//       seo{
//         ...seo
//       }
//       _rawContent(resolveReferences: {maxDepth: 10})
//     }
//   }
// `
