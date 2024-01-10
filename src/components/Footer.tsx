import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faXTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faLightbulb } from '@fortawesome/free-solid-svg-icons';
import { AppContext } from '../controllers/AppContext';

const Footer = () => {
  const appContext = useContext(AppContext);
  const isDarkMode = appContext?.isDarkMode;

  const handleLinkClick = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <footer className="z-50">
      <div className="flex justify-center z-20 h-auto space-x-6">
        <FontAwesomeIcon
          icon={faLightbulb}
          className="sm:block hidden sm:text-4xl text-2xl hover:translate-y-[-2px] hover:scale-110 transition-all duration-300"
          onClick={() => appContext?.setIsDarkMode && appContext.setIsDarkMode(!isDarkMode)}
        />
        <div className='flex sm:hidden'>
          <FontAwesomeIcon
            icon={faXTwitter}
            className="sm:hidden block sm:text-4xl text-2xl hover:translate-y-[-2px] hover:scale-110 transition-all duration-300 -ml-6"
            onClick={() => handleLinkClick('https://twitter.com/jlane_')}
          />
        </div>
        <FontAwesomeIcon
          icon={faFacebook}
          className="sm:text-4xl text-2xl hover:translate-y-[-2px] hover:scale-110 transition-all duration-300"
          onClick={() => handleLinkClick('https://www.facebook.com/jonathan.lane.5473')}
        />
        <FontAwesomeIcon
          icon={faInstagram}
          className="sm:text-4xl text-2xl hover:translate-y-[-2px] hover:scale-110 transition-all duration-300"
          onClick={() => handleLinkClick('https://www.instagram.com/j.lane_/')}
        />
        <FontAwesomeIcon
          icon={faLinkedin}
          className="sm:text-4xl text-2xl hover:translate-y-[-2px] hover:scale-110 transition-all duration-300"
          onClick={() => handleLinkClick('https://www.linkedin.com/in/jonathan-lane-81962157/')}
        />
        <FontAwesomeIcon
          icon={faEnvelope}
          className="sm:text-4xl text-2xl hover:translate-y-[-2px] hover:scale-110 transition-all duration-300"
          onClick={() => handleLinkClick('mailto:lane7520@gmail.com')}
        />
      </div>
      <div
        className="sm:text-xl text-lg my-6 font-pixel cursor-pointer tracking-wide hover:translate-y-[-2px] hover:scale-110 transition-all duration-300 text-center"
      >
        <a href="/JonoLaneResume.pdf" target="_blank" rel="noopener noreferrer" className="text-current no-underline">
          Resume
        </a>
      </div>
    </footer>
  );
};

export default Footer;