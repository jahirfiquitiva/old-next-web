window.addEventListener('scroll', function () {
    let yPosition = (window.pageYOffset | document.body.scrollTop) + 2;
    let projectsTop = getElementTop('projects');
    let contactTop = getElementTop('contact');
    if (yPosition < projectsTop) {
        toggleLink('home');
    } else if (yPosition < contactTop) {
        toggleLink('projects');
    } else {
        let ele = document.getElementById('contact');
        if (ele !== null && ele !== undefined) {
            toggleLink('contact');
        }
    }
});

function getElementTop(itemId) {
    let elementTop = 0;
    if (itemId !== null && itemId !== undefined) {
        try {
            let bodyRect = document.body.getBoundingClientRect(),
                elemRect = document.getElementById(itemId).getBoundingClientRect();
            elementTop = elemRect.top - bodyRect.top;
        } catch (e) {
            // Ignore errors here :P
        }
        // elementTop = $("#" + itemId).offset().top;
        // elementTop = top - convertRemToPixels(7);
    }
    return elementTop;
}

function scrollToItem(itemId, toggle = true) {
    try {
        let navbarBurgers = Array.prototype.slice.call(
            document.querySelectorAll('.navbar-burger'), 0);
        if (navbarBurgers.length > 0) {
            navbarBurgers.forEach(function (el) {
                let target = el.dataset.target;
                let rTarget = document.getElementById(target);
                el.classList.remove('is-active');
                rTarget.classList.remove('is-active');
            });
        }

        let elementTop = getElementTop(itemId);
        window.scroll({top: elementTop, left: 0, behavior: 'smooth'});
        if (toggle) {
            toggleLink(itemId);
        }
    } catch (err) {
    }
}

function toggleLink(itemId) {
    let navLinks = document.getElementsByClassName('navbar-item');
    for (let i = 0; i < navLinks.length; i++) {
        let ele = navLinks[i];
        if (ele !== null && ele !== undefined) {
            ele.classList.remove('is-active');
        }
    }
    let ele = document.getElementById(itemId + "-link");
    if (ele !== null && ele !== undefined) {
        ele.classList.add("is-active");
    }
}

function toggleProjects(itemId) {
    let projectsFilters = document.getElementsByClassName('filter');
    for (let i = 0; i < projectsFilters.length; i++) {
        projectsFilters[i].classList.remove('is-active');
    }

    let filterA = document.getElementById(`${itemId}-filter`);
    if (filterA) filterA.classList.add('is-active');

    let filterB = document.getElementById(`${itemId}-filter-2`);
    if (filterB) filterB.classList.add('is-active');

    const animDuration = 200;

    let projectsSections = document.getElementsByClassName('projects-section');
    for (let i = 0; i < projectsSections.length; i++) {
        let ele = projectsSections[i];
        if (ele.id !== `${itemId}-projects` && ele.style.display !== 'none') {
            fade(projectsSections[i], 'out', animDuration);
        }
    }
    setTimeout(() => {
        fade(document.getElementById(`${itemId}-projects`), 'in', animDuration * 2, "flex");
    }, animDuration);
}

function fade(el, type, ms, display) {
    let isIn = type === 'in',
        opacity = isIn ? 0 : 1,
        interval = 50,
        duration = ms,
        gap = interval / duration;

    if (isIn) {
        el.style.display = display || 'block';
        el.style.opacity = opacity;
    }

    function func() {
        opacity = isIn ? opacity + gap : opacity - gap;
        el.style.opacity = opacity;

        if (opacity <= 0) {
            el.style.display = 'none'
        }
        if (opacity <= 0 || opacity >= 1) {
            window.clearInterval(fading);
        }
    }

    let fading = window.setInterval(func, interval);
}

toggleProjects('android');
