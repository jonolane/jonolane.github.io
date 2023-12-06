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

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-cover bg-[url('../images/gradient.jpg')] opacity-90">
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
      <div className="font-greatVibes text-9xl text-center text-white z-20 h-auto mb-6">
        Jono Lane
      </div>
      <div className="text-4xl text-white my-6 font-pixel">
        :// <span className="type-devTitle"></span>
      </div>
      {/*}
      <StaticImage
        src="../images/gradient.jpg"
        alt="Background Image"
        className="absolute inset-0 w-full h-full opacity-90"
        placeholder="none"
        layout="fullWidth"
        formats={["auto", "webp", "avif"]}
        loading="eager"
      />
  */}
      <div className="flex items-center justify-center h-auto">
        <div className="max-w-screen-lg p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 z-10">
          {repositories.map((repo) => (
            <Card key={repo.id} name={repo.name} description={repo.description} />
          ))}
        </div>
      </div>
      <div className="flex justify-center z-20 h-auto space-x-6">
        <FontAwesomeIcon icon={faFacebook} className="text-white text-4xl hover:animate-ping" />
        <FontAwesomeIcon icon={faXTwitter} className="text-white text-4xl hover:animate-ping" />
        <FontAwesomeIcon icon={faInstagram} className="text-white text-4xl hover:animate-ping" />
        <FontAwesomeIcon icon={faLinkedin} className="text-white text-4xl hover:animate-ping" />
        <FontAwesomeIcon icon={faEnvelope} className="text-white text-4xl hover:animate-ping" />
      </div>
      <div className="text-xl text-white mt-6 font-pixel">
        Resume
      </div>
    </div>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Jono Lane</title>;