import React from "react"
import BlockContent from "@sanity/block-content-to-react"
import { _localizeField } from "../../core/utils"

const TexteListe = ({ input }) => {
  // console.log(input)
  const { liste } = input
  // console.log(liste)
  return (
    <section className="texte-liste fS fSeg">
      <div className="container-fluid">
        <div className="container-inner">
          <ul>
            {liste.map((li, i) => (
              <li key={i} className="mbM">
                <h2 className="title ">{_localizeField(li._rawTitle)}</h2>
                <div className="texte taj">
                  <BlockContent blocks={_localizeField(li._rawTexte)} />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default TexteListe
