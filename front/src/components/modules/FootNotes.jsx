import React from "react"
import PortableText from "@sanity/block-content-to-react"
// import { _unique } from "../../core/utils"

function FootNotes({ blocks }) {
  const _unique = (obj, index, arr) => {
    const _obj = JSON.stringify(obj)
    return (
      index ===
      notes.findIndex((obj) => {
        return JSON.stringify(obj) === _obj
      })
    )
  }

  const notes = blocks
    // filter out everything that's not a text block
    .filter(({ _type }) => _type === "block")
    // make an array of the mark definitions of those blocks
    .reduce((acc, curr) => {
      return [...acc, ...curr.markDefs]
    }, [])
    // find all the footnote mark definitions
    .filter(({ _type }) => _type === "footnote")

  const notesUnique = notes.filter(_unique)
  console.log(notesUnique[0].text)
  return (
    <ul className="footnotes fSeg fS">
      {notesUnique.map(({ _key, text }, i) => (
        <li id={`${_key}`} key={_key}>
          <div className="row">
            <div className="col-xs-1">[{i + 1}]</div>
            <div className="col-md-6 col-xs-10">
              <PortableText blocks={text} />
            </div>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default FootNotes
