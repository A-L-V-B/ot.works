import React, { Fragment, useEffect, useState } from "react"
import PubSub from "pubsub-js"
import { _localizeField, _localizeText } from "../../core/utils"
import ProjectOverlay from "./ProjectOverlay"

const ProjectListe = ({ input }) => {
  const [image, setImage] = useState()

  const { listTitle, listedProjects } = input
  const listedProjectsSorted = listedProjects.sort((a, b) => {
    return new Date(b.dateDelivered) - new Date(a.dateDelivered)
  })

  useEffect(() => {
    const token = PubSub.subscribe("CLOSE_OVERLAY", _onCloseOverlay)
    return () => PubSub.unsubscribe(token)
  }, [image, setImage])

  const _onCloseOverlay = () => {
    setImage(null)
  }

  const _getYear = (d) => {
    const year = new Date(d).getFullYear()
    return !isNaN(year) ? `, ${year}` : ""
  }

  const _renderCat = (cat) => {
    // return cat[0]
    if (cat.length) {
      if (cat[0] === "pro-bono" || cat[0] === "personal") {
        return `[${_localizeText(cat[0])}]`
      }
    }
  }

  const _preloadImage = (asset) => {
    if (asset) {
      const _image = new Image()
      _image.src = asset.src
    }
  }
  const _onMouseEnter = (li) => {
    if (_isTouch()) return
    setImage(li.imageFeatured)
  }
  const _onMouseLeave = () => {
    if (_isTouch()) return
    setImage(null)
  }

  const _isTouch = () => {
    return (
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      navigator.msMaxTouchPoints > 0
    )
  }

  return (
    <section className="project-liste">
      <div className="row ">
        <div className="col-md-4 col-xs-9">
          <h2>
            <div className="inner">{_localizeField(listTitle)}</div>
          </h2>
        </div>
      </div>

      <ul>
        {listedProjectsSorted.map((li, i) => (
          <li
            key={i}
            // onMouseEnter={() => _preloadImage(li.imageFeatured)}
            // onMouseLeave={() => setPreloadImage(false)}
          >
            <div className="inner">
              <div className="client">
                {li.client} {_renderCat(li.category)}
              </div>
              <div className="row">
                <div className="col-md-12 col-xs-12">
                  <div className="title fw500">
                    {`${_localizeField(li.title)}${_getYear(li.dateDelivered)}`}
                  </div>
                </div>
              </div>
              <div className="row xab">
                <div className="col-md-9 col-xs-12 col-md-offset-1">
                  {li.collaborations && li.collaborations.length > 0 && (
                    <div className="fS fw500">
                      {_localizeText("with")}{" "}
                      {li.collaborations.map((collaborator, index) => (
                        <Fragment key={`collaborator-${index}`}>
                          <a
                            href={collaborator?.url}
                            target="_blank"
                            rel="noreferrer"
                          >
                            {collaborator?.name} ({collaborator?.job})
                          </a>
                          <span>
                            {li.collaborations.length >= 2 &&
                            index === li.collaborations.length - 2
                              ? ` ${_localizeText("and")} `
                              : li.collaborations.length >= 3 &&
                                index < li.collaborations.length - 2
                              ? ", "
                              : ""}
                          </span>
                        </Fragment>
                      ))}
                    </div>
                  )}
                </div>
                <div className="col-md-1 col-xs-9 tar">
                  {li.projectUrl && (
                    <a href={li.projectUrl} target="_blank" rel="noreferrer">
                      {_localizeText("link")}
                    </a>
                  )}
                </div>
                {li.imageFeatured && li.imageFeatured.asset && (
                  <div className="col-md-1 col-xs-3 tar">
                    <button
                      onMouseEnter={() => _onMouseEnter(li)}
                      onMouseLeave={() => _onMouseLeave()}
                      onClick={() => {
                        !image ? setImage(li.imageFeatured) : setImage(null)
                      }}
                    >
                      {_localizeText("image")}
                    </button>
                  </div>
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>

      <ProjectOverlay image={image} />
    </section>
  )
}

export default ProjectListe
