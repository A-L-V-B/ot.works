import React from "react";
import { graphql } from "gatsby";
import Seo from "../components/seo";
import Modules from "../components/modules";

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
      }
      _rawModules(resolveReferences: { maxDepth: 10 })
    }
  }
`;

const PageModulaire = ({ data }) => {
  // console.log(data.sanityPageModulaire)
  const { home, seo, _rawModules } = data.sanityPageModulaire;

  // useEffect(() => {}, [])

  return (
    <div className='page'>
      <Seo
        pageTitle={seo.metaTitle.fr}
        pageDescription={seo.metaDescription.fr}
        // pageImage={image_featured.url}
        template={`template-modulaire`}
        page={home}
      />

      {_rawModules && <Modules input={_rawModules.modules} />}
    </div>
  );
};

export default PageModulaire;
