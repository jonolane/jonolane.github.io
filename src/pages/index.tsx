// import * as React from "react"
/*
import type { HeadFC, PageProps } from "gatsby"
import React, { useEffect, useState } from "react";
import { authenticateToGitHub } from "../controllers/githubApi";

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
    authenticateToGitHub().catch(console.error);
  }, []);

  return (
    <main className="flex items-center justify-center h-screen bg-black">
      <div className="max-w-md mx-auto p-4">
        {repositories.map((repo) => (
          <div key={repo.id} className="mb-4">
            <h3 className="text-white text-xl font-bold">{repo.name}</h3>
            <p className="text-gray-300">{repo.description}</p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Jono Lane</title>;
*/

import type { HeadFC, PageProps } from "gatsby"
import React, { useEffect, useState } from "react";
import { authenticateToGitHub } from "../controllers/githubApi";

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
    const fetchData = async () => {
      try {
        const repos = await authenticateToGitHub();
        if (repos !== undefined && repos !== null) {
          setRepositories(repos);
        }
      } catch (error) {
        console.error("Error fetching repositories:", error);
      }
    };
  
    fetchData();
  }, []);

  return (
    <main className="flex items-center justify-center h-screen bg-black">
      <div className="max-w-md mx-auto p-4">
        {repositories.map((repo) => (
          <div key={repo.id} className="mb-4">
            <h3 className="text-white text-xl font-bold">{repo.name}</h3>
            <p className="text-gray-300">{repo.description}</p>
            {/* Add more details or styling as needed */}
          </div>
        ))}
      </div>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Jono Lane</title>;