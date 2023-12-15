import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';
import { AppContext } from '../controllers/AppContext';

const Navbar: React.FC = () => {
  const appContext = useContext(AppContext);
  const isDarkMode = appContext?.isDarkMode;

  return (
    /* having to opt of pl on <div> text to account for safari margin cutoff */
    <nav className="z-50 flex sm:items-center justify-between sm:flex-row mr-6">
      <div className={`pl-6 ${isDarkMode ? 'font-arizonia' : ''} sm:text-8xl md:text-9xl text-3xl sm:text-center z-50 mb-4 mt-6 lg:mt-8 md:mt-8 tracking-wide`}>
        Jono Lane
      </div>
      <span className="sm:hidden items-end my-auto pt-2 z-50 cursor-pointer" onClick={() => appContext?.setIsDarkMode && appContext.setIsDarkMode(!isDarkMode)}>
        <FontAwesomeIcon icon={faLightbulb} className="text-2xl" />
      </span>
    </nav>
  );
};

export default Navbar;