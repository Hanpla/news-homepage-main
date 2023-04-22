const menu = document.getElementById("menu_logo");
const menuBox = document.querySelector(".menu_box");
const menuClose = document.getElementById("menu_close");
const body = document.querySelector("body");

menu.addEventListener("click", () => {
    menuBox.style.display = "block";
    body.style.backgroundColor = " rgb(219, 219, 219)";
})
menuClose.addEventListener("click", () => {
    menuBox.style.display = "none";
    body.style.backgroundColor = "white";
})
