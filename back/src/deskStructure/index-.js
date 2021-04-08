import S from "@sanity/desk-tool/structure-builder";
// import * as I18nS from "sanity-plugin-intl-input/lib/structure";
// import { i18n } from "../schemas/i18n";
// import { i18n } from "../schemas/documentTranslation";

import { FaEdit, FaEye } from "react-icons/fa";

// Web preview configuration
import IframePreview from "./previews/front/index";
import SeoPreview from "./previews/seo/index";

const remoteURL = "https://otworks.netlify.app/";
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
    .items([
      S.listItem()
        .title("Pages Modulaire")
        .schemaType("pageModulaire")
        .child(
          S.documentTypeList("pageModulaire")
            .title("Pages Modulaire")
            .child(documentId =>
              S.document()
                .documentId(documentId)
                .schemaType("pageModulaire")
                .views([
                  S.view.form().icon(FaEye),
                  S.view
                    .component(IframePreview)
                    .icon(FaEye)
                    .title("Web Preview")
                    .options({ previewURL }),
                  S.view
                    .component(SeoPreview)
                    .icon(FaEye)
                    .title("SEO Preview")
                    .options({ previewURL })
                ])
            )
        ),
      S.divider(),
      ...S.documentTypeListItems().filter(
        listItem =>
          !["pageModulaire", "settings", "header", "menu", "footer"].includes(
            listItem.getId()
          )
      ),
      S.divider(),
      S.listItem()
        .title("Globals")
        .child(
          S.list()
            .id("globals-level")
            .title("Globals")
            .items([
              S.documentTypeListItem("settings"),
              S.documentTypeListItem("header"),
              S.documentTypeListItem("menu"),
              S.documentTypeListItem("footer")
            ])
        ),
      S.divider()
    ]);
