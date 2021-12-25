
$(".toggle").click(function(){
    $(this).toggleClass("active");
    $("header ul").toggleClass("active");
})


$(".package").eq(0).addClass("active");
$(".thumb > img").click(function(){
    let index = $(this).index();
    $(".thumb > img").removeClass("active");
    $(this).addClass("active");
    $(".package").removeClass("active");
    $(".package").eq(index).addClass("active");
    $(".text-box > ul > li").removeClass("active");
    $(".text-box > ul > li").eq(index).addClass("active");
});

/*
var scrollValue; //스크롤 위치 확인
$(window).scroll(function () { scrollValue = $(document).scrollTop(); console.log(scrollValue); });
*/

let scob1;
let scob2;
let scob3;
let scob4;
let scrol;
$(window).scroll(function(){
    scrol = window.scrollY;
    scob1 = $(".scr-game.active .scr-ob1");
    scob2 = $(".scr-game.active .scr-ob2");
    scob3 = $(".scr-game.active .scr-ob3");
    scob4 = $(".scr-game.active .scr-ob4");

    scob1.css({'top': (-1184+scrol)*0.1+"px"});
    scob2.css({'left': -(-1184+scrol)*0.15+"px"});
    scob3.css({'left': (-1184+scrol)*0.15+"px"});
    scob4.css({'opacity': (-1184+scrol)*0.005});
});

$('.wheel-bg').clone().appendTo('article .wheel-con');

$(".trailler-btn").click(function(){
    $(".trailler-popup").toggleClass("active");
});
function trailler(video) {
    $(".trailler video").attr({'src':video})
    $(".trailler-popup").toggleClass("active");
}
function videoClose(){
    $(".trailler-popup").remove("active");
}

let scrIndex = 0;
const scrGame = $(".scr-game");
const scrText = $(".game-textbox > ul > li");
scrGame.removeClass("active").eq(0).addClass("active");

scrGame.click(function(){
    let bgurl;

    if(scrIndex < 2){
        scrIndex++;
    }else {
        scrIndex = 0;
    }


    if(scrIndex == 0) {
        bgurl = "imgs/tak-scr-bg.jpg";
    }else if(scrIndex == 1){
        bgurl = "imgs/ls-scr-bg.png";
    }else if(scrIndex == 2){
        bgurl = "imgs/gow-scr-bg.png";
    }

    $(".imgBx > img").attr({'src':bgurl});

    scrGame.removeClass("active");
    scrGame.eq(scrIndex).addClass("active");
    scrText.removeClass("active");
    scrText.eq(scrIndex).addClass("active");
});


$(".package").click(function(){
    let index = $(this).index();
    let bgurl;

    if(index == 0) {
        bgurl = "imgs/tak-scr-bg.jpg";
    }else if(index == 1){
        bgurl = "imgs/ls-scr-bg.png";
    }else if(index == 2){
        bgurl = "imgs/gow-scr-bg.png";
    }

    $(".imgBx > img").attr({'src':bgurl});
    scrGame.removeClass("active");
    scrGame.eq(index).addClass("active");
    scrText.removeClass("active");
    scrText.eq(index).addClass("active");
});