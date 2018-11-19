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
