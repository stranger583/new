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

        }
    )


    $( ".polygon2" ).click(
        function(){
            i++;
            let x = 402 * i;
            // $(".home5_1_ul").find('li:first').css('transform', 'translateX(-' + x + 'px) scale(.7)' );
            // $(".home5_1_ul").find('li:nth-child(2)').css('transform', 'translateX(-' + x + 'px) scale(1)');
            // $(".home5_1_ul").find('li:last').css('transform', 'translateX(-' + x + 'px) scale(.7)');
             // $( ".home_service3" ).css('transform', 'translateX(' + x + 'px) scale(.7)');
            console.log(x);
            
            // $(".home5_1_ul").append($(".home_service1").clone(true));
            // -------------------------複製---------------------------------------------
             // $(".home5_1_ul").append($(".home5_1_ul").find('li:first').clone(true));
            
             $(".home5_1_ul").find('li:first').before($(".home5_1_ul").find('li:last').clone(true));

            //  -----------------------刪除---------------------------------------------
            // setTimeout(function(){$(".home5_1_ul").find('li:first').remove();},500) 
            $(".home5_1_ul").find('li:nth-child(4)').remove();
            
            // $(".home5_1_ul").find('li:first').css('transform', 'translateX(-' + x + 'px) scale(.7)' );
            // $(".home5_1_ul").find('li:nth-child(2)').css('transform', 'translateX(-' + x + 'px) scale(1)');
            // $(".home5_1_ul").find('li:last').css('transform', 'translateX(-' + x + 'px) scale(.7)');


             // $(".home5_1_ul").find('li:first').css('transform', 'scale(1)');
            // $(".home5_1_ul").find('li:first').addClass("scale")
            // ------------------------------要得-------------------------------------------------
            $(".home5_1_ul").find('li:first').css('transform', 'scale(.7)').attr('disable',true).css("pointer-events","none");
            $(".home5_1_ul").find('li:nth-child(2)').css('transform', 'scale(1)').css("pointer-events","auto");
            $(".home5_1_ul").find('li:last').css('transform', 'scale(.7)').attr('disable',true).css("pointer-events","none");
            $(".home5_1_ul").find('li:first a').removeClass("home5_light")
            $(".home5_1_ul").find('li:nth-child(2) a').addClass("home5_light")
            $(".home5_1_ul").find('li:last a').removeClass("home5_light")

             //$(".home5_1_ul").append($(".home5_1_ul").find('li:first').clone(true));
            // .home5_1_ul
        }
    )
})