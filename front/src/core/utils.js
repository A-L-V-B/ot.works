import { useContext } from "react"
import { LocaleContext } from "../components/ui/LocaleWrapper"
// const locales = require("../../config/i18n")
import locales from "../../config/i18n"

export function fileNameByUrl(url) {
  const decoded = decodeURIComponent(url)
  return decoded.substring(decoded.lastIndexOf("/") + 1)
}

export const _getLocale = () => {
  const { localeCtx } = useContext(LocaleContext)
  return localeCtx
}

export function _localizeField(field) {
  // console.log(field)
  if (!field) return ""
  const locale = _getLocale()
  return field[locale]
}

export const _localizeText = (text) => {
  const locale = _getLocale()
  return locales[locale] && locales[locale][text] ? locales[locale][text] : text
}

export const _getHomeUrl = () => {
  const locale = _getLocale()
  return locales[locale].default ? `/` : `/${locales[locale]["path"]}`
}
