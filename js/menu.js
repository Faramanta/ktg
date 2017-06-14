$(document).ready(function(){


    //Плавная прокрутка до якоря
    $('.js-sub-menu').on('click','a', function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top-170}, 1000);
    });

    $('.js-menu-about').on('click','a', function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top-40}, 1000);
    });

// активный пункт меню
    $('.sub-menu__link').on('click', function () {
        if(!$(this).hasClass('active')) {
            $('.sub-menu__link').removeClass('active');
            $(this).addClass('active');
        }
    });


});


var _scrollTop;
$(window).scroll(function(){
    _scrollTop = $(window).scrollTop();

//уменьшение меню
    var h_header = 60;
    $(function(){
        var top = $(this).scrollTop();

        if(top > h_header){
            $('.sub-menu__link').addClass('small');
        }
        $(window).scroll(function(){
            top = $(this).scrollTop();
            if (top>h_header) {
                $('.sub-menu__link').addClass('small');
                $('.sub-menu__item').addClass('small');

            } else {
                $('.sub-menu__link').removeClass('small');
                $('.sub-menu__item').removeClass('small');
            }
        });
    });

});

// активный пункт меню
function scroll_active() {
    var window_top = $(window).scrollTop();
    var original_top = $('div[id="original"]').offset().top;
    var premium_top = $('article[id="premium"]').offset().top-180;
    var exchange_top = $('article[id="exchange"]').offset().top-180;
    var cafe_top = $('article[id="cafe"]').offset().top-190;
    var mini_top = $('article[id="mini"]').offset().top-180;

    if (window_top > premium_top) {
        $('.sub-menu__link').removeClass('active');
        $('a[href="#premium"]').addClass('active');
        if (window_top > exchange_top) {
            $('.sub-menu__link').removeClass('active');
            $('a[href="#exchange"]').addClass('active');
            if (window_top > cafe_top) {
                $('.sub-menu__link').removeClass('active');
                $('a[href="#cafe"]').addClass('active');
                if (window_top > mini_top) {
                    $('.sub-menu__link').removeClass('active');
                    $('a[href="#mini"]').addClass('active');
                }
            }
        }
    } else {
        $('.sub-menu__link').removeClass('active');
        $('a[href="#original"]').addClass('active');
    }
}

function scroll_active2() {
    var window_top = $(window).scrollTop();
    var ktg_top = $('div[id="ktg"]').offset().top;
    var history_top = $('section[id="history"]').offset().top-80;
    var princip_top = $('section[id="princip"]').offset().top-80;
    var ecology_top = $('section[id="ecology"]').offset().top-80;
    var logo_top = $('section[id="logo"]').offset().top-80;
    var security_top = $('section[id="security"]').offset().top-80;


    if (window_top > history_top) {
        $('.sub-menu__link').removeClass('active');
        $('a[href="#history"]').addClass('active');
        if (window_top > princip_top) {
            $('.sub-menu__link').removeClass('active');
            $('a[href="#princip"]').addClass('active');
            if (window_top > ecology_top) {
                $('.sub-menu__link').removeClass('active');
                $('a[href="#ecology"]').addClass('active');
                if (window_top > logo_top) {
                    $('.sub-menu__link').removeClass('active');
                    $('a[href="#logo"]').addClass('active');
                    if (window_top > security_top) {
                        $('.sub-menu__link').removeClass('active');
                        $('a[href="#security"]').addClass('active');
                    }
                }
            }
        }
    } else {
        $('.sub-menu__link').removeClass('active');
        $('a[href="#ktg"]').addClass('active');
    }
}

