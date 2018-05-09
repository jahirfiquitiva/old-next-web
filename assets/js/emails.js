const token = "4790479d-783a-42fc-bf9a-2835bbdb47d5";
const $formContact = document.querySelector("#contact-form");

const sendForm = event => {
    event.preventDefault();
    const message = {
        sender: document.querySelector("#email").value,
        name: document.querySelector("#name").value,
        subject: document.querySelector("#subject").value,
        text: document.querySelector("#message").value
    };
    smtpJS(message);
};
const smtpJS = message => {
    try {
        Email.send(
            message.sender,
            "hi@jahirfiquitiva.com",
            message.subject,
            `You've been contacted by ${message.name} \n\n ${message.text}`,
            {token}
        );
    } catch (e) {
        alert("Error! D:");
    }
};

$formContact.addEventListener("submit", sendForm);