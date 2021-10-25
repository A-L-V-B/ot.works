import React, { createContext, useEffect, useState } from "react"

const LocaleContext = createContext()

const LocaleWrapper = ({ children, pageContext }) => {
  const { locale = "fr" } = pageContext
  // console.log(pageContext)
  const [localeCtx, dispatch] = useState(locale)
  // console.log(localeCtx)

  useEffect(() => {
    const userLang = _detectUserLang()
    console.log("userLang:", userLang)
    dispatch(userLang)
  }, [])

  const _detectUserLang = () => {
    const userLang = navigator.language || navigator.userLanguage
    // console.log(userLang)
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
