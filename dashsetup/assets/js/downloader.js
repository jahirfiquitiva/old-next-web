function downloadFile(fileName, content) {
    var pom = document.createElement('a');
    pom.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(content));
    pom.setAttribute('download', fileName);

    if (document.createEvent) {
        var event = document.createEvent('MouseEvents');
        event.initEvent('click', true, true);
        pom.dispatchEvent(event);
    }
    else {
        pom.click();
    }
}

function downloadEverything() {
    var accepted = document.getElementById('terms-check').checked;
    if (!accepted) {
        alert("You must accept and understand the disclaimer information!");
        return false;
    }

    var zip = new JSZip();
    var valuesFolder = zip.folder("values");

    valuesFolder.file('strings.xml', generateStringsXML());
    valuesFolder.file('colors.xml', generateColorsXML());
    valuesFolder.file('general_configs.xml', generateGeneralXML());
    valuesFolder.file('frames_configs.xml', generateFramesXML());
    valuesFolder.file('kuper_configs.xml', generateKuperXML());
    valuesFolder.file('blueprint_configs.xml', generateBlueprintXML());

    var appName = document.getElementById('app-name').value;
    if (!isValid(appName)) {
        appName = "Blueprint";
    }

    zip.generateAsync({type: "blob"})
        .then(function (content) {
            // see FileSaver.js
            saveAs(content, appName + "-config-files.zip");
        });
}