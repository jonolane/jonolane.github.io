import type { HeadFC, PageProps } from "gatsby"
import React, { useEffect, useState } from "react";
import { fetchRepositories } from "../controllers/githubApi";
import Card from "../components/Card";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faXTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

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

  // alternative custom gradient for parent div: bg-gradient-to-br from-purple-500 via-green-300 to-red-500

  return (
    <div className="relative min-h-screen text-black">
      <div className="absolute inset-0 bg-[url('../images/gradient3.jpg')] bg-cover bg-repeat-round opacity-70"></div>
      <div className="flex flex-col items-center justify-center p-6">
        <div className="sm:text-9xl text-8xl font-arizonia text-center z-50 mb-4 mt-6 lg:mt-8 md:mt-8 tracking-wide">
          Jono Lane
        </div>
        <div className="sm:text-4xl md:text-4xl text-3xl my-6 font-pixel text-black z-30">
          :// <span className="type-devTitle tracking-wide"></span>
        </div>
        <div className="flex items-center justify-center h-auto tracking-wide mb-6">
          <div className="max-w-screen-lg p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 z-10">
            {repositories.map((repo) => (
              <Card key={repo.id} name={repo.name} description={repo.description} language={repo.language} stargazers_count={repo.stargazers_count} forks_count={repo.forks_count} url={repo.html_url} />
            ))}
          </div>
        </div>
        <div className="flex justify-center z-20 h-auto space-x-6">
          <FontAwesomeIcon icon={faFacebook} className="text-4xl hover:translate-y-[-2px] hover:scale-110 transition-all duration-300" onClick={() => window.open('https://www.facebook.com/jonathan.lane.5473', '_blank')} />
          <FontAwesomeIcon icon={faXTwitter} className="text-4xl hover:translate-y-[-2px] hover:scale-110 transition-all duration-300" onClick={() => window.open('https://twitter.com/jlane_', '_blank')} />
          <FontAwesomeIcon icon={faInstagram} className="text-4xl hover:translate-y-[-2px] hover:scale-110 transition-all duration-300" onClick={() => window.open('https://www.instagram.com/j.lane_/', '_blank')} />
          <FontAwesomeIcon icon={faLinkedin} className="text-4xl hover:translate-y-[-2px] hover:scale-110 transition-all duration-300" onClick={() => window.open('https://www.linkedin.com/in/jonathan-lane-81962157/', '_blank')} />
          <FontAwesomeIcon icon={faEnvelope} className="text-4xl hover:translate-y-[-2px] hover:scale-110 transition-all duration-300" onClick={() => window.open('mailto:lane7520@gmail.com', '_blank')} />
        </div>
        <div className="text-xl my-6 font-pixel z-30 cursor-pointer tracking-wide hover:translate-y-[-2px] hover:scale-110 transition-all duration-300" onClick={() => window.open('https://docs.google.com/document/d/199ejho-lgZ7_QVrCt01p2FxxJJTaxcv4p34mfUHaGCw/edit', '_blank')}>
          Resume
        </div>
      </div>
    </div>
  );
};

export default IndexPage;

// export const Head: HeadFC = () => <title>Jono Lane</title>;

export const Head: HeadFC = () => (
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
  </>
)