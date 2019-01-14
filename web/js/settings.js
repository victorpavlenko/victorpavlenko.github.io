$(document).ready(function () {
    "use strict";
    try {

        /* ==========================================================================
         #PieChart For Skills Page
         ========================================================================== */
        $('.grid-wrap').on('click', 'li', function(){
            $('.imgScroll').css('height', $(window).height() - 300).jScrollPane()
        });

        $('.chart').easyPieChart({
            easing: 'easeOutBounce',
            onStep: function (from, to, percent) {
                $(this.el).find('.percent').text(Math.round(percent));
            }
        });


        /* ==========================================================================
         #Carousel Popup For Portfolio Page
         ========================================================================== */
        $(".owl-carousel").owlCarousel({
            navigation: true,
            slideSpeed: 300,
            paginationSpeed: 400,
            singleItem: true,
            autoPlay: false
        });

        /* ==========================================================================
         #Text Rotator
         ========================================================================== */
        $('#rotate').rotaterator({fadeSpeed: 800, pauseSpeed: 800});

        /* ==========================================================================
         #Orientation change event
         ========================================================================== */
        $(window).on('orientationchange', function (event) {
            window.location.href = window.location.href;
        });

        //Videos
        $(".content-scroller").fitVids();

    } catch (ex) {
    }
});

/* ==========================================================================
 #Progress Bar For Skills Page
 ========================================================================== */

progressBar(50, $('#progressBar'));
progressBar(70, $('#progressBar2'));
progressBar(99, $('#progressBar3'));
progressBar(100, $('#progressBar4'));

/* ==========================================================================
 #Mobile Menu
 ========================================================================== */

var $menu = $('#menu1'),
        $menulink = $('.menu-link');
$menulink.click(function () {
    $menulink.toggleClass('active');
    $menu.toggleClass('active');
    return false;
});

$('nav#menu1 a').click(function () {
    $('#menu1').removeClass('active');
});



/* ==========================================================================
 #iPad,iPhone,iPod Keyboard issue with position fixed
 ========================================================================== */
var iPad = navigator.userAgent.toLowerCase().indexOf("ipad");
var iPhone = navigator.userAgent.toLowerCase().indexOf("iphone");
var iPod = navigator.userAgent.toLowerCase().indexOf("ipod");
if (iPad > -1 || iPhone > -1 || iPod > -1)
{
    window.onscroll = function () {
        $('.totop-link').css('position', 'absolute');
        $('.totop-link').css('top', (window.pageYOffset + window.innerHeight - 39) + 'px');
    };
}
