// To send mail from register form modal
function sendMail(registerForm) {
	emailjs.send("gmail", "wanderers_way", {
		from_email: registerForm.emailaddress.value,
	});
	return false;
}

// To provide user with feedback with password matching
$("#enter-password, #re-enter-password").on("keyup", function() {
	if ($("#enter-password").val() == $("#re-enter-password").val()) {
		$("#message").html("Matching").css("color", "green");
	} else $("#message").html("Not Matching").css("color", "red");
});

// To show modal upon completion of registration
$("#register-modal").on("submit", function(e) {
	$("#reg-success-modal").modal("show");
	e.preventDefault();
});