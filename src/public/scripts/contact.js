const button = document.getElementById("toggle-dark-mode");
button.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Success Message

document.querySelector("msgBtn").addEventListener("submit", function (e) {
  e.preventDefault();
  const feedback = document.getElementById("form-feedback");

  // Simulate form submission delay (e.g., sending to server)
  setTimeout(() => {
    feedback.style.display = "block";
    feedback.style.color = "green";
    feedback.textContent = "Your message has been sent successfully!";
  }, 1000);
});

