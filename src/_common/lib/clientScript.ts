import "./vendor";

// This script handles the dark mode toggle functionality
// and saves the user's preference in local storage.

// Check if dark mode is enabled in local storage
if (localStorage.getItem("dark-mode") === "true") {
  document.body.classList.add("dark");
}

// Toggle dark mode when the button is clicked
document.querySelector(".toggle-dark-mode")?.addEventListener("click", function () {
  document.body.classList.toggle("dark");
  localStorage.setItem("dark-mode", document.body.classList.contains("dark") ? "true" : "false");
});
