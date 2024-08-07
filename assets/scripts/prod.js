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

const calc = document.getElementById("continue");

calc.addEventListener("click", () => {
    const
        val = document.getElementById("amount").value,
        buyContainer = document.getElementById("buy"),
        finishContainer = document.getElementById("finish")
    ;
    if (!val) return;

    if (isNaN(val)) return;

    buyContainer.style.display = "none";
    finishContainer.style.display = "block";

    var
        valDisplay = document.getElementById("am"),
        totalDisplay = document.getElementById("total")
    ;

    valDisplay.innerHTML = val;
    totalDisplay.innerHTML = (parseFloat(val) * 10.31).toFixed(2);
})

const conf = document.getElementById("confirm")

conf.addEventListener("click", () => {
    const thanks = document.getElementById("thanks");
    const wrapper = document.getElementById("orderWrapper");

    thanks.style.display = "block";
    wrapper.style.display = "none";
})

const cancel = document.getElementById("cancel");

cancel.addEventListener("click", () => {
    window.location.reload();
})

const ok = document.getElementById("ok");

ok.addEventListener("click", () => {
    window.location.href = "land.html";
});