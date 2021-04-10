import React from "react"
import { Link } from "gatsby"
import { _localizeField } from "../core/utils"
// import AniLink from "gatsby-plugin-transition-link/AniLink";
// import LinkFade from "./ui/TransitionLinks/LinkFade";

const Menu = ({ input }) => {
  console.log(input)
  const menuSanitizd = input.map((el) => el.link)
  // console.log(menuSanitizd)
  return (
    <nav className="menu-header">
      <ul className="x">
        {input.map((li, i) => (
          <li key={i} className="menu-item cartouche">
            <Link to={`/${li.link.slug.current}`}>
              {_localizeField(li.label)}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
export default Menu
