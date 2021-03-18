// To send user data upon completion of contact form 

function sendMail(contactForm) {
    emailjs.send("gmail", "contact-form", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "message": contactForm.message.value
    });
    return false;
}

// To provide user alert upon completion of form

document.getElementById('sendContact')
    .addEventListener('click', function () {
        alert('Thanks for contacting us!Please await an email to continue!');
    });