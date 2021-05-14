import React, { useEffect, useState } from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import clsx from "clsx"

import PortableText from "@sanity/block-content-to-react"
import LocaleSwitcher from "./ui/LocaleSwitcher"
import DarkMode from "./ui/DarkMode"
import Menu from "./Menu"
import { _getHomeUrl } from "../core/utils"

const query = graphql`
  query {
    sanityHeader {
      homeButton
      nav {
        label {
          fr
          en
        }
        link {
          _type
          slug {
            current
          }
        }
      }
      # nav: _rawNav(resolveReferences: { maxDepth: 2 })
      _rawContact
    }
  }
`

const Header = ({ direction }) => {
  const { sanityHeader } = useStaticQuery(query)
  const { homeButton, _rawContact, nav } = sanityHeader

  const [smMenuActive, setSmMenuActive] = useState(false)
  const [windowLoaded, setWindowLoaded] = useState(false)

  useEffect(() => {
    setWindowLoaded(true)
  }, [])
  useEffect(() => {
    const btns = document.querySelectorAll(".sm-menu a, .sm-menu button")

    if (smMenuActive) {
      btns.forEach((el) => {
        el.addEventListener("click", _menuClose)
      })
    } else {
      btns.forEach((el) => _menuClose)
    }

    return () => {
      btns.forEach((el) => _menuClose)
    }
  }, [smMenuActive])

  const _menuClose = () => setSmMenuActive(false)

  return (
    <header className={clsx(direction, smMenuActive ? "is-active" : "")}>
      <div className="row no-gutter">
        <div className="col-md-4 col-xs-7">
          <div className="col-left x xjb">
            <div>
              <h1 className="cartouche home-button">
                <Link to={_getHomeUrl()}>{homeButton}</Link>
              </h1>
            </div>
            <div className="hidden-sm">
              <Menu input={nav} />
            </div>
          </div>
        </div>
        <div className="col-md-4"></div>
        <div className="col-md-3 hidden-sm">
          <div className="cartouche ">
            <div className="contact">
              {windowLoaded && <PortableText blocks={_rawContact} />}
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
          <button
            className="sm-menu-cta  tar curp"
            onClick={() => setSmMenuActive(!smMenuActive)}
          >
            <div className="cartouche ">menu</div>
          </button>
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
