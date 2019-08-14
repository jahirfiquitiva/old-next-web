let lastHello = 0;
const hellos = ['Hello, world', 'Hola, mundo', 'Salut, monde', 'Ciao, mondo', 'Olá, mundo',
  'Hallo, Welt'];

const setupLogo = () => {
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
};

const changeHello = () => {
  let hello = document.getElementById('hello');
  if (hello) {
    hello.innerHTML = `${hellos[lastHello]}! 👋`;
    lastHello += 1;
    if (lastHello >= hellos.length) {
      lastHello = 0;
    }
  }
};

function initParticles() {
  particlesJS.load('particles-bg', 'assets/js/particles.json');
}

document.addEventListener('DOMContentLoaded', () => {
  updateThemeSwitch();
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
    setupLogo();
    initParticles();
    changeHello();
    setInterval(changeHello, 2000);
  }, 500);
});
