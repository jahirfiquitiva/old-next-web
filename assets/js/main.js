const toggleSwitch = document.getElementById('theme-switch');
const initialThemeSwitchHTML = '&nbsp;&nbsp;<span class="mdi ';
const finalThemeSwitchHTML = '"></span>&nbsp;&nbsp;';
let currentTheme = localStorage.getItem('theme') || 'light';

function updateThemeSwitch() {
    if (currentTheme) {
        document.documentElement.setAttribute('data-theme', currentTheme);
        try {
            const iconName = currentTheme === 'dark' ? 'mdi-white-balance-sunny' : 'mdi-weather-night';
            const otherThemeName = currentTheme === 'dark' ? 'Light' : 'Dark';
            toggleSwitch.innerHTML = `${initialThemeSwitchHTML}${iconName}${finalThemeSwitchHTML}${otherThemeName} Theme`;
        } catch (e) {
        }
    }
}

function switchTheme() {
    if (currentTheme === 'light') {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }
    currentTheme = localStorage.getItem('theme');
    updateThemeSwitch();
}

updateThemeSwitch();

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
        logo.setAttribute('src', '/assets/images/brand/logo-' + logoName + '.svg');
        logo.setAttribute('onerror',
                          'this.onerror=null;' +
                          'this.src=\'/assets/images/brand/logo-' + logoName + '.png\'');
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
    const navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'),
                                                     0);
    if (navbarBurgers.length > 0) {
        navbarBurgers.forEach(el => {
            el.addEventListener('click', () => {
                const target = el.dataset.target;
                const rTarget = document.getElementById(target);
                el.classList.toggle('is-active');
                rTarget.classList.toggle('is-active');
            });
        });
    }
    setTimeout(() => {
        setup();
        initParticles();
        changeHello();
        setInterval(changeHello, 2000);
    }, 500);
});
