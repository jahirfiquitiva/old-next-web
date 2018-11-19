function updateDonationLink(fire = false) {
    let donationField = document.getElementById('donation-input');
    let currencySelector = document.getElementById('currency-selector');
    let donateBtn = document.getElementById('donate-btn');
    if (donationField !== undefined && donationField !== null &&
        currencySelector !== undefined && currencySelector !== null &&
        donateBtn !== undefined && donateBtn !== null) {
        let amount = 5;
        let currency = "USD";
        try {
            amount = donationField.value;
            currency = currencySelector.options[currencySelector.selectedIndex].value;
        } catch (e) {
            console.error(e)
        }
        donateBtn.href =
            "https://www.paypal.me/jahirfiquitiva/" + amount.toString() +
            currency.toString().toLowerCase();
        if (fire) {
            donateBtn.click();
        }
    }
}

function launchDonationSite(event) {
    event.preventDefault();
    let code = 0;
    if (event.key !== undefined) {
        code = event.key;
    } else if (event.keyIdentifier !== undefined) {
        code = event.keyIdentifier;
    } else if (event.keyCode !== undefined) {
        code = event.keyCode;
    }
    code = code.toString();
    if (code === '13' || code === 'Enter' || code === 'enter') {
        updateDonationLink(true);
    }
}

updateDonationLink();
