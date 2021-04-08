import React, { useState } from "react"
import { _localizeField, _localizeText } from "../../core/utils"

const ProjectListe = ({ input }) => {
  // console.log(input)
  const [image, setImage] = useState()

  const { listTitle, listedProjects } = input
  return (
    <section className="project-liste">
      <div className="row ">
        <div className="col-md-4 ">
          <h2>{listTitle}</h2>
        </div>
      </div>

      <ul>
        {listedProjects.map((li, i) => (
          <li key={i}>
            <div className="client">{li.client}</div>
            <div className="row">
              <div className="col-md-10 col-xs-12">
                <div className="title fw500">{_localizeField(li.title)}</div>
              </div>
              <div className="col-md-1 col-xs-9 tar">
                <a href={li.projectUrl} target="_blank">
                  {_localizeText("link")}
                </a>
              </div>
              {li.projectImage && li.projectImage.asset && (
                <div className="col-md-1 col-xs-3 tar">
                  <button
                    onMouseEnter={() => setImage(li.projectImage.asset.url)}
                    onMouseLeave={() => setImage(null)}
                  >
                    {_localizeText("image")}
                  </button>
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
      {image && (
        <div className="image-overlay">
          <div className="row center-xs h100">
            <div className="col-md-10 h100">
              <div
                className="cover h100"
                style={{
                  backgroundImage: `url(${image})`,
                }}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default ProjectListe
