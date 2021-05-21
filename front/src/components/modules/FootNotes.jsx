import React from "react"
import PortableText from "@sanity/block-content-to-react"
// import { _unique } from "../../core/utils"

function FootNotes({ blocks }) {
  // console.log(blocks)
  // return null
  const _unique = (obj, index, arr) => {
    const _obj = JSON.stringify(obj)
    return (
      index ===
      notes.findIndex((obj) => {
        return JSON.stringify(obj) === _obj
      })
    )
  }

  const serializers = {
    marks: {
      link: ({ mark, children }) => {
        // Read https://css-tricks.com/use-target_blank/
        // console.log(mark);
        const { href } = mark
        const blank =
          href.indexOf("otworks") === -1 || href.indexOf("oliviertalbot") === -1
        // console.log(href, href.indexOf("otworks"))
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
  // console.log(notesUnique)
  if (!notesUnique) return null
  // console.log(notesUnique[0].text)
  return (
    <ul className="footnotes fSeg fS">
      {notesUnique.map(({ _key, text }, i) => (
        <li id={`${_key}`} key={_key}>
          <div className="row">
            <div className="col-xs-1">[{i + 1}]</div>
            <div className="col-md-6 col-xs-10">
              <PortableText blocks={text} serializers={serializers} />
            </div>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default FootNotes
