import S from '@sanity/desk-tool/structure-builder'
// import MdSettings from 'react-icons/lib/md/settings'
import {
  MdEdit,
  MdRemoveRedEye,
  // MdPerson,
  // MdDescription,
  // MdLocalOffer
} from 'react-icons/lib/md'
import IframePreview from '../previews/front/index'
import SeoPreview from '../previews/seo/index'

// Web preview configuration
const remoteURL = 'https://jadhussein.netlify.app/'
const localURL = 'http://localhost:8000'
const previewURL =
  window.location.hostname === 'localhost' 
  ? localURL+"/project" 
  : remoteURL+"/project"

/**
 * This defines how documents are grouped and listed out in the Studio.
 * Relevant documentation:
 * - https://www.sanity.io/guides/getting-started-with-structure-builder
 * - https://www.sanity.io/docs/structure-builder-introduction
 * - https://www.sanity.io/docs/structure-builder-typical-use-cases
 * - https://www.sanity.io/docs/structure-builder-reference
 */

export default () =>
  S.list()
    .title('Content')
    .items([
      
      // S.listItem()
      //   .title('Pages')
      //   .icon(MdDescription)
      //   .schemaType('page')
      //   .child(S.documentTypeList('page').title('Pages')),
      
      S.divider(),

      S.listItem()
        .title('Projects')
        .schemaType('project')
        .child(
          S.documentTypeList('project')
            .title('Projects')
            .child(documentId =>
              S.document()
                .documentId(documentId)
                .schemaType('project')
                .views([
                  S.view.form().icon(MdEdit),
                  S.view
                    .component(IframePreview)
                    .icon(MdRemoveRedEye)
                    .title('Web Preview')
                    .options({ previewURL }),
                  S.view
                    .component(SeoPreview)
                    .icon(MdRemoveRedEye)
                    .title('SEO Preview')
                    .options({ previewURL })
                ])
            )
        ),
      
        S.divider(),
      // `S.documentTypeListItems()` returns an array of all the document types
      // defined in schema.js. We filter out those that we have
      // defined the structure above.
      ...S.documentTypeListItems().filter(
        listItem =>
          !['project'].includes(
            listItem.getId()
          )
      )
    ])
