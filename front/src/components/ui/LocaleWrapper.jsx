import React, { createContext } from "react"
import { useState } from "react"

const LocaleContext = createContext()

const LocaleWrapper = ({ children, pageContext }) => {
  const { locale = "fr" } = pageContext
  // console.log(locale)
  const [localeCtx, dispatch] = useState(locale)
  // console.log(localeCtx)
  return (
    <LocaleContext.Provider value={{ localeCtx, dispatch }}>
      {children}
    </LocaleContext.Provider>
  )
}

// export default LocaleWrapper;
export { LocaleContext, LocaleWrapper }
