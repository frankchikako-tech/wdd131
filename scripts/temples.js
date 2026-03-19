// Footer Year
document.getElementById("year").textContent = new Date().getFullYear();

// Last Modified
document.getElementById("lastModified").textContent = document.lastModified;

// Hamburger Menu
const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("show");

  if (menuBtn.textContent === "☰") {
    menuBtn.textContent = "✖";
  } else {
    menuBtn.textContent = "☰";
  }
});