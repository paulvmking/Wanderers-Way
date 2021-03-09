function sendMail(registerForm) {
    emailjs.send("gmail", "wanderers_way", {
        "from_email": registerForm.emailaddress.value,
        "from_email_confirmed": registerForm.emailaddressConfirmed.value,
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
}

$('.modalBtn').submit(function(e) {
    $('#register-modal').modal('hide');
    return false;
});