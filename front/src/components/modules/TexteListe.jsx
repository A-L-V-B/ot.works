import React from "react"
import BlockContent from "@sanity/block-content-to-react"
import { _localizeField } from "../../core/utils"

const TexteListe = ({ input }) => {
  const { liste } = input

  const serializers = {
    types: {
      block(props) {
        switch (props.node.style) {
          // case "h1":
          //   return <h1>{props.children}</h1>
          default:
            return <p>{props.children}</p>
        }
      },
    },
    marks: {
      sup: ({ children }) => <sup>{children}</sup>,
      sub: ({ children }) => <sub>{children}</sub>,
      link: ({ mark, children }) => {
        // Read https://css-tricks.com/use-target_blank/
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

  return (
    <section className="texte-liste fS fSeg">
      <div className="container-fluid">
        <ul>
          {liste.map((li, i) => (
            <li key={i} className="mbM">
              <div className="row">
                <div className="col-xs-12">
                  <h2 className="title ttu">{_localizeField(li._rawTitle)}</h2>
                </div>
              </div>
              <div className="row">
                <div className="col-xs-1"></div>
                <div className="col-xs-11 col-md-6">
                  <div className="texte taj">
                    {li._rawTexte && (
                      <BlockContent
                        blocks={_localizeField(li._rawTexte)}
                        serializers={serializers}
                      />
                    )}
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default TexteListe
