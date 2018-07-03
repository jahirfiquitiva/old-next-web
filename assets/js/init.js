let useCharacterAsCursor = (function() {
    let size = 24,
        canvas,
        context;

    // Initialize canvas
    canvas = document.createElement("canvas");
    canvas.width = size;
    canvas.height = size;

    // Store context & set styling
    context = canvas.getContext("2d");
    context.font = size + "px sans-serif";
    context.textBaseline = "middle";
    context.textAlign = "center";

    return function(character) {
        if (!character) {
            // If no character is provided, reset to default 
            // to make sure there's a cursor shown
            document.body.style.cursor = "default";
            return;
        }
        // Clear previously drawn stuff (context is reused)
        context.clearRect(0, 0, canvas.width, canvas.height);

        context.fillText(character, size / 2, size / 2);
        let imgDataURL = canvas.toDataURL();

        // Use offset to reposition the cursor 
        // Two unit-less non-negative numbers less than 32
        // (https://developer.mozilla.org/en-US/docs/Web/CSS/cursor)
        // Use `auto` so the browser can still use the right cursor 
        // for interactive elements
        let offset = (size / 2) + " 0";
        document.body.style.cursor = "url(" + imgDataURL + ") " + offset + ", auto";
    };
}());

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

function loadParticles() {
    particlesJS.load('particles-bg', '/assets/config/particles.json',
                     function () {
                         console.log('Particles ready! :D');
                     });
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
    /* useCharacterAsCursor('🌀'); */
});