window.addEventListener('scroll', function () {
    let yPosition = (window.pageYOffset | document.body.scrollTop) + 2;
    let skillsTop = getElementTop('skills');
    let portfolioTop = getElementTop('portfolio');
    let contactTop = getElementTop('contact');
    if (yPosition < skillsTop) {
        toggleLink('home');
    } else if (yPosition < portfolioTop) {
        toggleLink('skills');
    } else if (yPosition < contactTop) {
        toggleLink('portfolio');
    } else {
        toggleLink('contact');
    }
});

function getElementTop(itemId) {
    let elementTop = 0;
    if (itemId !== null && itemId !== undefined) {
        let bodyRect = document.body.getBoundingClientRect(),
            elemRect = document.getElementById(itemId).getBoundingClientRect();
        elementTop = elemRect.top - bodyRect.top;
        // elementTop = $("#" + itemId).offset().top;
        // elementTop = top - convertRemToPixels(7);
    }
    return elementTop;
}

function scrollToItem(itemId) {
    try {
        let elementTop = getElementTop(itemId);
        /*
        // $('html, body').stop().animate({scrollTop: top}, 1000);
        document.body.scrollTop = document.documentElement.scrollTop = elementTop;
        */
        window.scroll({top: elementTop, left: 0, behavior: 'smooth'});
        toggleLink(itemId);
    } catch (err) {
    }
}

function toggleLink(itemId) {
    let navLinks = document.getElementsByClassName('navbar-item');
    for (let i = 0; i < navLinks.length; i++) {
        navLinks[i].classList.remove('is-active');
    }
    document.getElementById(itemId + "-link").classList.add("is-active");
}

function togglePortfolio(itemId) {
    let portfolioFilters = document.getElementsByClassName('portfolio-filter');
    for (let i = 0; i < portfolioFilters.length; i++) {
        portfolioFilters[i].classList.remove('is-primary');
    }

    let portfolioSections = document.getElementsByClassName('portfolio-section');
    for (let i = 0; i < portfolioSections.length; i++) {
        let ele = portfolioSections[i];
        if (ele.id !== 'portfolio-' + itemId && ele.style.display !== 'none') {
            fade(portfolioSections[i], 'out', 100);
        }
        // portfolioSections[i].style.display = "none";
    }
    for (let j = 0; j < 2000; j++) {
    }
    // document.getElementById("portfolio-" + itemId).style.display = "flex";
    fade(document.getElementById("portfolio-" + itemId), 'in', 750, "flex");
    document.getElementById(itemId + "-filter").classList.add("is-primary");
}