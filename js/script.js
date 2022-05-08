'use strict';

const btn = document.querySelector("#btn");

function ativarMenu(){
    const nav = document.querySelector("nav");
    nav.classList.toggle('active');
    if(nav.className == 'active'){
        document.querySelector('.icon').src = "img/close.svg";
    }else{
        document.querySelector('.icon').src = "img/menu.svg";
    }
}

btn.addEventListener("click", ativarMenu);