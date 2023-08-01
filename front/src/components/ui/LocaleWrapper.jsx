import React, { createContext, useEffect, useState } from "react"

const LocaleContext = createContext()

const LocaleWrapper = ({ children, pageContext }) => {
  const { locale = "fr" } = pageContext
  const [localeCtx, dispatch] = useState(locale)

  useEffect(() => {
    const userLang = _detectUserLang()
    dispatch(userLang)
  }, [])

  const _detectUserLang = () => {
    if (pageContext.locale) return pageContext.locale.slice(0, 2)
    const userLang = navigator.language || navigator.userLanguage
    return userLang.toLowerCase().indexOf("fr") === -1 ? "en" : "fr"
  }

  return (
    <LocaleContext.Provider value={{ localeCtx, dispatch }}>
      {children}
    </LocaleContext.Provider>
  )
}

// export default LocaleWrapper;
export { LocaleContext, LocaleWrapper }
