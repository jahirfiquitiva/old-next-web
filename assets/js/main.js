function setup() {
    let date = new Date();
    let month = date.getMonth() + 1;
    let logo = document.getElementById('logo');
    let logoName = 'def';
    // TODO: Add more month-styled logos
    if (month === 6) {
        logoName = '6';
    }
    if (logo !== null && logo !== undefined) {
        logo.setAttribute('src', '/assets/img/brand/logo-' + logoName + '.svg');
        logo.setAttribute('onerror',
                          'this.onerror=null;' +
                          'this.src=\'/assets/img/brand/logo-' + logoName + '.png\'');
    }

    let copy = document.getElementById('copyright-notice');
    if (copy !== null && copy !== undefined) {
        copy.innerHTML = 'Copyright © ' + date.getFullYear() + ' | All Rights Reserved';
    }
    /*
    let years = document.getElementById('age-text');
    if (years !== null && years !== undefined) {
        years.innerHTML = (date.getFullYear() - 1997).toString();
    }
    */
}

function initParticles() {
    particlesJS.load('particles-bg', 'assets/js/particles.json');
}

let lastHello = 0;
const hellos = ["Hello, world", "Hola, mundo", "Salut, monde", "Ciao, mondo", "Olá, mundo",
                "Hallo, Welt"];
let helloInterval = setInterval(changeHello, 2000);

function changeHello() {
    let hello = document.getElementById('hello');
    if (hello) {
        hello.innerHTML = `${hellos[lastHello]}! 👋`;
        lastHello += 1;
        if (lastHello >= hellos.length) {
            lastHello = 0;
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'),
                                                      0);
    if ($navbarBurgers.length > 0) {
        $navbarBurgers.forEach(el => {
            el.addEventListener('click', () => {
                const target = el.dataset.target;
                const $target = document.getElementById(target);
                el.classList.toggle('is-active');
                $target.classList.toggle('is-active');

            });
        });
    }
    setTimeout(() => {
        setup();
        initParticles();
        changeHello();
    }, 500);
});
