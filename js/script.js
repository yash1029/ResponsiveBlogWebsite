let navRight = document.getElementsByClassName("nav-right")[0]
let hamBar = document.getElementsByClassName("hamburger-bar")[0]
let navUl = document.getElementsByClassName("nav-ul")[0]

hamBar.onclick = ()=>{
    navUl.classList.toggle("appear")
    navRight.classList.toggle("appear")
}
