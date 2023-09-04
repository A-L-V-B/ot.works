import React from "react"
import Texte from "./Texte"
import ProjectListe from "./ProjectListe"
// import TexteListe from "./TexteListe"

const Modules = ({ input }) => {
  const _renderModules = () => {
    const _modules = input.map((module, i) => {
      switch (module._type) {
        case "texteUI":
          return <Texte key={i} input={module} />
        case "projectListUI":
          return <ProjectListe key={i} input={module} />
        // case "texteListUI":
        //   return <TexteListe key={i} input={module} />
        default:
          return null
      }
    })
    return _modules
  }

  return <div className="modules">{_renderModules()}</div>
}

export default Modules
