import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const query = graphql`
  query {
    siteBuildMetadata {
      buildTime
    }
  }
`

const Footer = () => {
  const {
    siteBuildMetadata: { buildTime },
  } = useStaticQuery(query)

  const date = new Date(buildTime)
  console.log(date)
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

    return hh + "." + mm + "." + ss
  }

  const pad2 = (n) => {
    return (n < 10 ? "0" : "") + n
  }

  return (
    <footer>
      Modifié le {`${getFormatedDate()} à ${getFormatedTime()}`}
      {/* <div className="x xjb">
        <div className="col">
          <div className="copyright">© {new Date().getFullYear()} </div>
        </div>
        <div className="col">
          <p>
            Made with ❤ by the{" "}
            <a href="ahmedghazi.com" target="_blank">
              a_e_a_i_
            </a>
          </p>
        </div>
      </div> */}
    </footer>
  )
}
export default Footer