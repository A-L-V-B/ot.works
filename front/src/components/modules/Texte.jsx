import React, { useState } from "react"
import PortableText from "@sanity/block-content-to-react"
import FootNotes from "./FootNotes"
import { _localizeField } from "../../core/utils"

const Texte = ({ input }) => {
  const serializers = {
    types: {
      block(props) {
        // console.log(props)
        switch (props.node.style) {
          // case "h1":
          //   return <h1>{props.children}</h1>
          default:
            return <p>{props.children}</p>
        }
      },
    },
    marks: {
      footnote: ({ children, markKey, mark }) => (
        <span>
          <a href={`#${markKey}`}>{children}</a>
        </span>
      ),
    },
  }
  // console.log(notes)
  return (
    <section className="texte">
      <div className="container-fluid">
        <div className="container-inner">
          <div className="mbL">
            <PortableText
              blocks={_localizeField(input.text)}
              serializers={serializers}
            />
          </div>
          <FootNotes blocks={_localizeField(input.text)} />
        </div>
      </div>
    </section>
  )
}

export default Texte
