let btnMenu = document.querySelector(".menu-trigger");
let body =document.body;

btnMenu.addEventListener("click",function(){
    body.classList.toggle("menu-active");

})