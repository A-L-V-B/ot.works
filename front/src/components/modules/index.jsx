import React from 'react';
import TexteModule from './TexteModule';
import ImageModule from './ImageModule';

const Modules = (props) => {
  // console.log(props)
  const { sections } = props._rawContent
  // console.log(sections)

  const _renderModules = () => {
    const _modules = sections.map((section, i) => {
      // console.log(section)
      switch (section._type) {
        case "texteModule":
          return <TexteModule key={i} body={section.text} />
        case "imageModule":
          return <ImageModule key={i} body={section.image} />
        default:
          return null;
      }
    })
    return _modules;
      
  }

  return (
    <div className="modules">
      { sections && _renderModules() }
    </div>
  );
};

export default Modules;