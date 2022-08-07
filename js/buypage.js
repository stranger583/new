let trigram = document.getElementsByClassName("trigram")[0];
let nav_ul= document.getElementsByClassName("nav_ul")[0];
trigram.addEventListener("click",function(){
     nav_ul.classList.toggle("-on");
     trigram.classList.toggle("red");
}) 

let buy_right_3 = document.getElementsByClassName("buy_right_3")[0];
let buy_order = document.getElementsByClassName("buy_order")[0];
buy_order.addEventListener("click",function(){
     buy_right_3.style.display = "block";
     buy_order.disabled = true;
     console.log("aaa");
     
}) 

	