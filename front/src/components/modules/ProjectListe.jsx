import React, { useState } from "react"

const ProjectListe = ({ input }) => {
  console.log(input)
  const [image, setImage] = useState()

  const { listTitle, listedProjects } = input
  return (
    <section className="project-liste">
      <h2>{listTitle}</h2>
      <ul>
        {listedProjects.map((li, i) => (
          <li key={i} data-image="">
            <div className="client">{li.client}</div>
            <div className="x xjb">
              <div className="title">{li.title}</div>
              <div className="project-metas">
                <a href={li.projectUrl} target="_blank">
                  lien
                </a>
                {li.projectImage && li.projectImage.asset && (
                  <button
                    onMouseEnter={() => setImage(li.projectImage.asset.url)}
                    onMouseLeave={() => setImage(null)}
                  >
                    image
                  </button>
                )}
              </div>
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
