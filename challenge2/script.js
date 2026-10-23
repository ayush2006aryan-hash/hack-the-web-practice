
const form = document.getElementById("registerForm");
const email = document.getElementById("email");
const message = document.getElementById("message");

const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const emailValue = email.value.trim();
  const emailPattern = /^[a-zA-Z0-9._%+-]+@(gmail\.com)$/i;
  if (emailPattern.test(emailValue)) {
    message.textContent = "Registration successful!";
    message.style.color = "green";
  } else {
    message.textContent = "Please enter a valid email address.";
    message.style.color = "red";
  }
});
