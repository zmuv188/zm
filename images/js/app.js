/*
 *  模板由 QQ：1002535 提供
 *  商城地址：www.dbwyt.com
 * icen
 * ====================================================
*/
var icen = $('body');



var closeTips = function(){
    $('.mtips').addClass('hide');
}

var son =$('.searchstart-on'),
    soff=$('.searchstart-off'),
    isea=$('.searchform');
son.on('touchend',function(e){
    $(this).hide();
    isea.show();
    soff.show();
    e.preventDefault();
})
soff.on('touchend',function(e){
    $(this).hide();
    son.show();
    isea.hide();
    e.preventDefault();
})

/*
 * tabs
 * ====================================================
*/
if ($('#playNumTab').length) {
    var $a = $('#playNumTab a');
    var $ul = $('.v_con_box ul');

    $a.click(function(){
        var $this = $(this);
        var $t = $this.index();
        $a.removeClass();
        $this.addClass('cur');
        $ul.addClass('hide').removeClass('show');
        $ul.eq($t).addClass('show');
    })
}
if ($('.js-tab-btn').length) {
    var $c = $('.js-tab-btn');
    var $tabul = $('.js-tab-con');

    $c.click(function(){
        var $this = $(this);
        var $tt = $this.index();
        $c.removeClass();
        $this.addClass('cur');
        $tabul.addClass('hide').removeClass('show');
        $tabul.eq($tt).addClass('show');
        $('.thumb').lazyload()
    })

}

if ($('#htxt').length) {
    var $b = $('#headtab a'),
        $uls = $('#p-list ul'),
        $htxt =$('#htxt'),
        $headtab=$('#headtab');
    $htxt.on('touchend',function(e){
        $headtab.show();
        e.preventDefault();
    });
    $b.click(function(){
        var $thi = $(this);
        var $ts = $thi.index();
        $b.removeClass();
        $uls.addClass('hide').removeClass('show');
        $uls.eq($ts).addClass('show');
        $headtab.hide();
        setTimeout(function () { 
        $headtab.removeAttr("style");
        }, 900);
    })
}
/*
 * fixed
 * ====================================================
*/
// $(function(){
//     if(window.location.hash){
//         var targetScroll = $(window.location.hash).offset().top - 80;
//         $("html,body").animate({scrollTop:targetScroll},300);
//     }
//     $(window).scroll(function(){
//         var $this = $(this);
//         var targetTop = $(this).scrollTop();
//         var height = $(window).height();
//         if (targetTop >= 90){
//             $(".itopbar").addClass("fixed");
//         }else{
//             $(".itopbar").removeClass("fixed");
//         }
//     })
// }());
var fix_length = 200;
var $nav = $('.itopbar');
var navTop = $nav.offset().top;
var navH = $nav.outerHeight();
var winTop_1 = 0;
var winWidth = $(window).width();
$(window).on('scroll', function() {
    var winTop_2 = $(window).scrollTop();
    if (winTop_2 > navTop && winWidth > 980) {
        $nav.addClass('idown');
        if (winTop_2 > winTop_1) {
            $nav.addClass('fix_sec');
            if (winTop_2 > fix_length) {
                $nav.removeClass('fix_sec')
            }
        }
    } else {
        $nav.removeClass('idown')
    }
    if (winTop_2 > winTop_1 && winWidth > 980) {
        $nav.removeClass('iup')
    } else if (winTop_2 < winTop_1) {
        $nav.addClass('iup');
        $nav.removeClass('fix_sec')
    }
    winTop_1 = $(window).scrollTop()
})

