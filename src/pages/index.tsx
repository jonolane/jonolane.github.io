import type { HeadFC, PageProps } from "gatsby"
import React, { useEffect, useState } from "react";
import { fetchRepositories } from "../controllers/githubApi";
import Card from "../components/Card";
// import { StaticImage } from "gatsby-plugin-image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faXTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

interface Repository {
  id: number;
  node_id: string;
  name: string;
  full_name: string;
  license: {
    key: string;
    name: string;
    url: string | null;
    spdx_id: string | null;
    node_id: string;
    html_url?: string | undefined;
  } | null;
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
    <div className="relative min-h-screen">
      <div className="absolute inset-0 bg-[url('../images/gradient.jpg')] bg-cover bg-repeat-round opacity-50 "></div>
      <div className="flex flex-col items-center justify-center p-6">
        <head>
          {/* current favorite */}
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

        </head>
        <div className="font-greatVibes text-9xl text-center z-20 mb-6 tracking-wide">
          Jono Lane
        </div>
        <div className="text-4xl my-6 font-pixel">
          :// <span className="type-devTitle tracking-wide"></span>
        </div>
        <div className="flex items-center justify-center h-auto tracking-wide">
          <div className="max-w-screen-lg p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 z-10">
            {repositories.map((repo) => (
              <Card key={repo.id} name={repo.name} description={repo.description} language={repo.language} stargazers_count={repo.stargazers_count} forks_count={repo.forks_count} />
            ))}
          </div>
        </div>
        <div className="flex justify-center z-20 h-auto space-x-6">
          <FontAwesomeIcon icon={faFacebook} className="text-4xl hover:translate-y-[-2px] hover:scale-110 transition-all duration-300" />
          <FontAwesomeIcon icon={faXTwitter} className="text-4xl hover:translate-y-[-2px] hover:scale-110 transition-all duration-300" />
          <FontAwesomeIcon icon={faInstagram} className="text-4xl hover:translate-y-[-2px] hover:scale-110 transition-all duration-300" />
          <FontAwesomeIcon icon={faLinkedin} className="text-4xl hover:translate-y-[-2px] hover:scale-110 transition-all duration-300" />
          <FontAwesomeIcon icon={faEnvelope} className="text-4xl hover:translate-y-[-2px] hover:scale-110 transition-all duration-300" />
        </div>
        <div className="text-xl mt-6 font-pixel cursor-pointer tracking-wide hover:animate-pulse" onClick={() => window.open('https://docs.google.com/document/d/199ejho-lgZ7_QVrCt01p2FxxJJTaxcv4p34mfUHaGCw/edit', '_blank')}>
          Resume
        </div>
      </div>
    </div>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Jono Lane</title>;