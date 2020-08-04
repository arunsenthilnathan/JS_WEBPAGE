const burger = document.querySelector("#bur");
const navlink = document.querySelector(".navlinks");
burger.addEventListener("click", () => {
    navlink.classList.toggle("navopen");
});

