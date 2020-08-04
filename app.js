const burger = document.querySelector("#bur");
const navlink = document.querySelector(".navlinks");
const links = document.querySelectorAll(".navlinks li")
burger.addEventListener("click", () => {
    navlink.classList.toggle("navopen");
    links.forEach(link =>{
        link.classList.toggle("fade");
    });
    });

