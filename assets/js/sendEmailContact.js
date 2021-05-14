// To send user data upon completion of contact form
function sendMail(contactForm) {
	const { name, emailaddress, message } = contactForm;

	if (!name.value || !emailaddress.value || !message.value) { 
			$('.toast').toast('show');
		return false;
	} else {
		$("#contact-modal").modal("show");
	}
	emailjs.send("gmail", "contact-form", {
		from_name: contactForm.name.value,
		from_email: contactForm.emailaddress.value,
		message: contactForm.message.value,
	});
	return false;
}
// To provide user feedback upon successful completion of form
$("#myForm").on("submit", function sendMail(e) {
	e.preventDefault();
});