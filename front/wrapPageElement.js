/* eslint react/prop-types: 0, react/display-name: 0 */
import React from "react"
import Helmet from "react-helmet"
import { Layout } from "./src/components/Layout"
import { LocaleWrapper } from "./src/components/ui/LocaleWrapper"
// import { withPrefix } from 'gatsby'
// const wrapPageElement = ({ element, props }) => <Layout {...props}>{element}</Layout>

// export default wrapPageElement

const _wrapRootElement = ({ element }) => {
  return (
    <>
      {/* <Helmet>
        <script src="https://unpkg.com/pace-js@1.0.2/pace.min.js"></script>
      </Helmet> */}
      {element}
    </>
  )
}

const _wrapPageElement = ({ element, props }) => {
  return (
    <LocaleWrapper {...props}>
      <Layout {...props}>{element}</Layout>
    </LocaleWrapper>
  )
}

const _onClientEntry = () => {
  // callAnalyticsAPI()
  const isTouch = "ontouchstart" in window ? true : false

  if (isTouch) {
    document.documentElement.classList.add("touch")
  } else {
    document.documentElement.classList.add("no-touch")
  }
}

const _onRouteUpdate = ({ location }) => {
  PubSub.publish("ROUTE_UPDATE")
}

export { _wrapRootElement, _wrapPageElement, _onClientEntry, _onRouteUpdate }
