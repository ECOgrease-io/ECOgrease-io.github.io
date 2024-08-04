const menuButton = document.getElementById("menuButton");

menuButton.addEventListener("click", () => {
  const menu = document.getElementById("menuSobre");
  menu.classList.toggle("hidden");
});
const headerLogo = document.getElementById("headerImg");

headerLogo.addEventListener("click", () => {
  window.location.href = "land.html";
});
const prod = document.getElementById("prodLink");
prod.addEventListener("click", () => {
  if (localStorage.getItem("isLogged")) {
    window.location.href = "prod.html";
  } else {
    showMessage(
      "Você precisa de uma conta para entrar, deslize para a parte de baixo do site para realizar o login"
    );
  }
});
