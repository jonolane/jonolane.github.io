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
  const [isShowFooter, setShowFooter] = useState<boolean>(false);
  const appContext = useContext(AppContext);
  const { isDarkMode } = appContext || {};
  const [hasInitialLoadOccurred, setHasInitialLoadOccurred] = useState(
    typeof window !== 'undefined' && window.sessionStorage.getItem('hasInitialLoadOccurred') === 'true'
  );
  useEffect(() => {
    const getRepositories = async () => {
      try {
        const repositories = await fetchRepositories();
        setRepositories(repositories);
        setShowFooter(true);
        console.log(repositories);
      } catch (error) {
        console.error(error);
      }
    };

    getRepositories();
  }, []);

  // one time animation per session
  useEffect(() => {
    if (isShowFooter && !hasInitialLoadOccurred && typeof window !== 'undefined') {
      window.sessionStorage.setItem('hasInitialLoadOccurred', 'true');
      setHasInitialLoadOccurred(true);
    }
  }, [isShowFooter]);

  const animationClasses = hasInitialLoadOccurred ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0';

  // useEffect(() => { console.log(isDarkMode) });

  // flex flex-col justify-center items-center on parent div centers elements on tablet but breaks safari mobile queries
  return (
    <div className="min-h-screen relative tablet:flex tablet:flex-col tablet:justify-center tablet:items-center">
      {/* <div className={`absolute inset-0 bg-[url('../images/gradient3.jpg')] bg-cover bg-repeat-round opacity-70`} /> */}
      <div className={`relative ${isDarkMode ? 'bg-black text-white' : ''}`}>
        <div className="flex flex-col sm:items-center justify-center sm:p-6 z-50">
          <Navbar />
          <div className="z-50">
            <div className={`xs:text-4xl xxs:text-3xl text-2xl sm:my-6 mt-10 font-pixel ${isDarkMode ? 'text-white' : 'text-black'} sm:text-center sm:ml-auto ml-6`}>
              <span className="chrome:sm:inline firefox:sm:inline hidden">:// </span><span className="type-devTitle tracking-wide"></span>
            </div>
            <p className="xs:text-base xs:leading-relaxed xxs:text-sm xxs:leading-relaxed text-xs leading-relaxed sm:hidden mt-4 mx-6 xs:mb-20 mb-16 tracking-wide max-w-md">
              I'm Jono Lane, a full-stack developer based in Nashville. I enjoy creating impactful products that adapt to the ever-changing landscape of technology.
            </p>
            <h2 className={`sm:hidden border-t ${isDarkMode ? 'border-white' : 'border-black'} border-solid mx-7 uppercase pt-2 tracking-wide`}>
              Latest work
            </h2>
          </div>

          <main className={`z-50 transition-all duration-500 ${animationClasses}`}>
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
          {isShowFooter && <Footer className={`transition-all duration-500 ${animationClasses}`} />}
          <Head isDarkMode={isDarkMode} />
        </div>
      </div>
    </div>
  );
};

interface HeadProps {
  isDarkMode: boolean | undefined;
}

// "export" here breaks on dev server
export const Head: React.FC<HeadProps> = () => {
  const appContext = useContext(AppContext);
  const { isDarkMode } = appContext || {};

  return (
    <>
      {/* og: tags for seo crawling */}
      {/* preview1.gif for linkedin */}
      <meta name="image" property="og:image" content="https://jonolane.io/preview2.jpg" />
      <meta name="title" property="og:title" content="Jono Lane" />
      <meta name="description" property="og:description" content="I'm Jono Lane, a full-stack developer based in Nashville. I enjoy creating impactful products that adapt to the ever-changing landscape of technology." />
      {/* <meta name="url" property="og:url" content="https://jonolane.io" /> */}

      {/* twitter SEO cards */}
      <meta name="twitter:card" property="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content="https://jonolane.io/preview2.jpg" />
      <meta name="twitter:title" property="twitter:title" content="Jono Lane" />
      <meta name="twitter:description" property="twitter:description" content="I'm Jono Lane, a full-stack developer based in Nashville. I enjoy creating impactful products that adapt to the ever-changing landscape of technology." />

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

      {/* fall back would be to lose the safari directives */}

      {/* for .svg background
          before:bg-[url("../images/gradient7OMG.svg")]  
          before:bg-cover 
          before:bg-center
          before:bg-no-repeat 
      */}

      {/* safari:before:absolute
          safari:before:md:fixed  not necessary? */}
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