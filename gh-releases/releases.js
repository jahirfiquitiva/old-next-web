function getLatestRelease() {
  let element = document.querySelector('meta[property="repo"]');
  let repo = element && element.getAttribute('content');
  if (repo !== undefined && repo !== null && repo.length > 0) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.github.com/repos/jahirfiquitiva/' + repo + '/releases/latest',
      true);
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        let release = JSON.parse(xhr.responseText);
        let downloadUrl = 'https://github.com/jahirfiquitiva/' + repo + '/releases/latest/';
        let assets = release.assets || [];
        if (assets !== null && assets !== undefined && assets.length > 0) {
          let asset = assets[0];
          if (asset !== null && asset !== undefined) {
            downloadUrl = asset.browser_download_url || downloadUrl;
          }
          document.getElementById('message').innerHTML =
            'Download started! 😀<br>Feel free to close this tab 😉';
          window.location.href = downloadUrl;
        } else {
          document.getElementById('message').innerHTML =
            'An unexpected error occurred 😞<br>I will redirect you to <a href="'
            + downloadUrl + '">GitHub releases</a>...';
          window.location.href = downloadUrl;
        }
      }
    };
    xhr.send(null);
  }
}

function closeThis() {
  window.close();
  window.top.close();
}

window.onload = function () {
  getLatestRelease();
};
