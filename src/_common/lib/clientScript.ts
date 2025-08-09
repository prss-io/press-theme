import "./vendor";
import "@prss/ui/build/client";

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

// All images under .post-inner-content should have data-action="zoom", unless they have a class of "no-zoom" or data-action="none"
// Only images with width and height over 500px should be zoomable
document.querySelectorAll(".post-inner-content img")?.forEach((img) => {
  if (img && !img.classList.contains("no-zoom") && img.getAttribute("data-action") !== "none") {
    // Create a new image element to get actual dimensions
    const testImg = new Image();
    testImg.onload = function() {
      if (testImg.naturalWidth > 500 && testImg.naturalHeight > 500) {
        img.setAttribute("data-action", "zoom");
      }
    };
    testImg.src = img.getAttribute("src") || "";
  }
});
