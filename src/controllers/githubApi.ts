export async function fetchRepositories() {
    const accessToken = process.env.GATSBY_FINE_GRAINED_ACCESS_TOKEN;
  
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