import React from "react"
import BlockContent from "@sanity/block-content-to-react"

const TexteListe = ({ input }) => {
  // console.log(input)
  const { liste } = input
  return (
    <section className="texte-liste">
      <div className="container">
        <div className="inner">
          <ul>
            {liste.map((li, i) => (
              <li key={i} className="mbM">
                <div className="title">{li.title}</div>
                <BlockContent blocks={li.texte} className="texte" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default TexteListe
