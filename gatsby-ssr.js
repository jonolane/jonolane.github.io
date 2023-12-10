import React from 'react';
import { AppProvider } from './src/controllers/AppContext';

export const wrapRootElement = ({ element }) => {
  return <AppProvider>{element}</AppProvider>;
};