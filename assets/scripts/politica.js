const menuButton = document.getElementById("menuButton");

menuButton.addEventListener("click", () => {
  const menu = document.getElementById("menuSobre");
  menu.classList.toggle("hidden");
});
const headerLogo = document.getElementById("headerImg");

headerLogo.addEventListener("click", () => {
  window.location.href = "land.html";
});
