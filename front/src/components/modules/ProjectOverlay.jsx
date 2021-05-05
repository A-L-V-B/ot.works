import React, { useEffect, useState } from "react"
import clsx from "clsx"
import SanityImage from "../SanityImage"

const ProjectOverlay = ({ image }) => {
  const [_image, setImage] = useState()
  const [open, setOpen] = useState()

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
    setOpen(false)
  }
  // console.log(_image.asset.url)
  return (
    <div
      className={clsx("image-overlay", open ? "open" : "")}
      role="button"
      tabIndex={0}
      onClick={() => _closeOverlay()}
    >
      <div className="row center-xs h100">
        <div className="col-md-10 col-xs-12 h100 ">
          <div className="inner h100 x xjc xac">
            {/* {_image && <SanityImage input={_image} />} */}
            {_image && (
              <div
                className="cover"
                style={{
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundImage: `url(${_image.asset.url})`,
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
