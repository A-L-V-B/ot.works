import React from "react"
import Texte from "./Texte"
import ProjectListe from "./ProjectListe"
// import TexteListe from "./TexteListe"

const Modules = ({ input }) => {
  // console.log(input)

  const _renderModules = () => {
    const _modules = input.map((module, i) => {
      // console.log(module._type)
      // console.log(module)
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