/*
 * lazyload
 * ====================================================
*/
if ($('.thumb').length) {
    $('.thumb').lazyload()
}
/*
 * banner
 * ====================================================
*/
if ($('.ibanner').length) {
        var swiper = new Swiper('.swiper-container', {
            autoplay: 3500,
            speed: 1000,
            autoplayDisableOnInteraction: false,
            loop: true,
            centeredSlides: true,
            slidesPerView: 2,
            pagination: '.swiper-pagination',
            paginationClickable: true,
            prevButton: '.swiper-button-prev',
            nextButton: '.swiper-button-next',
            preloadImages: false,
            lazyLoading: true,
            onInit: function(swiper) {
                swiper.slides[2].className = "swiper-slide swiper-slide-active"; //第一次打开不要动画
            },
            breakpoints: {
                668: {
                    slidesPerView: 1,
                }
            }
        });
}
/*
 * back top
 * ====================================================
*/
var backtophtml='<div class="goback cur"><i class="iconfont">&#xe604;</i></div>';
window.onload=function() {
    icen.append(backtophtml);
    $(window).on("scroll", function() {
        var t = $(this).scrollTop();
        t > 200 ? $(".goback").addClass("cur") : $(".goback").removeClass("cur")
    }), $(document).on("click", ".goback", function() {
        $("html,body").animate({
            scrollTop: 0
        }, 800)
    });
};
/*
 * changes
 * ====================================================
*/
if ($('.a_change').length) {
    var divs=[];
    var divCnt = 3; //div 数量 
    for (var i=0;i<divCnt;i++) {
       divs[i] = $(".aclcon"+(i+1));
    }
    var selectedDiv = 0;
    $('.a_change').on('click', function(){
        selectedDiv++;
        selectedDiv = selectedDiv % divCnt; //
        for (var i=0;i< divCnt;i++) {
           $(this).closest('.col-l', '.a_clist').find(divs[i]).removeClass('show fadeIn').addClass('hide fadeOut'); 
        }
        $(this).closest('.col-l', '.a_clist').find(divs[selectedDiv]).removeClass('hide fadeOut').addClass('show fadeIn'); 
        $('.thumb').lazyload()
        })
}
/*
 * changes
 * ====================================================
*/
if ($('.separator').length) {
function expandSidebar(a, b) {
    var i, c = $(".iplaytop .col-l"),
        d = $(".separator"),
        e = $(".iplaytop .col-r"),
        f = $(".play-asso");
    $(".scrollbar"), 
    $(".play-asso .r-v-list ul li a.selected"), 
    i = $(".sidebar-right"), 
    c.width(a), 
    d.removeClass("separator-close").addClass("separator-open"), 
    e.removeAttr("style").removeClass('on'), 
    f.removeAttr("style"), 
    f.removeClass("play-asso-on")
}
function closeSidebar(a, b) {
    var c = $(".iplaytop .col-l"),
        d = $(".separator"),
        e = $(".iplaytop .col-r"),
        f = $(".play-asso");
    e.width(a).addClass('on'), 
    e.show(), 
    c.width(a), 
    d.removeClass("separator-open").addClass("separator-close"),
    f.addClass("play-asso-on")
}
function GetTargetWidth(a) {
    var b = $(document.body),
        c = $(".separator"),
        d = c.hasClass("separator-open"),
        e = b.attr("class");
        return _WIDTH_1200_WIDE
}
$(".separator").on("click", function() {
        var c, d, a = window.navigator.userAgent.toLowerCase();
        $(".iplays"), 
        c = $(this), 
        d = !(/msie 8\.0/i.test(a) || /msie 7\.0/i.test(a) || /msie 6\.0/i.test(a)), c.hasClass("separator-open") ? closeSidebar('100%', d) : expandSidebar('80%', d)
    })

}

/*
 * 弹幕开关
 * ====================================================
*/
if ($('.u-toggle').length) {
$(".u-toggle").click(function() {
    if ($(".u-toggle").hasClass('u-toggle-on')) {
        $(".u-toggle").removeClass("u-toggle-on");
        $("#cyTvbarrage").hide();
    } else {
        $(".u-toggle").addClass("u-toggle-on");
        $("#cyTvbarrage").show();
    }
});
}
/*
 * console
 * ====================================================
*/
var QKOvQzuqT1 = window["\x63\x6f\x6e\x73\x6f\x6c\x65"] || {
    log: function() {}
};
QKOvQzuqT1["\x6c\x6f\x67"]("\u6843\u4e4b\u592d\u592d\uff0c\u707c\u707c\u5176\u534e\u3002"), QKOvQzuqT1["\x6c\x6f\x67"]("\u5982\u9700\u6a21\u677f\u8bf7\u6dfb\u52a0 \x25\x63 \u4f5c\u8005\x51\x51 \x39\x36\x33\x33\x30\x36\x30\x30\x30 \x28\u8bf7\u5907\u6ce8\u54ea\u4e2a\x43\x4d\x53\x29", "\x63\x6f\x6c\x6f\x72\x3a\x23\x66\x36\x36")