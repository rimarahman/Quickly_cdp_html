const togg = document.querySelector("#navbarToggle") ;
const navitem = document.querySelector("#navItem") ;


togg.addEventListener("click", ()=> {
    navitem.classList.toggle("Navbar__ToggleShow")

})
