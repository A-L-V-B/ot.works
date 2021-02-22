import { graphql } from "gatsby"

//https://github.com/gatsbyjs/gatsby/blob/26582d31ab14f7bac6d5738e4245ceca2e6d411d/packages/gatsby-transformer-sharp/src/fragments.js#L6

export const query = graphql`
    fragment seo on SanitySeo{
        description
        image {
            asset {
                url
            }
        }
    }
    

    
`;
