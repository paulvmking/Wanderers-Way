// To send user data upon completion of contact form
function sendMail(contactForm) {
	emailjs.send("gmail", "contact-form", {
		from_name: contactForm.name.value,
		from_email: contactForm.emailaddress.value,
		message: contactForm.message.value,
	});
	return false;
}
// To provide user feedback upon successful completion of form
$("#myForm").on("submit", function(e) {
	$("#contact-modal").modal("show");
	e.preventDefault();
});