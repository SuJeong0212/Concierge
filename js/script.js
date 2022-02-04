//스크롤 애니메이션
$(function(){
    $('.animate').scrolla({
        mobile: true,
        once: false 
    })
});

//header Event
var scrollValue = 0;
scrollValue = $(document).scrollTop();
fixHeader();

$(window).on('scroll resize', function(){
    scrollValue = $(document).scrollTop();
    fixHeader();
})

function fixHeader(){
    if(scrollValue > 200){
        $('header').addClass('on');
    }else{
        $('header').removeClass('on');
    }
}

$(function(){
    $('.visual .slide').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        fade: true,
        autoplaySpeed: 5000,
        pauseOnHover: false,
        pauseOnFocus: false
    });
});

$(function(){
    $('header .open').on('click',function(){
        $('body').css({'overflow':'hidden'});
        $('header .bg').css({'display':'block'});
        $('header nav').addClass('on');
    });
    $('header .close, header .bg').on('click',function(){
        $('body').css({'overflow':'auto'});
        $('header .bg').css({'display':'none'});
        $('header nav').removeClass('on');
    });
});