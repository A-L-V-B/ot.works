import React from "react"
import { Link } from "gatsby"
// import AniLink from "gatsby-plugin-transition-link/AniLink";
// import LinkFade from "./ui/TransitionLinks/LinkFade";

const Menu = ({ input }) => (
  <nav className="menu-header">
    <ul className="x">
      {input.map((li, i) => (
        <li key={i} className="menu-item cartouche">
          <Link to={`/${li.link.slug.current}`}>{li.label}</Link>
        </li>
      ))}
      {/* <li className="menu-item">
        <Link to={`/test`}>Test</Link>
      </li>
      <li className="menu-item">
        <Link to={`/p/halle-et-place-merceville-franceville`}>
          project test
        </Link>
      </li> */}
    </ul>
  </nav>
)

export default Menu
