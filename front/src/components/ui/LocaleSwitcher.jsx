import React, { useContext } from "react"
import { Link } from "gatsby"
// import PubSub from "pubsub-js"

import { LocaleContext } from "./LocaleWrapper"
const locales = require("../../../config/i18n")

const LocaleSwitcher = () => {
  const _LocaleContext = useContext(LocaleContext)
  const { localeCtx, dispatch } = _LocaleContext
  // console.log(_LocaleContext)

  // const _WrapperContext = useContext(WrapperContext)
  // const { locale } = _WrapperContext || "fr-FR"

  const renderLanguages = () => {
    // const { nav } = this.state
    // const { locale } = this.props
    // locales.splice(2, 1)
    // console.log(locales)
    const languages = Object.values(locales).map((li, key) => {
      const _className = li.locale === localeCtx ? "active" : ""
      const path = li.default ? `/` : `/${li.path}`

      //Hide IT from menu
      // if(li.path === 'it')return null
      return (
        <li key={key} className={_className}>
          <Link
            to={path}
            className={_className + " ttu"}
            onClick={() => dispatch(li.locale)}
          >
            {li.label}
          </Link>
        </li>
      )
    })
    return languages
  }

  return <ul className="language-switcher ">{renderLanguages()}</ul>
}

export default LocaleSwitcher
