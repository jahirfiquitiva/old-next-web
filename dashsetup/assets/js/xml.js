function isValid(any) {
    return any.length > 0 && any !== null
}

function createStringTag(name, content) {
    return '\n\t<string name="' + name + '">' + content + '</string>';
}

function createColorTag(name, content) {
    return '\n\t<color name="' + name + '">' + content + '</color>';
}

function createIntegerTag(name, content) {
    return '\n\t<integer name="' + name + '">' + content + '</integer>';
}

function createBoolTag(name, content) {
    return '\n\t<bool name="' + name + '">' + content + '</bool>';
}

function createStyleTag(name, content) {
    return '\n\t<style name="' + name + '">' + content + '</style>';
}

function createStyleParentTag(name, parent) {
    return '\n\t<style name="' + name + '" parent="' + parent + '"/>';
}

function createDrawableTag(name, content) {
    return '\n\t<drawable name="' + name + '">' + content + '</drawable>';
}

function createStringArray(name, items) {
    var content = '\n\t<string-array name="' + name + '">';
    for (var i = 0; i < items.length; i++) {
        content += '\n\t\t<item>' + items[i] + '</item>';
    }
    content += '\n\t</string-array>';
    return content
}

function validateURL(str) {
    var pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
                             '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|' + // domain name
                             '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
                             '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
                             '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
                             '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
    if (!pattern.test(str)) {
        alert("Please enter a valid URL.");
        return false;
    } else {
        return true;
    }
}

function booleanAsInt(bool) {
    return bool ? 1 : 0;
}