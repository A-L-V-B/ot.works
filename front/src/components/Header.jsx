import React, { useContext } from "react"
import { graphql, useStaticQuery } from "gatsby"
// import { Link } from "gatsby"
// import Img from "gatsby-image"
// import { WrapperContext } from './Layout';

import PortableText from "@sanity/block-content-to-react"
import LocaleSwitcher from "./ui/LocaleSwitcher"
import DarkMode from "./ui/DarkMode"

const query = graphql`
  query {
    sanityHeader {
      title
      _rawAbout
    }
  }
`

const Header = () => {
  const { sanityHeader } = useStaticQuery(query)

  return (
    <header>
      <div className="row">
        <div className="col-md-8">
          <h1>{sanityHeader.title}</h1>
        </div>
        <div className="col-md-3">
          <div className="about">
            <PortableText blocks={sanityHeader._rawAbout} />
          </div>
        </div>
        <div className="col-md-1">
          <div className="tar psa r0">
            <LocaleSwitcher />
            <DarkMode />
          </div>
        </div>
      </div>

      {/* <Burger /> */}
    </header>
  )
}

export default Header
