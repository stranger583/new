// -----------------------------文字框-----------------------------------------------------
let service_main = document.getElementsByClassName("service_main")[0];
let service_text1 = service_main.firstElementChild;
let service_text2 = service_main.children[1];
let service_text3 = service_main.children[2];

// -----------------------------選單-----------------------------------------------------
let service_list = document.getElementsByClassName("service_list")[0];
let service1 = service_list.querySelectorAll("div")[0];
let service2 = service_list.querySelectorAll("div")[1];
let service3 = service_list.querySelectorAll("div")[2];

// -----------------------------控制-----------------------------------------------------



// service1.addEventListener("click",function(){
//     service_text1.classList.remove("text_test");
//     service_text2.classList.add("text_test");
//     service_text3.classList.add("text_test");

//     setTimeout(function(){
//         service_text1.classList.add("-on");
//         service_text2.classList.remove("-on");
//         service_text3.classList.remove("-on");
//     },100)
    


// })

// service2.addEventListener("click",function(){
//     service_text1.classList.add("text_test");
//     service_text2.classList.remove("text_test");
//     service_text3.classList.add("text_test");

// ----------------------------------------------------------------------------------
    
    // service1.style.transform = 'translateX(' + 670 + 'px)';
    // service1.style.transition = "all  1s";

    // service2.style.transform = 'translateX(-' + 335 + 'px)';
    // service2.style.transition = "all  1s";

    // service3.style.transform = 'translateX(-' + 335 + 'px)';
    // service3.style.transition = "all  1s";

// ----------------------------------------------------------------------------------

//     setTimeout(function(){
//         service_text2.classList.add("-on");
//         service_text1.classList.remove("-on");
//         service_text3.classList.remove("-on");
//     },100)
// })

// service3.addEventListener("click",function(){
//     service_text1.classList.add("text_test");
//     service_text2.classList.add("text_test");
//     service_text3.classList.remove("text_test");

//     setTimeout(function(){
//         service_text3.classList.add("-on");
//         service_text1.classList.remove("-on");
//         service_text2.classList.remove("-on");
//     },100)

//     service1.style.transform = 'translateX(' + 335 + 'px)';
//     service1.style.transition = "all  1s";

//     service2.style.transform = 'translateX(' + 335 + 'px)';
//     service2.style.transition = "all  1s";

//     service3.style.transform = 'translateX(-' + 670 + 'px)';
//     service3.style.transition = "all  1s";


// })



$(function () {		
    let i = 0;
    $( ".service_list" ).click(function(e){
       // console.log($(this).offset().left);//905
       
       // $(".slide").append($(".service_list").clone(true));
      
    })


    $( ".service_list" ).draggable({

        axis: "x",
        drag: function() {
            let a = $(this).offset().left;
            // console.log($(this).offset().left);

        },
        stop: function(e) {
            let a = $(this).offset().left;
            let t = Math.ceil( a / 335); //   a/335變成整數
            // console.log(t);
            // console.log(a);
            let m = 335;
            let b = -100;
            // console.log(-t*m);
            let c =   $(".service_list" ).css("left");
            //let c1 = Math.ceil(c);
            
            
            if(t !== 0){$( ".service_list" ).animate({left: (c + (-t * m)),},500);}
            // if(a >= b && a < (b + m) ){$( ".service_list" ).animate({left: -2*m,},500)}
            // if(a >= (b + m) && a < (b + 2 * m) ){$( ".service_list" ).animate({left: -m,},500)}
            // if(a >= (b + 2 * m) && a < (b + 3 * m) ){$( ".service_list" ).animate({left:0,},500)}
            // if(a >= (b + 3 * m) && a < (b + 4 * m) ){$( ".service_list" ).animate({left:m,},500);}
            // if(a >= (b + 4 * m) && a < (b + 5 * m) ){$( ".service_list" ).animate({left:2*m,},500)}
            $(".service_list").append($(".service1, .service2, .service3").clone(true));
            
          
           


            
            
           

        
        
        
        }
      });

    // -----------------------------------------------------------
        // $( ".service1" ).draggable({ axis: "x" });
        // $( ".service1" ).draggable({ containment: "parent" });
        
        //     $(this).clone("true");
        
    });		