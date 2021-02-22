import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./Header"
import Footer from "./Footer"

const WrapperContext = React.createContext()

const Layout = ({ children, pageContext: { template } }) => {
  // const { options } = useStaticQuery(query)

  return (
    // <WrapperContext.Provider value={{ options }}>
    <WrapperContext.Provider>
      <div id="page">
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </WrapperContext.Provider>
  )
}

export { WrapperContext, Layout }

// const query = graphql`
//     query {
//         # options: prismicOptions {
//         #     ..._prismicOptions
//         # }
//     }
// `
