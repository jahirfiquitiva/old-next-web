function resetColor(element, color) {
    document.getElementById(element).value = '#' + color;
    document.getElementById(element).jscolor.fromString(color);
}

function generateColorsXML() {
    var content = [];

    var start = '<?xml version="1.0" encoding="utf-8"?>\n<resources>';
    content.push(start);

    var notifColorInput = document.getElementById('notification-color').value;
    if (isValid(notifColorInput)) {
        content.push(createColorTag("notification_color", notifColorInput));
    }

    var muzeiColorInput = document.getElementById('muzei-color').value;
    if (isValid(muzeiColorInput)) {
        content.push(createColorTag("muzei_color", muzeiColorInput));
    }

    // Light Theme Colors

    var statusLightColorInput = document.getElementById('status-light-color').value;
    if (isValid(statusLightColorInput)) {
        content.push(createColorTag("light_theme_primary_dark", statusLightColorInput));
    }

    var primaryLightColorInput = document.getElementById('primary-light-color').value;
    if (isValid(primaryLightColorInput)) {
        content.push(createColorTag("light_theme_primary", primaryLightColorInput));
    }

    var accentLightColorInput = document.getElementById('accent-light-color').value;
    if (isValid(accentLightColorInput)) {
        content.push(createColorTag("light_theme_accent", accentLightColorInput));
    }

    var bgLightColorInput = document.getElementById('bg-light-color').value;
    if (isValid(bgLightColorInput)) {
        content.push(createColorTag("light_theme_background", bgLightColorInput));
    }

    var cardLightColorInput = document.getElementById('card-bg-light-color').value;
    if (isValid(cardLightColorInput)) {
        content.push(createColorTag("light_theme_card_background", cardLightColorInput));
    }

    content.push(createColorTag("light_theme_dialogs_button_color", "@color/light_theme_accent"));
    content.push(createColorTag("splash_light_status_bar", "@color/light_theme_primary_dark"));

    // Dark Theme Colors

    var statusDarkColorInput = document.getElementById('status-dark-color').value;
    if (isValid(statusDarkColorInput)) {
        content.push(createColorTag("dark_theme_primary_dark", statusDarkColorInput));
    }

    var primaryDarkColorInput = document.getElementById('primary-dark-color').value;
    if (isValid(primaryDarkColorInput)) {
        content.push(createColorTag("dark_theme_primary", primaryDarkColorInput));
    }

    var accentDarkColorInput = document.getElementById('accent-dark-color').value;
    if (isValid(accentDarkColorInput)) {
        content.push(createColorTag("dark_theme_accent", accentDarkColorInput));
    }

    var bgDarkColorInput = document.getElementById('bg-dark-color').value;
    if (isValid(bgDarkColorInput)) {
        content.push(createColorTag("dark_theme_background", bgDarkColorInput));
    }

    var cardDarkColorInput = document.getElementById('card-bg-dark-color').value;
    if (isValid(cardDarkColorInput)) {
        content.push(createColorTag("dark_theme_card_background", cardDarkColorInput));
    }

    content.push(createColorTag("dark_theme_dialogs_button_color", "@color/dark_theme_accent"));
    content.push(createColorTag("splash_dark_status_bar", "@color/dark_theme_primary_dark"));

    var end = '\n</resources>';
    content.push(end);

    var xmlContent = '';
    for (var i = 0; i < content.length; i++) {
        xmlContent += content[i];
    }

    return xmlContent;
}