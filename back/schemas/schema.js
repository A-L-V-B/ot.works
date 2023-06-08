import settings from './documents/settings'
import lang from './documents/lang'
import project from './documents/project'
import pageModulaire from './documents/pageModulaire'
import header from './documents/header'
import footer from './documents/footer'
// import menu from "./documents/menu";

import seo from './objects/seo'
import localeString from './objects/localeString'
import localeText from './objects/localeText'
import localeTextShort from './objects/localeTextShort'
import localeSlug from './objects/localeSlug'
import simplePortableText from './objects/simplePortableText'
import portableText from './objects/portableText'
import portableTextFull from './objects/portableTextFull'
import imageFeatured from './objects/imageFeatured'
import images from './objects/images'
import titleTexte from './objects/titleTexte'
import internalLink from './objects/internalLink'
import texteUI from './modules/texteUI'
import textesUI from './modules/textesUI'
import imageUI from './modules/imageUI'
import imagesUI from './modules/imagesUI'
import texteImagesUI from './modules/texteImagesUI'
import textesImagesUI from './modules/textesImagesUI'
import texteListUI from './modules/texteListUI'
import projectListUI from './modules/projectListUI'
import pageModules from './modules/pageModules'
import collaboration from './documents/collaboration'

export const schemaTypes = [
  lang,
  settings,
  // menu,
  header,
  footer,
  project,
  collaboration,

  pageModulaire,

  seo,
  localeString,
  localeText,
  localeTextShort,
  localeSlug,
  simplePortableText,
  portableText,
  portableTextFull,
  imageFeatured,
  images,
  titleTexte,
  internalLink,
  texteUI,
  textesUI,
  imageUI,
  imagesUI,
  texteImagesUI,
  textesImagesUI,
  texteListUI,
  projectListUI,
  pageModules,
]
