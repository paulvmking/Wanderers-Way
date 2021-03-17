function sendMail(contactForm) {
    emailjs.send("gmail", "contact-form", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "message":contactForm.message.value
    })  
    return false;
    }

document.getElementById('sendContact')
	.addEventListener('click', function() {
		alert('Thanks for contacting us!Please await an email to continue!');
	});