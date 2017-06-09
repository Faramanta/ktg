$(document).ready(function(){
    //Плавная прокрутка до якоря
    $('.sub-menu').on('click','a', function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top-165}, 1500);
    });

    $('.sub-menu-about').on('click','a', function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top-40}, 1500);
    });

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



    // автоматическая активация пунктов меню
    var $sections = $('.prod__row');
    $sections.each(function(i,el){
        var top  = $(el).offset().top;
        var bottom = top +$(el).height();
        var scroll = $(window).scrollTop();
        var id = $(el).attr('id');
        if( scroll > top && scroll < bottom){
            $('.sub-menu__link.active').removeClass('active');
            $('.sub-menu__link[href="#'+id+'"]').addClass('active');

        }
    });
});