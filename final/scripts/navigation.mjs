const navbutton = document.querySelector("button#ham-btn");
const navbar = document.querySelector("nav");

navbutton.addEventListener("click", () => {
    navbutton.classList.toggle("show");
    navbar.classList.toggle("show");
})

