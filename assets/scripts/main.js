menuButton.addEventListener("click", () => {
    const section = document.getElementById("section1");
    const menu = document.getElementById("menuSobre");
    menu.classList.toggle("hidden");
});

sec2Button = document.getElementById("sec2Arrow")

sec2Button.addEventListener("click", () => {
    window.location.href = "#section2";
})

const headerLogo = document.getElementById("headerImg");

headerLogo.addEventListener("click", () => {
    window.location.href = "land.html";
})

const
    change = document.getElementById("changeForm"),
    create = document.getElementById("createContainer"),
    login = document.getElementById("loginContainer")
;
var counter = 0;

change.addEventListener("click", () => {
    if (counter == 0) {
        login.style.display = "flex";
        create.style.display = "none";
        change.innerHTML = "Não possui uma conta ainda?"
        counter = 1;
    }
    else {
        create.style.display = "flex";
        login.style.display = "none";
        change.innerHTML = "Já possui uma conta?"
        counter = 0;
    }
});
