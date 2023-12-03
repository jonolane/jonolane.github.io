async function authenticateToGitHub() {
    const clientId = "f4dd4b030b4403ade3cb";
    const clientSecret = "39f3bf3502df43c59aa044284659bc75449411d2";
    const scopes = ["repo"];
  
    // Step 1: Get the access token
    const response = await fetch(
      `/api/github/access_token?client_id=${clientId}&client_secret=${clientSecret}`,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          grant_type: "client_credentials",
          scope: scopes.join(" "),
        }),
      }
    );
  
    if (!response.ok) {
      throw new Error("Failed to authenticate with GitHub");
    }
  
    const data = await response.json();
    const accessToken = data.access_token;
  
    // Step 2: Use the access token to make API requests
    const repoResponse = await fetch("/api/github/user/repos", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  
    if (!repoResponse.ok) {
      throw new Error("Failed to fetch repositories");
    }
  
    const repositories = await repoResponse.json();
    console.log(repositories);
  }
  
  authenticateToGitHub().catch(console.error);

export { authenticateToGitHub };

// using personal access token that has a rate limit
/*
import { Octokit } from "@octokit/rest";

const octokit = new Octokit({
    auth: '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',
});

async function getRepositories() {
    const response = await octokit.repos.listForAuthenticatedUser();
    return response.data;
}

export { getRepositories };
*/