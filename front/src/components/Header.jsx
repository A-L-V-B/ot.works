import React, { useContext } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"
import Img from "gatsby-image"
// import { WrapperContext } from './Layout';
import Burger from "./UI/Burger"

const Header = () => {
  // const _WrapperContext = useContext(WrapperContext)
  // const { options } = _WrapperContext
  //   const { header } = useStaticQuery(query)
  //   const { logo, nav } = header

  return (
    <header>
      header
      {/* <div className="row">
        <div className="col-xs">
          <Link to="/">
            <Img
              fluid={logo.asset.fluid}
              alt="logo"
              style={{
                maxWidth: "200px",
                maxHeight: 200 / logo.asset.fluid.aspectRatio,
              }}
            />
          </Link>
        </div>
        <div className="col-xs">
          <nav>
            <ul className="x xje">
              {nav.map(({ link }, i) => (
                <li key={i}>
                  <Link to={link.slug.current}>{link.title}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div> */}
      <Burger />
    </header>
  )
}

export default Header

// const query = graphql`
//   query {
//     header: sanityHeader {
//       logo {
//         asset {
//           url
//           fluid(maxWidth: 700) {
//             ...GatsbySanityImageFluid
//           }
//         }
//       }
//       nav {
//         link {
//           title
//           slug {
//             current
//           }
//         }
//       }
//     }
//   }
// `
