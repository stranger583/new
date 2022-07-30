// ----------------------------左邊--------------------------------------------
let item1_el = document.getElementsByClassName("item1")[0];
let item3_el = document.getElementsByClassName("item3")[0];
let page_no = document.getElementsByClassName("page_number")[0];
// ----------------------------中間--------------------------------------------

let all_img = document.getElementsByClassName("all_img")[0];
let img1 = all_img.firstElementChild;
let img2 = all_img.children[1];
let img3 = all_img.lastElementChild;

console.log(img1);
console.log(img2);
console.log(img3);

// ----------------------------右邊--------------------------------------------
let concept3_1 = document.getElementsByClassName("concept3_1")[0];
let title = concept3_1.firstElementChild;
// console.log(concept3_1);
// console.log(title.innerText);
let text = concept3_1.children[2];
// console.log(text.innerHTML);



// ----------------------------做動--------------------------------------------

// console.log(Number(page_no.innerText));
item3_el.addEventListener("click",function(){
    all_img.classList.remove("-on");
    all_img.classList.remove("-on2");
    all_img.classList.remove("-on3");
   if(Number(page_no.innerText) < 3){
        let x = Number(page_no.innerText);
        x += 1;
        page_no.innerText = x;
    }else{
        page_no.innerText = 1;
    }
// -----------------------------------------------------------------------------------
    if (page_no.innerText == 1) {
        title.innerText = "SPACE STATION";
        text.innerHTML ="The space relay station set up by our company on the other side of the galaxy is made of special metals found on Mars. Currently in the final setup stage, with other space stations capable of accommodating nearly 100,000 people, the space station has facilities such as relay stations, shopping malls, food courts, sports fields, etc., and has been opened for migration.";
        all_img.classList.add("-on"); 
    }

    if (page_no.innerText == 2) {
        title.innerText = "CONCEPT2";
        text.innerHTML ="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet possimus doloribus maxime debitis placeat sunt maiores natus dolorem laborum magni voluptate minus repellendus obcaecati aut quidem, nihil sed tempora alias." ;
        all_img.classList.add("-on2");
    }

    if (page_no.innerText == 3) {
        title.innerText = "CONCEPT3";
        text.innerHTML = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis autem eum minus deleniti laudantium earum id. Iste quis quae necessitatibus corporis minus quia quo quaerat iusto cumque animi rerum illum eos placeat vero illo aliquam esse molestias quas doloremque suscipit modi, ut atque aliquid vel. Alias eius nobis odio exercitationem?';
        all_img.classList.add("-on3");
    }
// --------------------------------------控制圖片--------------------------------------------

// img1.classList.add("-on");
// img2.classList.add("-on");
// img3.classList.add("-on");
// all_img.classList.add("-on"); 
console.log("bbb");


// -----------------------------------------------------------------------------------
})

item1_el.addEventListener("click",function(){
    if(Number(page_no.innerText) > 1){
        let x  = Number(page_no.innerText);
        x -= 1;
        page_no.innerText = x;
// -----------------------------------------------------------------------------------
if (page_no.innerText == 1) {
    title.innerText = "SPACE STATION";
    text.innerHTML ="The space relay station set up by our company on the other side of the galaxy is made of special metals found on Mars. Currently in the final setup stage, with other space stations capable of accommodating nearly 100,000 people, the space station has facilities such as relay stations, shopping malls, food courts, sports fields, etc., and has been opened for migration.";
}

if (page_no.innerText == 2) {
    title.innerText = "CONCEPT2";
    text.innerHTML ="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet possimus doloribus maxime debitis placeat sunt maiores natus dolorem laborum magni voluptate minus repellendus obcaecati aut quidem, nihil sed tempora alias." ;

}

if (page_no.innerText == 3) {
    title.innerText = "CONCEPT3";
    text.innerHTML = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis autem eum minus deleniti laudantium earum id. Iste quis quae necessitatibus corporis minus quia quo quaerat iusto cumque animi rerum illum eos placeat vero illo aliquam esse molestias quas doloremque suscipit modi, ut atque aliquid vel. Alias eius nobis odio exercitationem?';
}
// -----------------------------------------------------------------------------------        
    }else{
        page_no.innerText = 3;
    }

    all_img.classList.remove("-on");
    console.log("aaa");
})




