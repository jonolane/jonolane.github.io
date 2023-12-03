import { Octokit } from "@octokit/rest";

const PERSONAL_ACCESS_TOKEN = process.env.GATSBY_PERSONAL_ACCESS_TOKEN; 

const octokit = new Octokit({
    auth: PERSONAL_ACCESS_TOKEN,
});

async function getRepositories() {
    const response = await octokit.repos.listForAuthenticatedUser();
    return response.data;
}

export { getRepositories };