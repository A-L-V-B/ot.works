// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

import settings from "./documents/settings";
import lang from "./documents/lang";
import project from "./documents/project";
import page from "./documents/page";
import pageModulaire from "./documents/pageModulaire";
import header from "./documents/header";
import footer from "./documents/footer";
import menu from "./documents/menu";

import seo from "./objects/seo";
import localeString from "./objects/localeString";
import simplePortableText from "./objects/simplePortableText";
import portableText from "./objects/portableText";
import portableTextFull from "./objects/portableTextFull";
import imageFeatured from "./objects/imageFeatured";
import images from "./objects/images";
import titleTexte from "./objects/titleTexte";
import internalLink from "./objects/internalLink";
import texteUI from "./modules/texteUI";
import textesUI from "./modules/textesUI";
import imageUI from "./modules/imageUI";
import imagesUI from "./modules/imagesUI";
import texteImagesUI from "./modules/texteImagesUI";
import textesImagesUI from "./modules/textesImagesUI";
import texteListUI from "./modules/texteListUI";
import projectListUI from "./modules/projectListUI";

import pageModules from "./modules/pageModules";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    lang,
    settings,
    menu,
    header,
    footer,
    project,
    page,
    pageModulaire,
    seo,
    localeString,
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
    pageModules
  ])
});
