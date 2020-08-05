const burger = document.querySelector("#bur");
const navlink = document.querySelector(".navlinks");
const links = document.querySelectorAll(".navlinks li")
const line = document.querySelectorAll(".burger div");
burger.addEventListener("click", () => {
    navlink.classList.toggle("navopen");
    console.log(line.classList);
    console.log(navlink.className);
    links.forEach(link => {
        link.classList.toggle("fade");
    });
    line.forEach((lines,index )=> {
        if (index ==0) {
            lines.classList.toggle("burgerfade");
        }
        else if(index ==1){
            lines.classList.toggle("burgerfade1");
        }
     else if (index == 2 ){
            lines.classList.toggle("burgerfade2");
        };
    });
});

