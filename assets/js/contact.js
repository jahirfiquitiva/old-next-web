function submitForm() {
    var email = document.getElementById('email').value;
    if (email !== null && email !== undefined) {
        if (validateEmail(email)) {
            var response = grecaptcha.getResponse();
            if (response === null || response === undefined || response.length === 0) {
                showSnack("captcha-snack");
                return false;
            } else {
                var name = document.getElementById("name").value;
                var subject = document.getElementById("subject").value;
                var content = document.getElementById("message").value;
                content = "You have been contacted by " + name + "\n" + content;

                if (subject === null || subject === undefined || subject.length === 0) {
                    showSnack("email-empty-snack");
                } else if (content === null || content === undefined || content.length === 0) {
                    showSnack("email-empty-snack");
                } else {
                    sendEmail(email, subject, content)
                }

                return true;
            }
        } else {
            showSnack("email-snack");
            return false;
        }
    } else {
        return false;
    }
}

function showSnack(elementId) {
    var x = document.getElementById(elementId);
    if (x !== null) {
        x.className = "snackbar show";
        setTimeout(function () {
            x.className = x.className.replace("snackbar show", "snackbar");
        }, 3000);
    }
}

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email.toLowerCase());
}

function sendEmail(email, subject, body) {
    Email.send(email,
               "to@them.com",
               subject,
               body,
               {
                   token: "4790479d-783a-42fc-bf9a-2835bbdb47d5",
                   callback: function done(message) {
                       alert("Message sent")
                   }
               }
    );
}