// ----------------------------左邊--------------------------------------------
let item1_el = document.getElementsByClassName("item1")[0];
let item3_el = document.getElementsByClassName("item3")[0];
let page_no = document.getElementsByClassName("page_number")[0];
let line =document.getElementsByClassName("line")[0];
document.querySelector("div.line > span.line1");
console.log(document.querySelector("div.line > span.line1"));
// ----------------------------中間--------------------------------------------

let all_img = document.getElementsByClassName("all_img")[0];
let img1 = all_img.firstElementChild;
let img2 = all_img.children[1];
let img3 = all_img.lastElementChild;

// console.log(img1);
// console.log(img2);
// console.log(img3);

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
        // all_img.classList.add("-on"); 
        all_img.style.transform = 'translateY(' + 575 + 'px)';
        all_img.style.transition = "all  1s";
    }

    if (page_no.innerText == 2) {
        title.innerText = "CONCEPT2";
        text.innerHTML ="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet possimus doloribus maxime debitis placeat sunt maiores natus dolorem laborum magni voluptate minus repellendus obcaecati aut quidem, nihil sed tempora alias." ;
        // all_img.classList.add("-on2");
        all_img.style.transform = 'translateY(' + 0 + 'px)';
        all_img.style.transition = "all  1s";
    }

    if (page_no.innerText == 3) {
        title.innerText = "CONCEPT3";
        text.innerHTML = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis autem eum minus deleniti laudantium earum id. Iste quis quae necessitatibus corporis minus quia quo quaerat iusto cumque animi rerum illum eos placeat vero illo aliquam esse molestias quas doloremque suscipit modi, ut atque aliquid vel. Alias eius nobis odio exercitationem?';
        // all_img.classList.add("-on3");
        all_img.style.transform = 'translateY(-' + 575 + 'px)';
        all_img.style.transition = "all  1s";
    }
// --------------------------------------控制圖片--------------------------------------------

// img1.classList.add("-on");
// img2.classList.add("-on");
// img3.classList.add("-on");
// all_img.classList.add("-on"); 


// -----------------------------------------------------------------------------------
})

item1_el.addEventListener("click",function(){
    if(Number(page_no.innerText) > 1){
        let x  = Number(page_no.innerText);
        x -= 1;
        page_no.innerText = x;
  
    }else{
        page_no.innerText = 3;
    }

    if (page_no.innerText == 1) {
        title.innerText = "SPACE STATION";
        text.innerHTML ="The space relay station set up by our company on the other side of the galaxy is made of special metals found on Mars. Currently in the final setup stage, with other space stations capable of accommodating nearly 100,000 people, the space station has facilities such as relay stations, shopping malls, food courts, sports fields, etc., and has been opened for migration.";
        all_img.style.transform = 'translateY(' + 575 + 'px)';
        all_img.style.transition = "all  1s";
    }
    
    if (page_no.innerText == 2) {
        title.innerText = "CONCEPT2";
        text.innerHTML ="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet possimus doloribus maxime debitis placeat sunt maiores natus dolorem laborum magni voluptate minus repellendus obcaecati aut quidem, nihil sed tempora alias." ;
        all_img.style.transform = 'translateY(' + 0 + 'px)';
        all_img.style.transition = "all  1s";
    }
    
    if (page_no.innerText == 3) {
        title.innerText = "CONCEPT3";
        text.innerHTML = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis autem eum minus deleniti laudantium earum id. Iste quis quae necessitatibus corporis minus quia quo quaerat iusto cumque animi rerum illum eos placeat vero illo aliquam esse molestias quas doloremque suscipit modi, ut atque aliquid vel. Alias eius nobis odio exercitationem?';
        all_img.style.transform = 'translateY(-' + 575 + 'px)';
        all_img.style.transition = "all  1s";
    }
})




/* [all_img].call(all_img.children).forEach(function (ele, index) {
    if (Math.abs(ele.getBoundingClientRect().left - all_img.getBoundingClientRect().left) < 10) {
        // 此刻的ele元素就是當前定位的元素
        // ... 你可以對ele做你想做的事情
    } else {
        // 此刻的ele元素不是當前定位的元素
    }
});   */

// console.log(Math.abs(img1.getBoundingClientRect().left - all_img.getBoundingClientRect().left))
// console.log(Math.abs(img2.getBoundingClientRect().left - all_img.getBoundingClientRect().left))
// console.log(Math.abs(img3.getBoundingClientRect().left - all_img.getBoundingClientRect().left))
if(innerWidth < 450){
    all_img.addEventListener('scroll',function(){
        if (Math.abs(img1.getBoundingClientRect().left - all_img.getBoundingClientRect().left)< 10) {
            console.log("aaa");
            title.innerText = "SPACE STATION";
            text.innerHTML ="The space relay station set up by our company on the other side of the galaxy is made of special metals found on Mars. Currently in the final setup stage, with other space stations capable of accommodating nearly 100,000 people, the space station has facilities such as relay stations, shopping malls, food courts, sports fields, etc., and has been opened for migration.";
    
        }
        if (Math.abs(img2.getBoundingClientRect().left - all_img.getBoundingClientRect().left)< 70) {
            console.log(Math.abs(img2.getBoundingClientRect().left - all_img.getBoundingClientRect().left));
            title.innerText = "CONCEPT2";
            text.innerHTML ="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet possimus doloribus maxime debitis placeat sunt maiores natus dolorem laborum magni voluptate minus repellendus obcaecati aut quidem, nihil sed tempora alias." ;
    
        }
        if (Math.abs(img3.getBoundingClientRect().left - all_img.getBoundingClientRect().left)<86) {
            console.log("ccc");
            title.innerText = "CONCEPT3";
            text.innerHTML = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis autem eum minus deleniti laudantium earum id. Iste quis quae necessitatibus corporis minus quia quo quaerat iusto cumque animi rerum illum eos placeat vero illo aliquam esse molestias quas doloremque suscipit modi, ut atque aliquid vel. Alias eius nobis odio exercitationem?';
    
            
        }
    })
    

}

