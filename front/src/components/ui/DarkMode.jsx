import React, { useEffect, useState } from "react"
import usePrefersColorScheme from "use-prefers-color-scheme"

const DarkMode = () => {
  const prefersColorScheme = usePrefersColorScheme()
  const [isDark, setIsDark] = useState(prefersColorScheme === "dark")

  useEffect(() => {
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
