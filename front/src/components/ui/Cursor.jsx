import React, { useEffect, useState } from "react"
import styled from "styled-components"
import clsx from "clsx"

const _Cursor = styled.div`
  position: fixed;
  z-index: 999;
  background: black;
  width: 25px;
  height: 25px;
  border-radius: 100%;
  transform: translate(-50%, -50%);
  transition: all 100ms ease;
  // mix-blend-mode: difference;
  pointer-events: none;
  &.is-anchor-or-button {
    width: 50px;
    height: 50px;
    background: transparent;
    border: 1px solid;
  }
`

const Cursor = () => {
  const [positions, setPositions] = useState({ left: 0, top: 0 })
  const [isAnchorOrButton, setIsAnchorOrButton] = useState(false)
  useEffect(() => {
    document.addEventListener("mousemove", _onMouseMove)

    return () => document.removeEventListener("mousemove", _onMouseMove)
  }, [])

  const _onMouseMove = (e) => {
    // console.log(e.target)
    setIsAnchorOrButton(_isAnchorOrButton(e.target))

    setPositions((positions) => ({
      ...positions,
      left: e.clientX,
      top: e.clientY,
    }))
  }

  const _isAnchorOrButton = (target) => {
    return (
      target.tagName.toLowerCase() === "a" ||
      target.tagName.toLowerCase() === "button"
    )
  }
  // console.log(positions)
  return (
    <_Cursor
      className={clsx("cursor", isAnchorOrButton ? "is-anchor-or-button" : "")}
      style={{
        left: positions.left,
        top: positions.top,
      }}
    ></_Cursor>
  )
}

export default Cursor
