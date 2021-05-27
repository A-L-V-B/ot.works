import S from "@sanity/desk-tool/structure-builder";
// import * as I18nS from "sanity-plugin-intl-input/lib/structure";
// import { i18n } from "../schemas/i18n";
// import { i18n } from "../schemas/documentTranslation";

import { FaEdit, FaEye } from "react-icons/fa";
import {
  FiFolder,
  FiSettings,
  FiDatabase,
  FiArrowUp,
  FiArrowDown,
  FiGlobe,
  FiFileText,
  FiEdit,
  FiEye
} from "react-icons/fi";

// Web preview configuration
import IframePreview from "./previews/front/index";
import SeoPreview from "./previews/seo/index";

const remoteURL = "https://preview-otworks.gtsb.io";
const localURL = "http://localhost:8000";
const previewURL =
  window.location.hostname === "localhost" ? localURL + "/" : remoteURL + "/";

// export const getDefaultDocumentNode = props => {
//   if (props.schemaType === "pageModulaire") {
//     return S.document().views(
//       I18n.getDocumentNodeViewsForSchemaType(props.schemaType)
//     );
//   }
//   return S.document();
// };

export default () =>
  S.list()
    .title("Content")
    // .icon(FiGlobe)
    .items([
      S.listItem()
        .title("Pages")
        .schemaType("pageModulaire")
        .icon(FiFolder)
        .child(
          S.documentTypeList("pageModulaire")
            .title("Pages")
            // .icon(FiFileText)

            .child(documentId =>
              S.document()
                .documentId(documentId)
                .schemaType("pageModulaire")
                .views([
                  S.view.form().icon(FiEdit),
                  S.view
                    .component(IframePreview)
                    .icon(FiEye)
                    .title("Web")
                    .options({ previewURL }),
                  S.view
                    .component(SeoPreview)
                    .icon(FiEye)
                    .title("SEO")
                    .options({ previewURL })
                ])
            )
        ),
      // S.divider(),

      S.listItem()
        .title("Projects")
        .schemaType("project")
        .icon(FiDatabase)
        .child(S.documentTypeList("project").title("Projects")),

      // ...S.documentTypeListItems().filter(
      //   listItem =>
      //     ![
      //       "pageModulaire",
      //       "settings",
      //       // "header",
      //       "project"
      //       // "footer",
      //       // "lang"
      //     ].includes(listItem.getId())
      // ),
      S.divider(),

      S.listItem()
        .title("Settings")
        .icon(FiSettings)
        .child(
          S.list()
            .id("settings-level")
            .title("Settings")
            .items([
              S.listItem()
                .title("Global content")
                .icon(FiGlobe)
                .child(
                  S.editor()
                    .id("settings")
                    .schemaType("settings")
                    .documentId("settings")
                ),
              S.listItem().title("Header").icon(FiArrowUp).child(
                S.editor()
                  .id("header")
                  .schemaType("header")
                  .documentId("header")
                // .icon(FiArrowUp)
              ),
              S.listItem().title("Footer").icon(FiArrowDown).child(
                S.editor()
                  .id("footer")
                  .schemaType("footer")
                  .documentId("footer")
                //
              )
              // S.documentTypeListItem("settings"),
              // S.documentTypeListItem("header"),
              // S.documentTypeListItem("footer")
            ])
        ),
      S.divider()
    ]);
