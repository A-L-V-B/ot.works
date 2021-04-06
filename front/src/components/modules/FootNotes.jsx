import React from "react"
import PortableText from "@sanity/block-content-to-react"

function Footnotes({ blocks }) {
  const notes = blocks
    // filter out everything that's not a text block
    .filter(({ _type }) => _type === "block")
    // make an array of the mark definitions of those blocks
    .reduce((acc, curr) => {
      return [...acc, ...curr.markDefs]
    }, [])
    // find all the footnote mark definitions
    .filter(({ _type }) => _type === "footnote")

  return (
    <ul className="footnotes fSeg fS">
      {notes.map(({ _key, text }) => (
        <li id={`${_key}`} key={_key}>
          <PortableText blocks={text} />
        </li>
      ))}
    </ul>
  )
}

export default Footnotes