let about = document.getElementsByClassName("about_text")[0];
let text = about.querySelectorAll("p");
// console.log(about);
// console.log(text);


if(this.outerWidth < 500){
let a = 0;
text[a].style.display = "block";
a++
        let c = setInterval(() => {
        if(a == 1){text[0].style.display = "none";}
        if(a== 2){text[1].style.display = "none";}
        if(a== 0){text[2].style.display = "none";}
        text[a].style.display = "block";
        text[a].animate([
            {opacity: 0},
            {opacity: 1},
            {opacity: 0}],
            {duration: 5000,iterations: Infinity}

        )
        // console.log(a);
        a++
        if (a > 2) {
            a = 0;
        }
    }, 5000);   
    
}

let trigram = document.getElementsByClassName("trigram")[0];
        let nav_ul= document.getElementsByClassName("nav_ul")[0];
        trigram.addEventListener("click",function(){
        nav_ul.classList.toggle("-on");
        trigram.classList.toggle("red");
        }) 
