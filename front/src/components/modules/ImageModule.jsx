import React from "react"
import Img from "gatsby-image"
import { getFluidGatsbyImage } from "gatsby-source-sanity"
import sanityConfig from "../../../config/sanity"

const ImageModule = (props) => {
  const { body } = props
  const fluidProps = getFluidGatsbyImage(
    body.asset._id,
    { maxWidth: 1440 },
    sanityConfig.sanity
  )

  return (
    <div className="image-module">
      <Img fluid={fluidProps} alt="logo" />
    </div>
  )
}

export default ImageModule
