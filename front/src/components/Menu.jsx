import React from "react"
import { Link } from "gatsby"
import { _localizeField, _localizeSlug } from "../core/utils"
// import AniLink from "gatsby-plugin-transition-link/AniLink";
// import LinkFade from "./ui/TransitionLinks/LinkFade";

const Menu = ({ input }) => {
  // const menuSanitizd = input.map((el) => el.link)

  return (
    <nav className="menu-header cartouche">
      <ul className="x">
        {input.map((li, i) => (
          <li key={i} className="menu-item ">
            <Link to={`/${_localizeSlug(li.link.slug)}`} className="prL">
              {_localizeField(li.label)}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
export default Menu
