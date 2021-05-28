import React, { useEffect, useState } from "react"
import clsx from "clsx"
import PubSub from "pubsub-js"
import SanityImage from "../SanityImage"

const ProjectOverlay = ({ image }) => {
  const [_image, setImage] = useState()
  const [open, setOpen] = useState()
  // console.log(image)
  useEffect(() => {
    // console.log(image)
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
    // console.log("ProjectOverlay : _closeOverlay")
    PubSub.publish("CLOSE_OVERLAY")
    setOpen(false)
  }
  // console.log(_image.asset)
  return (
    <div
      className={clsx(
        "image-overlay",
        open ? "open" : "",
        _image?.asset.metadata.dimensions.aspectRatio > 1
          ? "is-landscape"
          : "is-portrait"
      )}
      role="button"
      tabIndex={0}
      aria-label="image overlay, click to close"
      onClick={() => _closeOverlay()}
    >
      <div className="row center-xs h100">
        <div className="col-md-10 col-xs-12 h100 ">
          <div className="inner h100 x xjc xac">
            {/* {_image && <SanityImage input={_image} />} */}
            {_image && (
              <div
                className={clsx("cover")}
                style={{
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundImage: `url(${_image.asset.url})`,
                  // backgroundColor:
                  //   _image.asset.metadata.palette.dominant.background,
                  width: "calc(100vw - 20px)",
                  height: "calc(100vh - 100px)",
                }}
              ></div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectOverlay
