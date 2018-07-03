function generateFramesXML() {
    var content = [];

    var start = '<?xml version="1.0" encoding="utf-8"?>\n<resources>';
    content.push(start);

    content.push(
        createBoolTag("use_old_json_format",
                      document.getElementById('old-json-check').checked.toString()));

    content.push(
        createBoolTag("enable_colored_tiles",
                      document.getElementById('colored-tiles').checked.toString()));

    content.push(
        createBoolTag("enable_filled_collection_preview",
                      document.getElementById('filled-collection-preview').checked.toString()));

    content.push(
        createBoolTag("show_bottom_sheet",
                      document.getElementById('bottom-sheet').checked.toString()));

    content.push(
        createBoolTag("notifications_enabled_by_default",
                      document.getElementById('notifications').checked.toString()));

    content.push(
        createBoolTag("show_icons_in_tabs",
                      document.getElementById('icons-in-tabs').checked.toString()));

    content.push(
        createBoolTag("show_texts_in_tabs",
                      document.getElementById('texts-in-tabs').checked.toString()));

    var end = '\n</resources>';
    content.push(end);

    var xmlContent = '';
    for (var i = 0; i < content.length; i++) {
        xmlContent += content[i];
    }

    return xmlContent;
}