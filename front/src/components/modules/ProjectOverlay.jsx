import React, { useEffect, useState } from "react"
import clsx from "clsx"
import { urlForImage } from "../../core/utils"

const ProjectOverlay = ({ image, showOverlay, closeOverlay }) => {
  const [fixedDimension, setFixedDimension] = useState("width")
  const [job, setJob] = useState("")

  const _closeOverlay = () => {
    closeOverlay()
  }

  useEffect(() => {
    const handleResize = () => {
      if (!image || !image.asset) return
      const windowWidth = window.innerWidth
      const windowHeight = window.innerHeight
      const containerSize =
        windowWidth < 768
          ? { h: windowHeight - 100, w: windowWidth - 20 }
          : { h: windowHeight - 200, w: ((windowWidth - 130) / 12) * 7 + 60 }
      const imageRatio = image.asset.metadata.dimensions.aspectRatio
      const containerRatio = containerSize.w / containerSize.h

      setFixedDimension(imageRatio > containerRatio ? "width" : "height")
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [image])

  useEffect(() => {
    if (!image || !image.credits) return
    setJob(
      image.credits.job.charAt(0).toUpperCase() + image.credits.job.slice(1)
    )
  }, [image])

  if (!image || !image.asset) return null

  return (
    <div
      className={clsx(
        "image-overlay",
        showOverlay ? "open" : "",
        fixedDimension === "width" ? "fixed-width" : "fixed-height"
      )}
      role="button"
      tabIndex={0}
      aria-label="image overlay, click to close"
      onClick={() => _closeOverlay()}
    >
      <div className="row center-xs h100 x xac">
        <div className="pr overlay__inner">
          <div className="overlay__image">
            <img
              height={image.asset.metadata.dimensions.height}
              width={image.asset.metadata.dimensions.width}
              alt={""}
              className={clsx("cover")}
              src={urlForImage(image.asset._id).height(1340).url()}
              srcSet={`${urlForImage(image.asset._id)
                .width(500)
                .url()} 500w, ${urlForImage(image.asset._id)
                .width(800)
                .url()} 800w, ${urlForImage(image.asset._id)
                .width(1080)
                .url()} 1280w, ${urlForImage(image.asset._id)
                .width(1280)
                .url()} 1280w, ${urlForImage(image.asset._id)
                .width(1480)
                .url()} 1480w`}
              sizes="(max-width: 768px) calc(100vw - 20px), calc((100vw - 130px) / 12 * 7 + 60px)"
            />
            {image.credits && image.credits.name && (
              <div className="overlay__caption">
                {job ? `${job} : ` : ""}
                {image.credits.url ? (
                  <a href={image.credits.url} target="_blank" rel="noreferre">
                    {image.credits.name}
                  </a>
                ) : (
                  <>{image.credits.name}</>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectOverlay
