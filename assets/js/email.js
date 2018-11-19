const $formContact = document.querySelector("#contact-form");

let nameInput = document.contactForm.name;
nameInput.addEventListener('keyup', function () {
    toggleHelp('name', false);
});

let emailInput = document.contactForm.email;
emailInput.addEventListener('keyup', function () {
    toggleHelp('email', false);
});

let subjectInput = document.contactForm.subject;
subjectInput.addEventListener('keyup', function () {
    toggleHelp('subject', false);
});

let messageInput = document.contactForm.message;
messageInput.addEventListener('keyup', function () {
    toggleHelp('message', false);
});

const sendForm = event => {
    event.preventDefault();
    document.contactForm.action.classList.add('is-loading');
    if (document.contactForm.honey) {
        let input = document.contactForm.honey.value;
        if (input !== null && input !== undefined && input.length > 0) {
            toggleHelp('captcha', true);
            return stopMailLoad(false);
        }
    }
    const email = emailInput.value;
    if (email !== null && email !== undefined) {
        if (validateEmail(email)) {
            toggleHelp('captcha', false);
            let name = nameInput.value;
            let subject = subjectInput.value;
            let content = messageInput.value;
            if (name === null || name === undefined || name.length === 0) {
                toggleHelp('name', true);
                return stopMailLoad(false);
            } else if (subject === null || subject === undefined || subject.length === 0) {
                toggleHelp('subject', true);
                return stopMailLoad(false);
            } else if (content === null || content === undefined || content.length === 0) {
                toggleHelp('message', true);
                return stopMailLoad(false);
            } else {
                return true;
            }
        } else {
            toggleHelp('email', true);
            return stopMailLoad(false);
        }
    } else {
        toggleHelp('email', true);
        return stopMailLoad(false);
    }
};

$formContact.addEventListener("submit", sendForm);

function stopMailLoad(expected) {
    try {
        document.contactForm.action.classList.remove('is-loading');
    } catch (e) {
    }
    return expected;
}

function toggleHelp(id, active) {
    try {
        if (active) {
            document.getElementById(id).classList.add('is-danger');
            document.getElementById(id + '-help').classList.add('is-active');
        } else {
            document.getElementById(id).classList.remove('is-danger');
            document.getElementById(id + '-help').classList.remove('is-active');
        }
    } catch (e) {
    }
}

function validateEmail(email) {
    try {
        const re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
        return re.test(email.toLowerCase());
    } catch (e) {
        return false;
    }
}
