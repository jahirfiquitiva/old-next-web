const userApiUrl = 'https://api.github.com/users/jahirfiquitiva';
const { GITHUB_API_TOKEN: githubApiToken = '' } = process.env;
const authHeaders = githubApiToken && githubApiToken.length > 0
  ? { headers: { Authorization: githubApiToken } }
  : {};

// Code copied from 'https://github.com/leerob/leerob.io/blob/master/pages/api/github.js'
export default async (_, res) => {
  try {
    const userRequest = await fetch(userApiUrl, authHeaders);
    const userReposRequest = await fetch(`${userApiUrl}/repos`, authHeaders);

    const user = await userRequest.json();
    const repositories = await userReposRequest.json();

    const mine = repositories.filter((repo) => !repo.fork);
    const stars = mine.reduce((accumulator, repository) => {
      const { stargazers_count: stargazers = 0 } = repository;
      return accumulator + stargazers;
    }, 0);

    return res.status(200).json({
      success: true,
      followers: user.followers,
      stars,
    });
  } catch (err) {
    return res.status(400)
      .send({
        success: false,
        error: err.message || err.stackTrace.toString() || 'Unexpected error',
      });
  }
};
