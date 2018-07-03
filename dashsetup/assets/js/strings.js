function generateStringsXML() {
    var content = [];

    var start = '<?xml version="1.0" encoding="utf-8"?>\n<resources>';
    content.push(start);

    var nameInput = document.getElementById('app-name').value;
    if (isValid(nameInput)) {
        nameInput = "My App Name"
    }
    content.push(createStringTag("app_name", nameInput));
    content.push(createStringTag("default_download_folder", '%1$s/' + nameInput + '/Wallpapers'));

    var descriptionInput = document.getElementById('app-description').value;
    if (isValid(descriptionInput)) {
        content.push(createStringTag("app_description", descriptionInput));
    }

    var jsonInput = document.getElementById('json-url').value;
    if (isValid(jsonInput) && validateURL(jsonInput)) {
        content.push(createStringTag("json_url", jsonInput));
    }

    var end = '\n</resources>';
    content.push(end);

    var xmlContent = '';
    for (var i = 0; i < content.length; i++) {
        xmlContent += content[i];
    }

    return xmlContent;
}