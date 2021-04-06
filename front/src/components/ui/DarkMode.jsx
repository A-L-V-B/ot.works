import React, { useEffect, useState } from "react"

const DarkMode = () => {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    if (isDark) {
      document.body.classList.add("is-dark")
    } else {
      document.body.classList.remove("is-dark")
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
