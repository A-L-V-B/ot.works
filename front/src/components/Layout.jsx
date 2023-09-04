import React, { createContext, useState, useEffect } from "react"
import smartquotes from "smartquotes"
// import { useStaticQuery, graphql } from "gatsby"
import Header from "./Header"
import Footer from "./Footer"
// import Cursor from "./ui/Cursor"

const WrapperContext = createContext()

// const query = graphql`
//   query {
//     siteBuildMetadata {
//       buildTime
//     }
//   }
// `

const Layout = ({ children, pageContext: { template } }) => {
  // const { siteBuildMetadata } = useStaticQuery(query)
  const [direction, setDirection] = useState()

  const settings = {
    test: "test",
  }

  useEffect(() => {
    smartquotes().listen()
  }, [])

  useEffect(() => {
    _onScroll()
    _format()
    window.addEventListener("scroll", _onScroll)
    window.addEventListener("resize", _format)
    // if (window.innerWidth < 1080 && "ontouchstart" in window) setIsMobile(true)

    return () => {
      window.removeEventListener("scroll", _onScroll)
      window.removeEventListener("resize", _format)
    }
  }, [])

  let _prevScrollTop = 0
  const _onScroll = () => {
    window.pageYOffset > _prevScrollTop
      ? setDirection("down")
      : setDirection("up")

    if (window.pageYOffset < 10) {
      setDirection("")
    }

    _prevScrollTop = window.pageYOffset
  }
  const _format = () => {
    // const ww = window.innerWidth;
    // const wh = window.innerHeight;
    document.documentElement.style.setProperty(
      "--appHeight",
      window.innerHeight + "px"
    )

    // const headerBounding = document
    //   .querySelector("header")
    //   .getBoundingClientRect()
    // if (headerBounding.height > 56) headerBounding.height = 56

    document.documentElement.style.setProperty(
      "--headerHeightMobile",
      54 + "px"
    )

    const md1Bounding = document
      .querySelector("header .col-md-1")
      .getBoundingClientRect()
    if (md1Bounding.width > 180) md1Bounding.width = 180
    document.documentElement.style.setProperty(
      "--md1",
      md1Bounding.width + "px"
    )
  }

  return (
    <WrapperContext.Provider value={{ settings }}>
      <div id="page">
        <Header direction={direction} />
        <main>{children}</main>
        <Footer />
      </div>
      {/* <Cursor /> */}
    </WrapperContext.Provider>
  )
}

export { WrapperContext, Layout }
