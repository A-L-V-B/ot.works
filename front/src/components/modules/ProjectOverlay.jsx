import React, { useEffect, useState } from "react"
import clsx from "clsx"
import { urlForImage } from "../../core/utils"

const ProjectOverlay = ({ image, showOverlay, closeOverlay }) => {
  const _closeOverlay = () => {
    closeOverlay()
  }

  if (!image || !image.asset) return null

  return (
    <div
      className={clsx(
        "image-overlay",
        showOverlay ? "open" : "",
        image && image?.asset.metadata.dimensions.aspectRatio > 1
          ? "is-landscape"
          : "is-portrait"
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
              className={clsx("cover")}
              src={urlForImage(image.asset._id).height(1340).url()}
              srcSet={`${urlForImage(image.asset._id)
                .width(500)
                .url()} 500w, ${urlForImage(image.asset._id)
                .width(1024)
                .url()} 1024w, ${urlForImage(image.asset._id)
                .width(1920)
                .url()} 1920w, ${urlForImage(image.asset._id)
                .width(2560)
                .url()} 2560w`}
              sizes="(max-width: 768px) calc(100vw - 10px * 2), calc((100vw - 10px * 13) / 12 * 10 + 10px * 9)"
            />
            {image.credits && image.credits.name && (
              <div className="overlay__caption">
                {image.credits.job.charAt(0).toUpperCase() +
                  image.credits.job.slice(1)}{" "}
                :{" "}
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
