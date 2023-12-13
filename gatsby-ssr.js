import React from 'react';
import { AppProvider } from './src/controllers/AppContext';

export const wrapRootElement = ({ element }) => {
  return <AppProvider>{element}</AppProvider>;
};

// accounting for black body. removed z-index: -1; not allowed on gatsby-ssr.js
/*
export const onInitialClientRender = () => {
  const applyDelayedStyles = () => {
    const styleElement = document.createElement('style');
    styleElement.innerHTML = `
      body::before {
        content: "";
        position: fixed;
        inset: 0;
        background-color: #111111;
      }
    `;
    document.head.appendChild(styleElement);
  };

  setTimeout(applyDelayedStyles, 4000); 
  console.log("onInitialClientRender complete");
};
*/
// ideal time probably two seconds if I can get it to stop displaying immmediately 

// seeing if this works on phone
export const onRenderBody = ({ setPostBodyComponents }) => {
  setPostBodyComponents([
    <script
      key="applyDelayedStyles"
      dangerouslySetInnerHTML={{
        __html: `
          setTimeout(function() {
            var styleElement = document.createElement('style');
            styleElement.innerHTML = \`
              body::before {
                content: "";
                position: fixed;
                inset: 0;
                background-color: #111111;
              }
            \`;
            document.head.appendChild(styleElement);
            console.log("onRenderBody complete");
          }, 4000);
        `,
      }}
    />,
  ]);
};
