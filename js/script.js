$(".package").eq(0).addClass("active");
$(".thumb > img").click(function(){
    var index = $(this).index();
    $(".thumb > img").removeClass("active");
    $(this).addClass("active");
    $(".package").removeClass("active");
    $(".package").eq(index).addClass("active");
    $(".text-box > ul > li").removeClass("active");
    $(".text-box > ul > li").eq(index).addClass("active");
});


const scob1 = $(".scr-ob1");
const scob2 = $(".scr-ob2");
const scob3 = $(".scr-ob3");
const scob4 = $(".scr-ob4");
/*
var scrollValue; //스크롤 위치 확인
$(window).scroll(function () { scrollValue = $(document).scrollTop(); console.log(scrollValue); });
*/
$(window).scroll(function(){
    var scrol = window.scrollY;
    scob1.css({'top': (-1184+scrol)*0.1+"px"});
    scob2.css({'left': -(-1184+scrol)*0.15+"px"});
    scob3.css({'left': (-1184+scrol)*0.15+"px"});
    scob4.css({'opacity': (-1184+scrol)*0.005});
});

$('.wheel-bg').clone().appendTo('article');
