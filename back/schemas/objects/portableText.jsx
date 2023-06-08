import React from 'react'

import {
  FaAlignJustify,
  FaImage,
  FaSortNumericDown,
  FaSuperscript,
  FaSubscript,
} from 'react-icons/fa'

const AlignRightJustify = (props) => <p style={{textAlign: 'justify'}}>{props.children}</p>

export default {
  title: 'Portable Text',
  name: 'portableText',
  type: 'array',
  of: [
    {
      type: 'block',
      styles: [
        {title: 'Normal', value: 'normal'},
        // { title: 'H1', value: 'h1' },
        {title: 'H2', value: 'h2'},
        {title: 'H3', value: 'h3'},
        {title: 'H4', value: 'h4'},
      ],
      marks: {
        decorators: [
          // { title: "Strong", value: "strong" },
          {title: 'Emphasis', value: 'em'},
          {
            title: 'Superscript',
            value: 'sup',
            icon: FaSuperscript,
          },
          {
            title: 'Subscript',
            value: 'sub',
            icon: FaSubscript,
          },
          {
            title: 'Align Justify',
            value: 'align_justify',
            icon: FaAlignJustify,
            component: AlignRightJustify,
          },
        ],
        annotations: [
          {
            title: 'Inline Icon',
            name: 'inlineicon',
            type: 'image',
            icon: FaImage,
          },
          {
            name: 'footnote',
            type: 'object',
            title: 'Footnote',
            icon: FaSortNumericDown,
            fields: [
              {
                name: 'text',
                type: 'array',
                of: [{type: 'block'}],
              },
            ],
          },
          {
            name: 'link',
            type: 'object',
            title: 'External link',
            fields: [
              {
                name: 'href',
                type: 'url',
                title: 'URL',
                validation: (Rule) =>
                  Rule.uri({
                    scheme: ['http', 'https', 'mailto', 'tel'],
                  }),
              },
              {
                title: 'Open in new tab',
                name: 'blank',
                description: '',
                type: 'boolean',
              },
            ],
          },
        ],
      },
    },
    // { type: "image" }
  ],
}
