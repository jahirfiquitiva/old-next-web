const $formContact = document.querySelector("#contact-form");
let state = {};

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

function encode(data) {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
}

const sendForm = event => {
    if (event) event.preventDefault();
    document.contactForm.action.classList.add('is-loading');
    let isValid = false;
    if (document.contactForm.honey) {
        let input = document.contactForm.honey.value;
        if (input !== null && input !== undefined && input.length > 0) {
            toggleHelp('captcha', true);
        }
    }
    const email = emailInput.value;
    if (email !== null && email !== undefined) {
        if (validateEmail(email)) {
            let response = grecaptcha.getResponse();
            if (response === null || response === undefined || response.length === 0) {
                toggleHelp('captcha', true);
            } else {
                toggleHelp('captcha', false);
                let name = nameInput.value;
                let subject = subjectInput.value;
                let content = messageInput.value;
                if (name === null || name === undefined || name.length === 0) {
                    toggleHelp('name', true);
                } else if (subject === null || subject === undefined || subject.length === 0) {
                    toggleHelp('subject', true);
                } else if (content === null || content === undefined || content.length === 0) {
                    toggleHelp('message', true);
                } else {
                    isValid = true;
                    let request = new XMLHttpRequest();
                    request.onreadystatechange = () => {
                        if (this.readyState !== 4) return;
                        if (this.status >= 200 && this.status < 300) {
                            window.location.href = $formContact.getAttribute('action');
                        } else {
                            alert("An unexpected error occurred while trying to send your message");
                        }
                    };
                    request.open('POST', '/', true);
                    request.setRequestHeader('Content-Type',
                                             'application/x-www-form-urlencoded; charset=UTF-8');
                    request.send(encode({
                                            "name": name,
                                            "email": email,
                                            "subject": subject,
                                            "message": content,
                                            "form-name": $formContact.getAttribute('name')
                                        }));
                }
            }
        } else {
            toggleHelp('email', true);
        }
    } else {
        toggleHelp('email', true);
    }
    stopMailLoad(isValid);
    return false;
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
