import React from 'react';
import BlockContent from '@sanity/block-content-to-react'

const TexteModule = (props) => {
  // console.log(props)
  const serializers = {
    types: {
      block (props) {
        // console.log(props)
        switch (props.node.style) {
          case 'h1':
            return <h1>{props.children}</h1>
          case 'h2':
            return <h2>{props.children}</h2>
          default:
            return <p>{props.children}</p>
        }
      },
    }
      
  }

  return (
    <div className="texte-module">
      <BlockContent blocks={props.body} serializers={serializers} />
    </div>
  );
};

export default TexteModule;