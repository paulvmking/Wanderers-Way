function sendMail(registerForm) {
    emailjs.send("gmail", "wanderers_way", {
        "from_email": registerForm.emailaddress.value,
        "from_email_confirmed": registerForm.emailaddressConfirmed.value,
    })
    return false;
}

function sendMail(contactForm) {
    var form = document.getElementById('contact-form');
    emailjs.send("gmail", "contact-form", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "message":contactForm.message.value
    })
    form.reset();
    return false;
    }