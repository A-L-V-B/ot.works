import React, { useState } from "react"
import PortableText from "@sanity/block-content-to-react"
import Footnotes from "./Footnotes"

const initialNote = []
const Texte = ({ input }) => {
  // console.log(input)
  const [notes, setNotes] = useState(initialNote)
  // console.log(input)
  // const notes = input.text.map((el, i) => {
  //   console.log(el)
  //   return el.markDefs.note
  // })
  const serializers = {
    types: {
      block(props) {
        // console.log(props)
        switch (props.node.style) {
          // case "h1":
          //   return <h1>{props.children}</h1>
          // case "h2":
          //   return <h2>{props.children}</h2>
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
      <div className="container">
        <div className="inner">
          <PortableText
            blocks={input.text}
            serializers={serializers}
            className="mbL"
          />
          <Footnotes blocks={input.text} />
        </div>
      </div>
    </section>
  )
}

export default Texte
