import React from "react"
import PortableText from "@sanity/block-content-to-react"
import FootNotes from "./FootNotes"
import { _localizeField } from "../../core/utils"

const Texte = ({ input }) => {
  // console.log(input)
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
        <span className="fSeg">
          <a href={`#${markKey}`}>{children}</a>
        </span>
      ),
      sup: ({ children }) => <sup>{children}</sup>,

      link: ({ mark, children }) => {
        // Read https://css-tricks.com/use-target_blank/
        // console.log(mark);
        const { blank, href } = mark
        return blank ? (
          <a href={href} target="_blank" rel="noopener, noreferrer">
            {children}
          </a>
        ) : (
          <a href={href}>{children}</a>
        )
      },
    },
  }
  // console.log(input)
  return (
    <section className="texte">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-7 col-xs-12">
            <div className="mbL texte__intro">
              <PortableText
                blocks={_localizeField(input.text)}
                serializers={serializers}
              />
            </div>
          </div>
        </div>
        <FootNotes blocks={_localizeField(input.text)} />
      </div>
    </section>
  )
}

export default Texte
