function getLatestReleaseInfo(user, repo, updateWiki, translate, key) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.github.com/repos/' + user + '/' + repo + '/releases/latest', true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            let release = JSON.parse(xhr.responseText);
            let repoUrl = 'https://github.com/' + user + '/' + repo;
            let repoNameId = repo.toLowerCase();

            // Create column

            let column = document.createElement('div');
            column.classList.add('column');
            // column.classList.add('is-mobile');
            // is-mobile is-one-third-tablet is-one-third-desktop
            column.classList.add('is-full-mobile');
            column.classList.add('is-one-third-tablet');
            column.classList.add('is-one-third-desktop');

            // Create box
            let box = document.createElement('div');
            box.classList.add('card');
            box.classList.add('change');
            box.classList.add('has-same-height');
            box.id = repo.toLowerCase();

            let content = document.createElement('div');
            content.classList.add('card-content');

            // Create title
            let title = document.createElement('h4');
            title.classList.add('title');
            title.innerHTML = repo + ' ';

            // Create version element
            let versionEle = document.createElement('span');
            versionEle.classList.add('tag');
            versionEle.classList.add('is-primary');
            versionEle.classList.add('is-medium');
            versionEle.classList.add('is-rounded');
            if (versionEle !== null && versionEle !== undefined) {
                let version = release.tag_name;
                if (version !== null && version !== undefined) {
                    versionEle.innerHTML = version;
                } else {
                    versionEle.innerHTML = '?';
                }
            }
            title.appendChild(versionEle);
            content.appendChild(title);

            // Create release date element
            let dateStamp = release.published_at;
            if (dateStamp !== null && dateStamp !== undefined) {
                let date = new Date(dateStamp).toLocaleDateString();
                let dateEle = document.createElement('p');
                dateEle.classList.add('subtitle');
                dateEle.classList.add('is-6');
                dateEle.classList.add('release-date');
                if (dateEle !== null && dateEle !== undefined) {
                    dateEle.innerText = 'Released on: ' + date;
                }
                content.appendChild(dateEle);
            }

            // Create changes content
            let body = release.body;
            if (body !== null && body !== undefined) {
                let converter = new showdown.Converter();
                if (converter !== null && converter !== undefined) {
                    let html = converter.makeHtml(body);
                    if (html !== null && html !== undefined) {
                        let changesEle = document.createElement('p');
                        changesEle.classList.add('release-body');
                        changesEle.classList.add('has-text-left');
                        if (changesEle !== null && changesEle !== undefined) {
                            changesEle.innerHTML = html;
                        }
                        content.appendChild(changesEle);
                    }
                }
            }

            box.appendChild(content);

            let footer = document.createElement('div');
            footer.classList.add('card-footer');
            footer.classList.add('has-text-centered');
            footer.classList.add('is-centered');

            let btnsContainer = document.createElement('div');
            btnsContainer.classList.add('buttons');
            btnsContainer.classList.add('has-text-centered');
            btnsContainer.classList.add('is-centered');
            btnsContainer.style.minWidth = "100%";

            // Create View on GitHub button
            let repoBtn = document.createElement('a');
            repoBtn.classList.add('button');
            repoBtn.classList.add('is-github');
            repoBtn.classList.add('social-btn');
            repoBtn.setAttribute('data-balloon', 'View on GitHub');
            repoBtn.setAttribute('data-balloon-pos', 'up');
            repoBtn.href = repoUrl;
            repoBtn.target = '_blank';

            let repoBtnIcon = document.createElement('i');
            repoBtnIcon.classList.add('mdi');
            repoBtnIcon.classList.add('mdi-18px');
            repoBtnIcon.classList.add('mdi-github-circle');

            repoBtn.innerHTML = repoBtnIcon.outerHTML; // + ' View on GitHub';
            btnsContainer.appendChild(repoBtn);

            // Create How to update Button
            if (updateWiki) {
                let wikiBtn = document.createElement('a');
                wikiBtn.classList.add('button');
                wikiBtn.classList.add('is-github');
                wikiBtn.classList.add('social-btn');
                wikiBtn.setAttribute('data-balloon', 'Update');
                wikiBtn.setAttribute('data-balloon-pos', 'up');
                wikiBtn.href = 'https://github.com/' + user + '/' + repo + '/wiki/How-to-update';
                wikiBtn.target = '_blank';

                let wikiBtnIcon = document.createElement('i');
                wikiBtnIcon.classList.add('mdi');
                wikiBtnIcon.classList.add('mdi-help-circle');

                wikiBtn.innerHTML = wikiBtnIcon.outerHTML; //  + ' How to Update';
                btnsContainer.appendChild(wikiBtn);
            }

            // Create translation button
            if (translate) {
                let translateBtn = document.createElement('a');
                translateBtn.classList.add('button');
                translateBtn.classList.add('is-crowdin');
                translateBtn.classList.add('social-btn');
                translateBtn.setAttribute('data-balloon', 'Translate');
                translateBtn.setAttribute('data-balloon-pos', 'up');
                translateBtn.href = 'https://crowdin.com/project/' + repoNameId;
                translateBtn.target = '_blank';

                let translateBtnIcon = document.createElement('i');
                translateBtnIcon.classList.add('mdi');
                translateBtnIcon.classList.add('mdi-translate');

                translateBtn.innerHTML = translateBtnIcon.outerHTML; // + ' Translate';
                btnsContainer.appendChild(translateBtn);
            }

            // Create download button

            let downloadUrl = repoUrl + '/releases/latest/';
            let fileSize = 0;

            let assets = release.assets;
            if (assets !== null && assets !== undefined) {
                let asset = assets[0];
                if (asset !== null && asset !== undefined) {
                    downloadUrl = asset.browser_download_url;
                    fileSize = asset.size;
                }
            }

            if (fileSize > 0) {
                let downloadBtn = document.createElement('a');
                downloadBtn.classList.add('button');
                downloadBtn.classList.add('is-primary');
                downloadBtn.classList.add('social-btn');
                downloadBtn.setAttribute('data-balloon', `Download (${formatBytes(fileSize)})`);
                downloadBtn.setAttribute('data-balloon-pos', 'up');
                downloadBtn.href = downloadUrl;
                downloadBtn.target = '_blank';

                let downloadBtnIcon = document.createElement('i');
                downloadBtnIcon.classList.add('mdi');
                downloadBtnIcon.classList.add('mdi-download');

                downloadBtn.innerHTML = downloadBtnIcon.outerHTML; // + ' Download (' +
                                                                   // formatBytes(fileSize) + ')';
                btnsContainer.appendChild(downloadBtn);
            }

            footer.appendChild(btnsContainer);
            box.appendChild(footer);

            // Add finished box to column
            column.appendChild(box);

            // Add column to all columns
            let columns = document.getElementById('changes-content');
            if (columns !== null && columns !== undefined) {
                columns.appendChild(column);
            }

            // Hide loading btn
            let loadingBtn = document.getElementById('loading-btn');
            if (loadingBtn !== null && loadingBtn !== undefined) {
                loadingBtn.style.display = 'none';
            }

            getInfoOf(key + 1);
        }
    };
    xhr.send(null);
}

