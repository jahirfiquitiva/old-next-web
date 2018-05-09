function GetLatestReleaseInfo() {
    var element = document.querySelector('meta[property="apk:name"]');
    var repo = element && element.getAttribute("content");
    if (repo !== undefined && repo !== null) {
        $.getJSON("https://api.github.com/repos/jahirfiquitiva/" + repo + "/releases/latest")
            .done(function (release) {
                var asset = release.assets[0];
                if (asset !== undefined && asset !== null) {
                    window.location.href = asset.browser_download_url;
                    document.getElementById("message").innerHTML = "Download started! 😀<br>Feel free to close this tab 😉";
                } else {
                    var link = "https://github.com/jahirfiquitiva/" + repo + "/releases/latest/";
                    document.getElementById("message").innerHTML =
                        "Error :( Redirecting you to <a href=\"" + link + "\">GitHub releases</a>...";
                    window.location.href = link;
                }
            });
    }
}

function closeThis(){
    window.close();
    window.top.close();
}

window.onload = function(){
    GetLatestReleaseInfo();
};