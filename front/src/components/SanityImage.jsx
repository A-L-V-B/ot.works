import React from "react"
import { getGatsbyImageData } from "gatsby-source-sanity"
import { GatsbyImage } from "gatsby-plugin-image"

const sanityConfig = { projectId: "6hr2f37r", dataset: "production" }

const SanityImage = ({ input }) => {
  const imageData = getGatsbyImageData(
    input.asset,
    { maxWidth: 1700 },
    sanityConfig
  )
  return <GatsbyImage image={imageData} />
}

export default SanityImage
