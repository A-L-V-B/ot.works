import React, { Fragment, useEffect, useState } from "react"
import { _localizeField, _localizeText } from "../../core/utils"
import ListeItem from "./ListeItem"

const ProjectListe = ({ input }) => {
  const { listTitle, listedProjects } = input
  const listedProjectsSorted = listedProjects.sort((a, b) => {
    return new Date(b.dateDelivered) - new Date(a.dateDelivered)
  })

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
          <ListeItem key={i} li={li} />
        ))}
      </ul>
    </section>
  )
}

export default ProjectListe
