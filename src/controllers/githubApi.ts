import { Octokit } from "@octokit/rest";

export async function fetchRepositories() {
  const octokit = new Octokit({ 
    auth: process.env.TOKEN,
  });

  try {
    const response = await octokit.request("GET /user/repos", {
      headers: {
        Accept: "application/vnd.github+json",
        "X-GitHub-Api-Version": "2022-11-28",
      },
    });

    const repositories = response.data;
    return repositories;
  } catch (error) {
    throw new Error("Failed to fetch repositories");
  }
}

/*
export async function fetchRepositories() {  
    const repoResponse = await fetch("https://api.github.com/user/repos", {
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      },
    });
  
    if (!repoResponse.ok) {
      throw new Error("Failed to fetch repositories");
    }
  
    const repositories = await repoResponse.json();
    return repositories;
  }
  */