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
        initParticles();
        changeHello();
    }, 500);
});
