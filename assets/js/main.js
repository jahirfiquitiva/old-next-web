let lastHello = 0;
const hellos = ['Hello, world', 'Hola, mundo', 'Salut, monde', 'Ciao, mondo', 'Olá, mundo',
  'Hallo, Welt'];

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
