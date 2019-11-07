$(document).ready(function () {

    //for main menu
    $('#mainMenu>li').each(function () {
        if ($(this).children().length > 1) {
            $(this).addClass('has-submenu');
        }
    });
    $(document).on('click', '.has-submenu>a', function (e) {
        e.preventDefault();
    });
    var menuOverlay = $('#main-menu-overlay');
    $('#mainMenu>li').hover(function () {
        if ($(window).outerWidth() >= 992) {
            $(this).parent().addClass('hover');
            var h = $(this).find('ul').outerHeight();
            menuOverlay.height(h).addClass('show');
            $(this).addClass('item-hover');
        }
    }, function () {
        if ($(window).outerWidth() >= 992) {
            $(this).parent().removeClass('hover');
            $(this).removeClass('item-hover');
            menuOverlay.removeClass('show');
        }
    });

    $('#mainMenu>li').on('click', function () {
        if ($(window).outerWidth() < 992 && $(window).outerWidth() > 767) {
            $('body').removeClass('show-search-field');
            $(this).closest('.main-menu-wrap').addClass('open-submenu');
            $('#mainMenu>li').removeClass('show-submenu');
            $(this).addClass('show-submenu');
        }
        if ($(window).outerWidth() < 767) {
            $(this).closest('.main-menu-wrap').addClass('open-mobile-submenu');
            var menuList = $(this).find('ul').clone();
            var title = $(this).find('a:first').text();
            var titleHtml = '<div class="mobile-submenu-title"><span>' + title + '</span></div>';
            $('.mobile-submenu-wrap').html(menuList).prepend(titleHtml);
        }
    });
    $(document).on('click', '.mobile-submenu-title', function () {
        $('.main-menu-wrap').removeClass('open-mobile-submenu');
    });

    //show search field
    $(document).on('click', '.search-btn', function () {
        $('body').toggleClass('show-search-field');
        if ($(window).outerWidth() > 991) {
            $('#desktop-search-wrap').slideToggle();
        } else {
            $('#mainMenu>li').removeClass('show-submenu');
        }
    });

    $('.mobile-menu-btn').on('click', function () {
        $('body').toggleClass('show-mobile-menu');
    });

    //home pae slider init
    $('.main-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        appendArrows: '.main-slider-nav',
        nextArrow: '<button type="button" class="next-btn">\n' +
            '                <svg class="icon-sprite svg-icon">\n' +
            '                    <use xlink:href="img/symbol_sprite.svg#icon-arrow-right"></use>\n' +
            '                </svg>\n' +
            '            </button>',
        prevArrow: '<button type="button" class="prev-btn">\n' +
            '                <svg class="icon-sprite svg-icon">\n' +
            '                    <use xlink:href="img/symbol_sprite.svg#icon-arrow-left"></use>\n' +
            '                </svg>\n' +
            '            </button>'
    });

    //accordion
    $('.accordion-item-title').on('click', function(){
        $(this).closest('.accordion-item').toggleClass('active');
        $(this).closest('.accordion-item').find('.accordion-item-body').stop().slideToggle();
    });

    //img gallery
    $('[data-fancybox="photo"]').fancybox({
        loop : true,
        protect: true,
        transitionEffect : 'circular',
        transitionDuration : 500,
        thumbs : {
            autoStart   : false,
            hideOnClose : false
        },
        lang : 'ru',
        i18n : {
            'ru' : {
                CLOSE       : 'Закрыть',
                NEXT        : 'Следующий',
                PREV        : 'Предыдущий',
                ERROR       : 'Ошибка',
                PLAY_START  : 'Старт',
                PLAY_STOP   : 'Стоп',
                FULL_SCREEN : 'На весь экран',
                THUMBS      : 'THUMBS'
            }
        },
        buttons : ['close']
    });

    //open modal
    $('.modal-btn').fancybox({
        hideOnOverlayClick: true,
        hideOnContentClick: true,
        enableEscapeButton: true,
        showCloseButton: true
    });

    //tabs
    $('.tab-btn').on('click', function(){
        let id = $(this).attr('data-tab');
        $(this).closest('.tabs-wrap').find('.tab-btn').removeClass('active');
        $(this).addClass('active');

        $(this).closest('.tabs-wrap').find('.tab-content').removeClass('show');
        $(this).closest('.tabs-wrap').find('.tab-content[data-tab='+id+']').addClass('show');
    });

    pageView();

    //hide preloader
    setTimeout(function () {
        $('#preloader').fadeOut(300);
    }, 300);

});

$(window).resize(pageView);

function pageView() {
    if ($(window).outerWidth() < 992) {
        $('.search-btn').appendTo($('#mainMenu'));
        $('#desktop-search-wrap .search-block').appendTo('#mainMenu');
        $('.header .header-contacts').appendTo('#mainMenuWrapper>.container');
        $('.employee-block').each(function(){
            $(this).appendTo('#mobile-row');
        });
    } else {
        $('#mainMenu .search-block').appendTo('#desktop-search-wrap>.container');
        $('#mainMenuWrapper .header-contacts').appendTo('.header .header-inner-wrapper');
        $('#mainMenu .search-btn').appendTo('#mainMenuWrapper>.container>div');
    }
}

