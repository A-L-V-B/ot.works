import React, { useContext, useState } from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import clsx from "clsx"

import PortableText from "@sanity/block-content-to-react"
import LocaleSwitcher from "./ui/LocaleSwitcher"
import DarkMode from "./ui/DarkMode"
import Menu from "./Menu"
import { _gethomeUrl } from "../core/utils"

const query = graphql`
  query {
    sanityHeader {
      homeButton
      _rawContact
      nav {
        label
        link {
          _type
          slug {
            current
          }
        }
      }
    }
  }
`

const Header = () => {
  const { sanityHeader } = useStaticQuery(query)
  const { homeButton, _rawContact, nav } = sanityHeader

  const [smMenuActive, setSmMenuActive] = useState(false)

  return (
    <header className={clsx(smMenuActive ? "is-active" : "")}>
      <div className="row">
        <div className="col-md-8 col-xs-7">
          <div className="col-left x">
            <div>
              <h1 className="cartouche home-button">
                <Link to={_gethomeUrl()}>{homeButton}</Link>
              </h1>
            </div>
            <div className="hidden-sm">
              <Menu input={nav} />
            </div>
          </div>
        </div>
        <div className="col-md-3 hidden-sm">
          <div className="cartouche ">
            <div className="contact">
              <PortableText blocks={_rawContact} />
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
        <div className="col-xs-5 sm-only ">
          <div
            className="sm-menu-cta  tar curp"
            onClick={() => setSmMenuActive(!smMenuActive)}
          >
            <div className="cartouche ">menu</div>
          </div>
          <div className="sm-menu">
            <Menu input={nav} />
            <div className="contact">
              <PortableText blocks={sanityHeader._rawContact} />
            </div>
            <div className="tar psa r0 b0 bottom-right">
              <div className="cartouche">
                <LocaleSwitcher />
                <DarkMode />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <Burger /> */}
    </header>
  )
}

export default Header
