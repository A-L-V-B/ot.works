import React from "react"
import { getGatsbyImageData } from "gatsby-source-sanity"
import { GatsbyImage } from "gatsby-plugin-image"
import { _localizeField } from "../core/utils"
// import clsx from "clsx"

const sanityConfig = { projectId: "6hr2f37r", dataset: "production" }

const SanityImage = ({ input, className }) => {
  // const [imageLoaded, setImageloaded] = useState(false)
  const { asset, alt } = input
  const { metadata } = asset
  const imageData = getGatsbyImageData(asset, { maxWidth: 1700 }, sanityConfig)
  // useEffect(() => {}, []);

  return (
    <figure>
      <GatsbyImage
        image={imageData}
        alt={alt ? _localizeField(alt) : ""}
        style={{
          maxWidth: "calc(100vw - 20px)",
          maxHeight: "calc(100vh - 100px)",
        }}
        // imgStyle={{
        //   backgroundColor: metadata.palette.dominant.background
        // }}
        objectFit="contain"

        // onLoad={() => {
        //   setImageloaded(true)
        // }}
      />
    </figure>
  )
}

export default SanityImage
