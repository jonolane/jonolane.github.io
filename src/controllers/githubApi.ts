export async function fetchRepositories() {  
    const repoResponse = await fetch("https://api.github.com/user/repos", {
      headers: {
        Authorization: `Bearer ${process.env.GH_TOKEN}`,
      },
    });
  
    if (!repoResponse.ok) {
      throw new Error("Failed to fetch repositories");
    }
  
    const repositories = await repoResponse.json();
    return repositories;
  }