// To send mail from register form modal

function sendMail(registerForm) {
    emailjs.send("gmail", "wanderers_way", {
        "from_email": registerForm.emailaddress.value,
        "from_email_confirmed": registerForm.emailaddressConfirmed.value,
    });
    return false;
}
