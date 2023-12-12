import React from 'react';
import { AppProvider } from './src/controllers/AppContext';

export const wrapRootElement = ({ element }) => {
  return <AppProvider>{element}</AppProvider>;
};

export const onInitialClientRender = () => {
  const applyDelayedStyles = () => {
    const styleElement = document.createElement('style');
    styleElement.innerHTML = `
      body::before {
        content: "";
        position: fixed;
        inset: 0;
        background-color: #111111;
        z-index: -1;
      }
    `;
    document.head.appendChild(styleElement);
  };

  setTimeout(applyDelayedStyles, 2000); 
  console.log("onInitialClientRender complete");
};