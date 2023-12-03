import { Octokit } from "@octokit/rest";

const octokit = new Octokit({
    auth: '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',
});

async function getRepositories() {
    const response = await octokit.repos.listForAuthenticatedUser();
    return response.data;
}

export { getRepositories };