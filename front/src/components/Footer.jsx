import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import TexteListe from "./modules/TexteListe"
import { _localizeText } from "../core/utils"

const query = graphql`
  query {
    siteBuildMetadata {
      buildTime
    }
    sanityFooter {
      texteList {
        liste {
          _rawTitle
          _rawTexte
        }
      }
    }
    sanitySettings {
      version
    }
  }
`

const Footer = () => {
  const {
    siteBuildMetadata: { buildTime },
    sanityFooter,
    sanitySettings,
  } = useStaticQuery(query)

  const date = new Date(buildTime)
  const getFormatedDate = () => {
    const dd = pad2(date.getDate())
    const mm = pad2(date.getMonth() + 1)
    let yy = date.getFullYear()
    yy = String(yy).slice(2, 4)

    return dd + "." + mm + "." + yy
  }

  const getFormatedTime = () => {
    const hh = pad2(date.getHours())
    const mm = pad2(date.getMinutes())
    const ss = pad2(date.getSeconds())

    return hh + ":" + mm + ":" + ss
  }

  const pad2 = (n) => {
    return (n < 10 ? "0" : "") + n
  }

  return (
    <footer>
      <div className="mbM">
        <TexteListe input={sanityFooter.texteList} />
      </div>
      <div className="container-fluid">
        <div className="site-metas">
          v{sanitySettings.version}, {_localizeText("modifiedThe")}{" "}
          <span className="tabnum">{getFormatedDate()}</span>{" "}
          {_localizeText("at")}{" "}
          <span className="tabnum">{getFormatedTime()}</span>
        </div>
      </div>
    </footer>
  )
}
export default Footer
