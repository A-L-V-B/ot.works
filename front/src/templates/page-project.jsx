import React, { Component } from 'react';
import { graphql } from "gatsby"
// import Img from "gatsby-image"
//import PubSub from 'pubsub-js';
import SEO from '../components/seo'


class PageProject extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    // const {
    //   title,
    //   texte
    // } = this.props.data.project.data
   
    return (
      <div className="project">
        {/* <SEO
          pageTitle={title}
          pageDescription={texte.text}
          page={true}
          template="template-project"
          />  */}

        {/* <h1>{title.text}</h1>
        <div 
        className="texte"
        dangerouslySetInnerHTML={{ __html: texte.html }}></div> */}
        <h1>project</h1>
      </div>
    );
  }
}

export default PageProject;

// export const pageQuery = graphql `
//   query ProjectBySlug($uid: String!) {
//     project: prismicProject(uid: { eq: $uid }) {
//       data{
//         ...projet
//       }
//     }
//   }
// `