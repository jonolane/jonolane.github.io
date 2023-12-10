import React, { createContext, useState, ReactNode } from 'react';

interface AppContextProps {
  isDarkMode: boolean;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AppContext = createContext<AppContextProps | undefined>(undefined);

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <AppContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      {children}
    </AppContext.Provider>
  );
};