import React, { useContext } from "react"
import { LocaleContext } from "../components/ui/LocaleWrapper"
// const locales = require("../../config/i18n")
import locales from "../../config/i18n"

export function fileNameByUrl(url) {
  const decoded = decodeURIComponent(url)
  return decoded.substring(decoded.lastIndexOf("/") + 1)
}

export function _localizeField(field) {
  const { localeCtx, dispatch } = useContext(LocaleContext)
  return field[localeCtx]
}

export const _localizeText = (text) => {
  const { localeCtx, dispatch } = useContext(LocaleContext)
  // console.log(locales[localeCtx])
  // console.log("locale", localeCtx, text)
  return locales[localeCtx] && locales[localeCtx][text]
    ? locales[localeCtx][text]
    : text
}

export const _gethomeUrl = () => {
  const { localeCtx, dispatch } = useContext(LocaleContext)
  return locales[localeCtx].default ? `/` : `/${locales[localeCtx]["path"]}`
}
