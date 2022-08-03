$(document).ready(function(){
    // nav
    $("header nav > ul > li").hover(function(){
        $(".sub").stop().fadeIn(250);
    },function(){
        $(".sub").stop().fadeOut(250);
    });

    // slide
    var slidewidth=$(".slide-img").width();
    function slidemove(){
        $(".slide-box").animate({
            left: -slidewidth
        },function(){
            $(".slide-img:first").appendTo(".slide-box");
            $(".slide-box").css("left",0);
        });
    }
    setInterval(slidemove, 3000);

    // tab
    $(".con-tab > div").hide();
    $(".con-tab > div:first").show();    
    $(".con-tab-title a").click(function(){
        var num=$(this).index();

        console.log(num)
        $(".con-tab > div").hide();
        $(".con-tab > div").eq(num).show();
        
    });

    // pop
    $("#pop").hide();
    $(".con-tab > div:first").click(function(){
        $("#pop").show();
    });
    $("#pop button").click(function(){
        $("#pop").hide();
    });
});

