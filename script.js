document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const status = document.getElementById("form-status");
  status.textContent = "Sending...";
  setTimeout(() => {
    status.textContent = "Message sent! I will contact you soon.";
    this.reset();
  }, 1000);
});