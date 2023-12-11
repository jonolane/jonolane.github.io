import "./src/styles/global.css"

import React from 'react';
import { AppProvider } from './src/controllers/AppContext';

export const wrapRootElement = ({ element }) => {
  return <AppProvider>{element}</AppProvider>;
};

export const onInitialClientRender = () => {
  console.log("ReactDOM.render has executed");
};