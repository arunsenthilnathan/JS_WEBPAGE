const burger = document.querySelector(".burger");
const navlink = document.querySelector(".navlinks");
burger.addEventListener("click", () => {
    navlink.classList.toggle("navopen");
});

