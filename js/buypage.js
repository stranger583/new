let trigram = document.getElementsByClassName("trigram")[0];
let nav_ul= document.getElementsByClassName("nav_ul")[0];
trigram.addEventListener("click",function(){
     nav_ul.classList.toggle("-on");
     trigram.classList.toggle("red");
}) 

let buy_right_3 = document.getElementsByClassName("buy_right_3")[0];
let buy_order = document.getElementsByClassName("buy_order")[0];
let order = buy_right_3.children[6]
let mask = document.getElementsByClassName("mask")[0]
// console.log(order);
// console.log(buy_right_3);
buy_order.addEventListener("click",function(){
     buy_order.style.backgroundColor ="red";
     buy_order.style["border"] ="0";
     buy_order.style.boxShadow ="0 0 50px red";

     buy_right_3.style.display = "block";
     buy_order.disabled = true;
     console.log("aaa");
     
}) 

order.addEventListener("click",function(){
     order.style.backgroundColor ="red";
     order.style["border"] ="0";
     order.style.boxShadow ="0 0 50px red";
     mask.style.display = "block";
     mask.animate([
          {opacity: 0},
          {opacity: 1}],
          {duration: 2000,}

      )
})

