function sendMail(contactForm) {
    emailjs.send("gmail", "contact-form", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "message":contactForm.message.value
    }) 
    alert("Thank you for contacting us!  Please await a reply to continue!");
    return false;
    }

