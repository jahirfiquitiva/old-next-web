function generateGeneralXML() {
    var content = [];

    var start = '<?xml version="1.0" encoding="utf-8"?>\n<resources>';
    content.push(start);

    var splashScreenSelect = document.getElementById('splash-screen-theme');
    var splashScreen = splashScreenSelect.options[splashScreenSelect.selectedIndex].value;
    if (isValid(splashScreen)) {
        content.push(createStyleParentTag("MySplashScreen", splashScreen + 'Theme.SplashScreen'));
    }

    var defaultThemeSelect = document.getElementById('default-theme');
    var defaultTheme = defaultThemeSelect.selectedIndex;
    content.push(createIntegerTag("default_theme", defaultTheme));

    var donationItems = document.getElementById('donation-items').value;
    if (isValid(donationItems)) {
        var clean = donationItems.replace(/\s/g, "");
        var items = clean.split(",");
        content.push(createStringArray('donation_items', items));
    }

    var end = '\n</resources>';
    content.push(end);

    var xmlContent = '';
    for (var i = 0; i < content.length; i++) {
        xmlContent += content[i];
    }

    return xmlContent;
}