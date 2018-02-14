function submitForm() {
    var email = document.getElementById('email').value;
    if (email !== null && email !== undefined) {
        if (validateEmail(email)) {
            var response = grecaptcha.getResponse();
            if (response === null || response === undefined || response.length === 0) {
                showSnack("captcha-snack");
                return false;
            } else {
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