import { Octokit } from "@octokit/rest";
import { createOAuthAppAuth, OAuthAppDeviceFlowAuthOptions } from "@octokit/auth-oauth-app";

async function authenticateToGitHub() {
  const auth = createOAuthAppAuth({
    clientId: "f4dd4b030b4403ade3cb",
    clientSecret: "39f3bf3502df43c59aa044284659bc75449411d2",
  });

  const authentication = await auth({
    type: "oauth-user",
    onVerification: () => {
      // Handle the verification process here if needed
    },
  } as OAuthAppDeviceFlowAuthOptions);

  console.log("Authentication successful");

  const octokit = new Octokit({
    auth: authentication.token,
  });

  // Use the authenticated Octokit instance to make API requests
  const response = await octokit.repos.listForAuthenticatedUser();
  console.log(response.data);
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