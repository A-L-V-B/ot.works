import { useContext } from "react"
import { LocaleContext } from "../components/ui/LocaleWrapper"
// const locales = require("../../config/i18n")
import locales from "../../config/i18n"
import createImageUrlBuilder from "@sanity/image-url"

export function fileNameByUrl(url) {
  const decoded = decodeURIComponent(url)
  return decoded.substring(decoded.lastIndexOf("/") + 1)
}

export const _getLocale = () => {
  const { localeCtx } = useContext(LocaleContext)
  return localeCtx
}

export function _localizeField(field) {
  if (!field) return ""
  const locale = _getLocale()
  return field[locale]
}

export function _localizeSlug(slug) {
  if (!slug) return ""
  const locale = _getLocale()
  return locale === "fr" ? slug[locale].current : "en/" + slug[locale].current
}

export const _localizeText = (text) => {
  const locale = _getLocale()
  return locales[locale] && locales[locale][text] ? locales[locale][text] : text
}

export const _getHomeUrl = () => {
  const locale = _getLocale()
  return locales[locale].default ? `/` : `/${locales[locale]["path"]}`
}

export const _unique = (value, index, self) => {
  return self.indexOf(value) === index
}

const imageBuilder = createImageUrlBuilder({
  projectId: "6hr2f37r",
  dataset: "production",
})

export const urlForImage = (source) =>
  imageBuilder.image(source).auto("format").fit("max")
