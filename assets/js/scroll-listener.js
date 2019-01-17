window.addEventListener('scroll', function () {
    let yPosition = (window.pageYOffset | document.body.scrollTop) + 2;
    let projectsTop = getElementTop('projects');
    if (yPosition < projectsTop) {
        toggleLink('home');
    } else {
        toggleLink('projects');
    }
});
