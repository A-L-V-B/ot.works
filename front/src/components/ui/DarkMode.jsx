import React, { useEffect, useState } from "react"

const DarkMode = () => {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    //si on toggle la classe sur le body au changement de page la classe est nétoyée. Idéalement faire ce switch via le context
    if (isDark) {
      document.documentElement.classList.add("is-dark")
    } else {
      document.documentElement.classList.remove("is-dark")
    }
  }, [isDark])

  return (
    <ul className="dark-mode">
      <li>
        <button onClick={() => setIsDark(false)}>light</button>
      </li>
      <li>
        <button onClick={() => setIsDark(true)}>dark</button>
      </li>
    </ul>
  )
}

export default DarkMode
