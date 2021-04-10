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
                    <BlockContent blocks={_localizeField(li._rawTexte)} />
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
