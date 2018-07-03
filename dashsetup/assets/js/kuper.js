function generateKuperXML() {
    var content = [];

    var start = '<?xml version="1.0" encoding="utf-8"?>\n<resources>';
    content.push(start);

    content.push(
        createBoolTag("kolorette_required",
                      document.getElementById('kolorette').checked.toString()));

    content.push(
        createBoolTag("media_utils_required",
                      document.getElementById('media-utils').checked.toString()));

    content.push(createStringTag("kustom_pack_title", "@string/app_name"));
    var descriptionInput = document.getElementById('app-description').value;
    if (isValid(descriptionInput)) {
        content.push(createStringTag("kustom_pack_description", descriptionInput));
    }

    content.push(createStringTag("zooper_pack_name", "@string/app_name"));
    if (isValid(descriptionInput)) {
        content.push(createStringTag("zooper_pack_desc", descriptionInput));
    }
    var designerName = document.getElementById('designer-name').value;
    if (isValid(designerName)) {
        content.push(createStringTag("zooper_pack_author", designerName));
    }
    content.push(createDrawableTag("zooper_pack_icon", "@mipmap/ic_launcher"));
    content.push(
        createIntegerTag("zooper_pack_allowsave",
                         booleanAsInt(document.getElementById('zooper-allow-save').checked)));

    var end = '\n</resources>';
    content.push(end);

    var xmlContent = '';
    for (var i = 0; i < content.length; i++) {
        xmlContent += content[i];
    }

    return xmlContent;
}