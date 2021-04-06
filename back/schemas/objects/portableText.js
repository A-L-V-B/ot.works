import React from "react";
// import alignLeft from "react-icons/lib/fa/align-left";
// import alignCenter from "react-icons/lib/fa/align-center";
// import alignRight from "react-icons/lib/fa/align-right";
// import imageIcon from "react-icons/lib/fa/image";
import {
  FaAlignLeft,
  FaAlignCenter,
  FaAlignRight,
  FaAlignJustify,
  FaImage,
  FaSortNumericDown
} from "react-icons/fa";
// import { FiTag } from 'react-icons/fi'

const orangeIcon = () => (
  <span style={{ fontWeight: "bold", color: "#E35205" }}>O</span>
);

const orangeRender = props => (
  <span style={{ color: "#E35205" }}>{props.children}</span>
);

// const alignLeftRender = props => (
//   <p style={{ textAlign: "left" }}>{props.children}</p>
// );
// const alignCenterRender = props => (
//   <p style={{ textAlign: "center" }}>{props.children}</p>
// );
const alignRightJustify = props => (
  <p style={{ textAlign: "justify" }}>{props.children}</p>
);

export default {
  title: "Portable Text",
  name: "portableText",
  type: "array",
  of: [
    {
      type: "block",
      styles: [
        { title: "Normal", value: "normal" },
        // { title: 'H1', value: 'h1' },
        { title: "H2", value: "h2" },
        { title: "H3", value: "h3" },
        { title: "H4", value: "h4" }
      ],
      marks: {
        decorators: [
          { title: "Strong", value: "strong" },
          { title: "Emphasis", value: "em" },
          // { title: 'Code', value: 'code' },
          // { title: "Underline", value: "u" },
          // {
          //   title: "Align Left",
          //   value: "align_left",
          //   blockEditor: {
          //     icon: FaAlignLeft,
          //     render: alignLeftRender
          //   }
          // },
          // {
          //   title: "Align Center",
          //   value: "align_center",
          //   blockEditor: {
          //     icon: FaAlignCenter,
          //     render: alignCenterRender
          //   }
          // },
          {
            title: "Align Justify",
            value: "align_justify",
            blockEditor: {
              icon: FaAlignJustify,
              render: alignRightJustify
            }
          }
          // {
          //   title: "Orange",
          //   value: "orange",
          //   blockEditor: {
          //     // icon: orangeIcon,
          //     render: orangeRender
          //   }
          // }
          // { title: 'Orange', value: 'orange', blockEditor: {
          //   icon: () => 'Orange'
          // } },
        ],
        annotations: [
          {
            title: "Inline Icon",
            name: "inlineicon",
            type: "image",
            blockEditor: {
              icon: FaImage
            }
          },
          {
            name: "footnote",
            type: "object",
            title: "Footnote",
            blockEditor: {
              icon: FaSortNumericDown
            },
            fields: [
              {
                name: "text",
                type: "array",
                of: [{ type: "block" }]
              }
            ]
          },
          // {
          //   name: "note",
          //   type: "object",
          //   title: "Note de bas de page",
          //   blockEditor: {
          //     icon: FaSortNumericDown
          //   },
          //   fields: [
          //     {
          //       title: "note",
          //       name: "note",
          //       description: "",
          //       type: "string"
          //     }
          //   ]
          // },
          {
            name: "link",
            type: "object",
            title: "External link",
            fields: [
              {
                name: "href",
                type: "url",
                title: "URL"
              },
              {
                title: "Open in new tab",
                name: "blank",
                description: "Read https://css-tricks.com/use-target_blank/",
                type: "boolean"
              }
            ]
          }
        ]
      }
    },
    { type: "image" }
    // {
    //   name: 'table',
    //   title: 'Tableau',
    //   type: 'table'
    // },
    // { type: 'code' },
  ]
};
