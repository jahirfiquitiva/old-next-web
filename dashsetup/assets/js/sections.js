function toggleSection(section) {
    var elems = document.getElementsByClassName("active");

    [].forEach.call(elems, function (el) {
        el.classList.remove("active");
    });

    var tab = document.getElementById(section);
    tab.classList.add("active");

    var sectionRE = /^section-/;
    var sections = [], els = document.getElementsByTagName('*');
    for (var i = els.length; i--;) {
        if (sectionRE.test(els[i].id)) {
            sections.push(els[i]);
        }
    }
    for (var j = sections.length; j--;) {
        sections[j].style.display = 'none';
    }
    show('section-' + section);

    if (section === "info") {
        setupFAB();
    } else {
        show('download-fab');
    }

    document.body.scrollTop = document.documentElement.scrollTop = 0;
}

function setupFAB() {
    var accepted = document.getElementById('terms-check').checked;
    if (!accepted) {
        hide('download-fab');
    } else {
        show('download-fab');
    }
}

function hide(id) {
    document.getElementById(id).style.display = 'none';
}

function show(id) {
    document.getElementById(id).style.display = 'block';
}