const menuButton = document.getElementById("menuButton");

menuButton.addEventListener("click", () => {
  const menu = document.getElementById("menuSobre");
  menu.classList.toggle("hidden");
});

const sec2Button = document.getElementById("sec2Arrow");

sec2Button.addEventListener("click", () => {
  window.location.href = "#section2";
});

const headerLogo = document.getElementById("headerImg");

headerLogo.addEventListener("click", () => {
  window.location.href = "land.html";
});

const change = document.getElementById("changeForm"),
  create = document.getElementById("createContainer"),
  login = document.getElementById("loginContainer");
var counter = 0;

change.addEventListener("click", () => {
  if (change.innerHTML!="Would you like to leave?") {
    if (counter == 0) {
      login.style.display = "flex";
      create.style.display = "none";
      change.innerHTML = "Don't have an account yet?";//aqui
      counter = 1;
    } else {
      create.style.display = "flex";
      login.style.display = "none";
      change.innerHTML = "already have an account?";//aqui
      counter = 0;
    }
  } else {
    localStorage.removeItem("isLogged");
    localStorage.removeItem("name");
    document.getElementById("sucess").style.display = "none";
    showMessage("Session successfully closed");
    if (counter == 1) {
      create.style.display = "flex";
      login.style.display = "none";
      change.innerHTML = "already have an account?";//aqui
      counter = 0;
    } else {
      login.style.display = "flex";
      create.style.display = "none";
      change.innerHTML = "Don't have an account yet?";//aqui
      counter = 1;
    }
  }
});

function showMessage(txt) {
  const msgSlot = document.getElementById("msgBox");

  msgSlot.innerHTML = txt;
  msgSlot.style.display = "block";
  setTimeout(() => {
    msgSlot.style.display = "none";
  }, 3000);
}

const prod = document.getElementById("prodLink");
prod.addEventListener("click", () => {
  if (localStorage.getItem("isLogged")) {
    window.location.href = "prod.html";
  } else {
    showMessage(
      "You need an account to log in, scroll to the bottom of the site to log in."
    );
  }
});

const storeButton = document.getElementById("storeButton");

storeButton.addEventListener("click", () => {
  window.location.href = "prod.html";
});
