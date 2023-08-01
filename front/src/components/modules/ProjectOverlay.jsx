import React, { useEffect, useState } from "react"
import clsx from "clsx"
import PubSub from "pubsub-js"
import SanityImage from "../SanityImage"

const ProjectOverlay = ({ image }) => {
  const [_image, setImage] = useState()
  const [open, setOpen] = useState()

  useEffect(() => {
    if (image) {
      _openOverlay()
    } else {
      _closeOverlay()
    }
  }, [image])

  const _openOverlay = () => {
    setImage(image)
    setOpen(true)
  }
  const _closeOverlay = () => {
    // setOpen(false)
    PubSub.publish("CLOSE_OVERLAY")
    setOpen(false)
  }

  return (
    <div
      className={clsx(
        "image-overlay",
        open ? "open" : "",
        _image && _image?.asset.metadata.dimensions.aspectRatio > 1
          ? "is-landscape"
          : "is-portrait"
      )}
      role="button"
      tabIndex={0}
      aria-label="image overlay, click to close"
      onClick={() => _closeOverlay()}
    >
      <div className="row center-xs h100 x xac">
        <div
          className="inner pr"
          style={{
            width: "calc((100vw - 10px * 13) / 12 * 10 + 10px * 9)",
            height: "calc(100vh - 100px)",
          }}
        >
          {/* {_image && <SanityImage input={_image} />} */}
          {_image && (
            <div
              style={{
                display: "inline-block",
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <img
                className={clsx("cover")}
                src={_image.asset.url}
                style={{
                  maxWidth: "calc((100vw - 10px * 13) / 12 * 10 + 10px * 9)",
                  maxHeight: "calc(100vh - 100px)",
                  width: "auto",
                  height: "auto",
                }}
              />
              {_image.credits && _image.credits.name && (
                <div className="caption">
                  {_image.credits?.job}: {_image.credits?.name}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProjectOverlay
