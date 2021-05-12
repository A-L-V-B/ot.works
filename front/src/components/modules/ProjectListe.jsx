import React, { useEffect, useState } from "react"
import { _localizeField, _localizeText } from "../../core/utils"
import ProjectOverlay from "./ProjectOverlay"

const ProjectListe = ({ input }) => {
  const [image, setImage] = useState()

  const { listTitle, listedProjects } = input
  // console.log(listedProjects)
  const listedProjectsSorted = listedProjects.sort((a, b) => {
    return new Date(b.dateDelivered) - new Date(a.dateDelivered)
  })

  const _getYear = (d) => {
    // console.log(d)
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
  // const _onMouseLeave = () => {

  // }

  return (
    <section className="project-liste">
      <div className="row ">
        <div className="col-md-4 ">
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
                <div className="col-md-10 col-xs-12">
                  <div className="title fw500">
                    {`${_localizeField(li.title)}${_getYear(li.dateDelivered)}`}
                  </div>
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
                      onMouseEnter={() => setImage(li.imageFeatured)}
                      onMouseLeave={() => setImage(null)}
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
