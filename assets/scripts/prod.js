setInterval(() => {
    if (!localStorage.getItem('isLogged')){
        window.location.href = 'land.html';
    }
}, 500)

menuButton.addEventListener("click", () => {
    const section = document.getElementById("section1");
    const menu = document.getElementById("menuSobre");
    menu.classList.toggle("hidden");
});

const headerLogo = document.getElementById("headerImg");

headerLogo.addEventListener("click", () => {
    window.location.href = "land.html";
})
