import React, { createContext, useEffect, useState } from "react"

const LocaleContext = createContext()

const LocaleWrapper = ({ children, pageContext }) => {
  const { locale = "fr" } = pageContext
  // console.log(pageContext)
  const [localeCtx, dispatch] = useState(locale)
  // console.log(localeCtx)

  useEffect(() => {
    const userLang = _detectUserLang()
    dispatch(userLang)
  }, [])

  const _detectUserLang = () => {
    const userLang = navigator.language || navigator.userLanguage
    // console.log(userLang)
    return userLang !== "fr" ? "en" : "fr"
  }

  return (
    <LocaleContext.Provider value={{ localeCtx, dispatch }}>
      {children}
    </LocaleContext.Provider>
  )
}

// export default LocaleWrapper;
export { LocaleContext, LocaleWrapper }