function formatBytes(a, b) {
    if (0 === a) {
        return "0 B";
    }
    let c = 1024, d = b || 2, e = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"],
        f = Math.floor(Math.log(a) / Math.log(c));
    return parseFloat((a / Math.pow(c, f)).toFixed(d)) + " " + e[f]
}

function getInfoOf(repoId) {
    let repos = [
        {user: 'jahirfiquitiva', name: 'Frames', updateWiki: true, translate: true},
        {user: 'jahirfiquitiva', name: 'Kuper', updateWiki: true, translate: true},
        {user: 'jahirfiquitiva', name: 'Blueprint', updateWiki: true, translate: true},
        {user: 'jahirfiquitiva', name: 'ChipView', updateWiki: false, translate: false},
        {user: 'javiersantos', name: 'PiracyChecker', updateWiki: false, translate: false}
    ];
    let repo = repos[repoId];
    if (repo !== null && repo !== undefined) {
        getLatestReleaseInfo(repo.user, repo.name, repo.updateWiki, repo.translate, repoId)
    }
}

function closeThis() {
    window.close();
    window.top.close();
}

window.onload = function () {
    // Clear all columns
    let columns = document.getElementById('changes-columns');
    if (columns !== null && columns !== undefined) {
        columns.innerHTML = '';
    }
    getInfoOf(0);
};