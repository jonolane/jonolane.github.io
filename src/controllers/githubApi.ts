export async function fetchRepositories() {  
    const repoResponse = await fetch("https://api.github.com/user/repos?sort=created", {
      headers: {
        Authorization: `Bearer ${process.env.GATSBY_FINE_GRAINED_ACCESS_TOKEN}`,
      },
    });
  
    if (!repoResponse.ok) {
      throw new Error("Failed to fetch repositories");
    }
  
    const repositories = await repoResponse.json();
    return repositories;
  }

  