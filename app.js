const menu = document.getElementById("menu_logo");
const menuBox = document.querySelector(".menu_box");
const menuClose = document.getElementById("menu_close");

menu.addEventListener("click", () => {
    menuBox.style.display = "block";
})
menuClose.addEventListener("click", () => {
    menuBox.style.display = "none";
})
