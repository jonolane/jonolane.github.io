import type { HeadFC, PageProps } from "gatsby"
import React, { useEffect, useState, useContext } from "react";
import { fetchRepositories } from "../controllers/githubApi";
import Card from "../components/Card";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { AppContext } from '../controllers/AppContext';
// import { before } from "node:test";

interface Repository {
  id: number;
  node_id: string;
  name: string;
  full_name: string;
  html_url: string | undefined;
  description: string | null;
  language: string | null;
  forks_count: number;
  stargazers_count: number;
}

const IndexPage: React.FC<PageProps> = () => {
  const [repositories, setRepositories] = useState<Repository[]>([]);
  // dark theme
  const appContext = useContext(AppContext);
  const { isDarkMode } = appContext || {};

  useEffect(() => {
    const getRepositories = async () => {
      try {
        const repositories = await fetchRepositories();
        setRepositories(repositories);
        console.log(repositories);
      } catch (error) {
        console.error(error);
      }
    };

    getRepositories();
  }, []);

  useEffect(() => { console.log(isDarkMode) });

  // alternative custom gradient for parent div: bg-gradient-to-br from-purple-500 via-green-300 to-red-500

  return (
    <div className="min-h-screen relative">
      {/* <div className={`absolute inset-0 bg-[url('../images/gradient3.jpg')] bg-cover bg-repeat-round opacity-70`} /> */}
      <div className={`relative ${isDarkMode ? 'bg-black text-white' : ''}`}>
        <div className="flex flex-col sm:items-center justify-center sm:p-6 z-50">
          <Navbar />
          <div className="z-50">
            <div className={`xs:text-4xl xxs:text-3xl text-2xl sm:my-6 mt-10 font-pixel ${isDarkMode ? 'text-white' : 'text-black'} sm:text-center sm:ml-auto ml-6`}>
              <span className="max-sm:hidden">:// </span><span className="type-devTitle tracking-wide"></span>
            </div>
            <p className="xs:text-base xs:leading-relaxed xxs:text-sm xxs:leading-relaxed text-xs leading-relaxed sm:hidden mt-4 mx-6 xs:mb-20 mb-16 tracking-wide max-w-md">
              I'm Jono Lane, a full-stack developer based in Nashville. I enjoy creating impactful products that adapt to the ever-changing landscape of technology.
            </p>
            <h2 className={`sm:hidden border-t ${isDarkMode ? 'border-white' : 'border-black'} border-solid mx-7 uppercase pt-2 tracking-wide`}>
              Latest work
            </h2>
          </div>

          <main className="z-50">
            {/* bio used to live here */}
            <div className="flex items-center justify-center h-auto tracking-wide mb-6">
              <div className="max-w-screen-lg sm:p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 sm:gap-4 gap-2 z-10 px-6 pb-6 pt-4">
                {repositories.map((repo) => (
                  <Card
                    key={repo.id}
                    name={repo.name}
                    description={repo.description}
                    language={repo.language}
                    stargazers_count={repo.stargazers_count}
                    forks_count={repo.forks_count}
                    url={repo.html_url}
                  />
                ))}
              </div>
            </div>
          </main>
          <Footer />
          <Head isDarkMode={isDarkMode} />
        </div>
      </div>
    </div>
  );
};

interface HeadProps {
  isDarkMode: boolean | undefined;
}

const Head: React.FC<HeadProps> = () => {
  const appContext = useContext(AppContext);
  const { isDarkMode } = appContext || {};

  // attempting to drop useEffect to improve performance
  /*
  useEffect(() => {
    document.body.className = isDarkMode ? 'before:bg-black text-white before:z-[-1]' : 'before:fixed before:bg-[url("../images/gradient3.jpg")] before:bg-cover before:bg-repeat-round before:opacity-60 before:z-[-1] before:inset-0';
  }, [isDarkMode]);
  */

  /*
  useEffect(() => {
    document.body.className = isDarkMode ? 'bg-black text-white before:z-[-1]' : 'before:fixed before:bg-[url("../images/gradient3.jpg")] before:bg-cover before:bg-repeat-round before:opacity-60 before:z-[-1] before:inset-0';
  }, [isDarkMode]);
  */

  return (
    <>
      <title>Jono Lane</title>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap" rel="stylesheet" />

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Arizonia&display=swap" rel="stylesheet" />

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=WindSong&display=swap" rel="stylesheet" />

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Pixelify+Sans&display=swap" rel="stylesheet" />

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap" rel="stylesheet" />

      {/* <link rel="preload" href="../images/gradient3.jpg" as="image" /> */}

      {/* ::before directive might be creating slow bg image load. opacity-60 or 70 was here */}
      {/* before:md:fixed before:absolute works on safari, before:fixed works on chrome | need to just somehow lose bg-background on sm: for chrome!*/}
      {/* fall back would be to lose the safari directives */}
      <body
        className={`
          ${isDarkMode
            ? 'before:bg-black text-white'
            : `safari:before:absolute
               safari:before:md:fixed
               before:fixed
               before:bg-[url("../images/gradient4.jpg")] 
               before:bg-cover 
               before:bg-repeat-round 
               before:inset-0 
               before:z-[-1]`
          }
      `}
      />    
    </>
  )
}

export default IndexPage;