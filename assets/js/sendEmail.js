// To send mail from register form modal

function sendMail(registerForm) {
  emailjs.send("gmail", "wanderers_way", {
    from_email: registerForm.emailaddress.value,
    from_email_confirmed: registerForm.emailaddressConfirmed.value,
  });
  return false;
}

$('#enter-password, #re-enter-password').on('keyup', function () {
  if ($('#enter-password').val() == $('#re-enter-password').val()) {
    $('#message').html('Matching').css('color', 'green');
  } else 
    $('#message').html('Not Matching').css('color', 'red');
});