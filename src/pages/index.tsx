import type { HeadFC, PageProps } from "gatsby"
import React, { useEffect, useState } from "react";
import { fetchRepositories } from "../controllers/githubApi";
import Card from "../components/Card";

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
    <main className="flex flex-col items-center justify-center bg-black">
      <div className="mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {repositories.map((repo) => (
          <Card key={repo.id} name={repo.name} description={repo.description} />
        ))}
      </div>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Jono Lane</title>;