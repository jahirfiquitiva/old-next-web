const repos = [
  { user: 'jahirfiquitiva', name: 'Frames', updateWiki: true, translate: true },
  { user: 'jahirfiquitiva', name: 'Kuper', updateWiki: true, translate: true },
  { user: 'jahirfiquitiva', name: 'Blueprint', updateWiki: true, translate: true },
  // { user: 'jahirfiquitiva', name: 'ChipView', updateWiki: false, translate: false },
  { user: 'javiersantos', name: 'PiracyChecker', updateWiki: false, translate: false },
];

const { GITHUB_API_TOKEN: githubApiToken = '' } = process.env;
const authHeaders = githubApiToken && githubApiToken.length > 0
  ? { headers: { Authorization: githubApiToken } }
  : {};

const fetchRepoData = async (repo) => {
  const { user, name, updateWiki, translate } = repo;
  const dataRequest = await fetch(`https://api.github.com/repos/${user}/${name}/releases/latest`,
    authHeaders);
  const data = await dataRequest.json();
  const { published_at: dateStamp, tag_name: version, body: changelog, assets = [] } = data;
  const extraRepoData = {
    url: `https://github.com/${user}/${name}`,
    dateStamp,
  };
  if (dateStamp) extraRepoData.date = new Date(dateStamp).toLocaleDateString();
  if (version) extraRepoData.version = version;
  if (changelog && changelog.length > 0) extraRepoData.changelog = changelog.toString();
  if (updateWiki) {
    extraRepoData.wiki = `https://github.com/${user}/${name}/wiki/How-to-update`;
  }
  if (translate) {
    extraRepoData.translate = `https://crowdin.com/project/${name}/invite`;
  }
  const defaultDownloadLink = `https://github.com/${user}/${name}/releases/latest/`;
  let downloadLink = defaultDownloadLink;
  if (assets) {
    const [apk] = assets;
    if (apk) {
      downloadLink = apk.browser_download_url || defaultDownloadLink;
    }
  }
  return {
    ...repo,
    ...extraRepoData,
    changelog: changelog || '*No data available right now*',
    download: downloadLink,
  };
};

export default (_, res) => {
  return Promise.all(repos.map(fetchRepoData))
    .then((results) => {
      return res.status(200)
        .json({ success: true, results });
    })
    .catch((err) => {
      return res.status(400)
        .json({
          success: false,
          error: err.message || err.stackTrace.toString() || 'Unexpected error',
        });
    });
};
