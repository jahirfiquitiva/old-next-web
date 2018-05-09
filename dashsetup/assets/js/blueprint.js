function generateBlueprintXML() {
    var content = [];

    var start = '<?xml version="1.0" encoding="utf-8"?>\n<resources>';
    content.push(start);
	
	content.push(createStringTag("icons_preview_picture", ""));

    content.push(
        createStringTag("email", document.getElementById('designer-email').value));

    var appName = document.getElementById('app-name').value;
    if (!isValid(appName)) {
        appName = "Blueprint";
    }

    content.push(createStringTag("email_subject", appName));
    content.push(createStringTag("request_title", appName.trim() + " Icon Request"));
    content.push(createStringTag("request_save_location", "%1$s/" + appName.trim() + "/Requests/"));

    content.push(
        createBoolTag("xml_drawable_enabled",
                      document.getElementById('xml-drawable').checked.toString()));

    content.push(
        createBoolTag("with_drawer_texts",
                      document.getElementById('drawer-text').checked.toString()));

    content.push(
        createBoolTag("enable_colored_cards",
                      document.getElementById('colored-cards').checked.toString()));

    var maxApps = document.getElementById('max-apps').value;
    if (maxApps < 0) {
        maxApps = -1;
    }
    content.push(createIntegerTag("max_apps_to_request", maxApps));

    var timeLimit = document.getElementById('time-limit').value;
    if (timeLimit < 0) {
        timeLimit = 0;
    }
    content.push(createIntegerTag("time_limit_in_minutes", timeLimit));

    var host = document.getElementById('arctic-host').value;
    if (isValid(host)) {
        content.push(createStringTag("arctic_backend_host", host));

        var apiKey = document.getElementById('arctic-api-key').value;
        if (isValid(apiKey)) {
            content.push(createStringTag("arctic_backend_api_key", apiKey));
        }
    }

    var end = '\n</resources>';
    content.push(end);

    var xmlContent = '';
    for (var i = 0; i < content.length; i++) {
        xmlContent += content[i];
    }

    return xmlContent;
}