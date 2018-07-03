function setup() {
    let date = new Date();
    let month = date.getMonth() + 1;
    let logo = document.getElementById('logo');
    let logoName = 'def';
    // TODO: Add more month-styled logos
    if (month === 6) {
        logoName = '6';
    }
    logo.setAttribute('src', '/assets/img/brand/logo-' + logoName + '.svg');
    logo.setAttribute('onerror',
        'this.onerror=null;' +
        'this.src=\'/assets/img/brand/logo-' + logoName + '.png\'')

    let copy = document.getElementById('copyright-notice');
    copy.innerHTML = 'Copyright ' + date.getFullYear() + ' © All Rights Reserved';

    let years = document.getElementById('age-text');
    years.innerHTML = date.getFullYear() - 1997;
}

document.addEventListener('DOMContentLoaded', function () {
    // Get all "navbar-burger" elements
    let $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
        // Add a click event on each of them
        $navbarBurgers.forEach(function ($el) {
            $el.addEventListener('click', function () {
                // Get the target from the "data-target" attribute
                let target = $el.dataset.target;
                let $target = document.getElementById(target);

                // Toggle the class on both the "navbar-burger" and the "navbar-menu"
                $el.classList.toggle('is-active');
                $target.classList.toggle('is-active');

            });
        });
    }
    setup();
    loadParticles();
});