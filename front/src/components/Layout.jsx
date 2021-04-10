import React, { createContext, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./Header"
import Footer from "./Footer"
import Cursor from "./ui/Cursor"

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
  const settings = {
    test: "test",
  }

  useEffect(() => {
    _format()
    window.addEventListener("resize", _format)
    window.addEventListener("scroll", _format)
    // if (window.innerWidth < 1080 && "ontouchstart" in window) setIsMobile(true)

    return () => {
      window.removeEventListener("resize", _format)
      window.removeEventListener("scroll", _format)
    }
  }, [])

  const _format = () => {
    // console.log("format");
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

    document.documentElement.style.setProperty("--headerHeight", 50 + "px")

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
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
      {/* <Cursor /> */}
    </WrapperContext.Provider>
  )
}

export { WrapperContext, Layout }
