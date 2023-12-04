export async function fetchRepositories() {
    const accessToken = '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'
  
    const repoResponse = await fetch("https://api.github.com/user/repos", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  
    if (!repoResponse.ok) {
      throw new Error("Failed to fetch repositories");
    }
  
    const repositories = await repoResponse.json();
    return repositories;
  }