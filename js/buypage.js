let trigram = document.getElementsByClassName("trigram")[0];
let nav_ul= document.getElementsByClassName("nav_ul")[0];
trigram.addEventListener("click",function(){
     nav_ul.classList.toggle("-on");
     trigram.classList.toggle("red");
}) 