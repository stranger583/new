var project3 = document.getElementsByClassName("project3")[0];
console.log(project3.offsetTop); //1872~2682  1600~2100 總高820px

var project3_img = project3.querySelector(" div.project3_container > div.project3_img ").querySelectorAll("img");
console.log(project3_img);


window.addEventListener("scroll",function(){
//    console.log(scrollY);
   project3_img.forEach(function(item,i){
    // console.log(item, i);
    item.classList.remove("-on")
   })

   

   project3_img[0].classList.add("-on")

   if (scrollY >= 1500 && this.outerWidth > 1440 ) {
      project3_img[0].classList.remove("-on");
      n = Math.ceil( (scrollY - 1500) / 7.1 );
    if (n > 70) {
        n = 69;
        
    }
      project3_img[n].classList.add("-on")
       }

  if (scrollY >= 600 && this.outerWidth < 415) {
    console.log("aaa");
    project3_img[0].classList.remove("-on");
      n = Math.ceil( (scrollY - 600) / 5.1 );
    if (n > 70) {
        n = 69;
    }
    project3_img[n].classList.add("-on")
  }
})



