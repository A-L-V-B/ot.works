import React, { Fragment, useEffect, useState } from "react"
import PubSub from "pubsub-js"
import { _localizeField, _localizeText } from "../../core/utils"
import ProjectOverlay from "./ProjectOverlay"

const ListeItem = ({ li }) => {
  const [showOverlay, setShowOverlay] = useState(false)

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

  const _onMouseEnter = (li) => {
    if (_isTouch()) return
    setShowOverlay(true)
  }
  const _onMouseLeave = () => {
    if (_isTouch()) return
    setShowOverlay(false)
  }

  const _isTouch = () => {
    return (
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      navigator.msMaxTouchPoints > 0
    )
  }

  return (
    <li>
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
              <div className="fS fw500 credits">
                <div>{_localizeText("with")} </div>
                <div>
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
                onClick={() => setShowOverlay(!showOverlay)}
              >
                {_localizeText("image")}
              </button>
            </div>
          )}
        </div>
      </div>
      <ProjectOverlay
        image={li.imageFeatured}
        showOverlay={showOverlay}
        closeOverlay={() => setShowOverlay(false)}
      />
    </li>
  )
}

export default ListeItem
