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
      homeButton
      _rawContact
    }
  }
`

const Header = () => {
  const { sanityHeader } = useStaticQuery(query)

  return (
    <header>
      <div className="row">
        <div className="col-md-8 col-xs-7">
          <div>
            <h1 className="cartouche ">{sanityHeader.homeButton}</h1>
          </div>
        </div>
        <div className="col-md-3 hidden-sm">
          <div className="cartouche ">
            <div className="about">
              <PortableText blocks={sanityHeader._rawContact} />
            </div>
          </div>
        </div>
        <div className="col-md-1 hidden-sm">
          <div className="tar psa r0">
            <div className="cartouche">
              <LocaleSwitcher />
              <DarkMode />
            </div>
          </div>
        </div>
        <div className="col-xs-5 sm-only tar">
          <div className="cta-menu  cartouche">menu</div>
        </div>
      </div>

      {/* <Burger /> */}
    </header>
  )
}

export default Header
