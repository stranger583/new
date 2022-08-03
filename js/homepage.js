$(function(){
    let i =0;
    $(".home5_1_ul").find('li:first').attr('disable',true).css("pointer-events","none");
    $(".home5_1_ul").find('li:last').attr('disable',true).css("pointer-events","none");
    // $(".home5_1_ul").find('li:nth-child(2)').addclass("home5_light");
    
    
    $( ".polygon1" ).click(
       
        function(){
            i++;
            let x = 402 * i;
            console.log(x);
            
            // $(".home5_1_ul").append($(".home_service1").clone(true));
            // -------------------------複製---------------------------------------------
             $(".home5_1_ul").append($(".home5_1_ul").find('li:first').clone(true));
            //  -----------------------刪除---------------------------------------------
            // setTimeout(function(){$(".home5_1_ul").find('li:first').remove();},500) 
            $(".home5_1_ul").find('li:first').remove();
            
            // ------------------------------要得-------------------------------------------------
            $(".home5_1_ul").find('li:first').css('transform', 'scale(.7)').attr('disable',true).css("pointer-events","none");
            $(".home5_1_ul").find('li:nth-child(2)').css('transform', 'scale(1)').css("pointer-events","auto");
            $(".home5_1_ul").find('li:last').css('transform', 'scale(.7)').attr('disable',true).css("pointer-events","none");
            $(".home5_1_ul").find('li:first a').removeClass("home5_light")
            $(".home5_1_ul").find('li:nth-child(2) a').addClass("home5_light")
            $(".home5_1_ul").find('li:last a').removeClass("home5_light")

            // $(".home5_1_ul").find('li').addClass("righ")
            $(".home5_1_ul").find('li:nth-child(1)').addClass("righ3")
            $(".home5_1_ul").find('li:nth-child(2)').addClass("righ2")
            $(".home5_1_ul").find('li:nth-child(3)').addClass("righ1")
            $(".home5_1_ul").find('li:nth-child(4)').addClass("righ1")
            setTimeout(function(){$(".home5_1_ul").find('li').removeClass("righ1");},500)
            setTimeout(function(){$(".home5_1_ul").find('li').removeClass("righ2");},500)
            setTimeout(function(){$(".home5_1_ul").find('li').removeClass("righ3");},500)


        }
    )


    $( ".polygon2" ).click(
        function(){
            i++;
            let x = 402 * i;
            $(".home5_1_ul").find('li:nth-child(1)').addClass("scale2")
            $(".home5_1_ul").find('li:nth-child(2)').addClass("scale1")
            $(".home5_1_ul").find('li:nth-child(3)').addClass("scale3")
            $(".home5_1_ul").find('li:nth-child(4)').addClass("scale3")
            // $(".home5_1_ul").append($(".home_service1").clone(true));
            // -------------------------複製---------------------------------------------
            $(".home5_1_ul").find('li:first').before($(".home5_1_ul").find('li:last').clone(true)); 
            //  -----------------------刪除---------------------------------------------
             $(".home5_1_ul").find('li:nth-child(4)').remove();
             //  -----------------------刪除class---------------------------------------------
               setTimeout(function(){$(".home5_1_ul").find('li').removeClass("scale2");},500)
               setTimeout(function(){$(".home5_1_ul").find('li').removeClass("scale1");},500)
               setTimeout(function(){$(".home5_1_ul").find('li').removeClass("scale3");},500)
            // ------------------------------控制滑鼠-------------------------------------------------
            $(".home5_1_ul").find('li:first').css('transform', 'scale(.7)').attr('disable',true).css("pointer-events","none");
            $(".home5_1_ul").find('li:nth-child(2)').css('transform', 'scale(1)').css("pointer-events","auto");
            $(".home5_1_ul").find('li:last').css('transform', 'scale(.7)').attr('disable',true).css("pointer-events","none");
            $(".home5_1_ul").find('li:first a').removeClass("home5_light")
            $(".home5_1_ul").find('li:nth-child(2) a').addClass("home5_light")
            $(".home5_1_ul").find('li:last a').removeClass("home5_light")

        }
    )
})







