// PLACEHOLDERS
(function($) {
    $.support.placeholder = ('placeholder' in document.createElement('input'));
})(jQuery);
$(function() {
    if (!$.support.placeholder) {
        $("[placeholder]").focus(function() {
            if ($(this).val() == $(this).attr("placeholder")) $(this).val("");
        }).blur(function() {
            if ($(this).val() == "") $(this).val($(this).attr("placeholder"));
        }).blur();

        $("[placeholder]").parents("form").submit(function() {
            $(this).find('[placeholder]').each(function() {
                if ($(this).val() == $(this).attr("placeholder")) {
                    $(this).val("");
                }
            });
        });
    }
});

// Scroll on top
$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('.scrollToTop').fadeIn();
        } else {
            $('.scrollToTop').fadeOut();
        }
    });

    $('.scrollToTop').click(function() {
        $('html, body').animate({ scrollTop: 0 }, 800);
        return false;
    });

});


// Comparador toggle
$(document).ready(function() {
    $(".comPlanes article.toggle a.change").click(function() {
        $(".comPlanes article > .right").toggle();
    });
    $(".comPlanes article.toggle a.change").click(function() {
        $(".comPlanes article > .left").toggle();
    });

    $(".comPlanes article.toggle a.change").click(function() {
        $(".comPlanes article.toggle a.change").toggleClass("back");
    });
});


// Ver más planes
$(function() {
    $(".full").slice(0, 1).show();
    $(".more a").on('click', function(e) {
        e.preventDefault();
        $(".full:hidden").slice(0, 1).slideDown();
        if ($(".full:hidden").length == 0) {
            $("#load").fadeOut('slow');
        }
        $('html,body').animate({
            scrollTop: $(this).offset().top
        }, 1500);
    });
});

// Equals Columns detalle contratado (servicios móvil)
function equalHeight(group) {
    tallest = 0;
    group.each(function() {
        thisHeight = $(this).height();
        if (thisHeight > tallest) {
            tallest = thisHeight;
        }
    });
    group.height(tallest);
}
$(document).ready(function() {
    equalHeight($(".Newcol3 > div"));
});

$(document).ready(function() {

    // ACORDEON 
    $('.accordion .buttonC').click(function(e) {
        e.preventDefault();

        var $this = $(this);

        if ($this.next().hasClass('show')) {
            $this.next().removeClass('show');
            $this.next().slideUp(350);
        } else {
            $this.parent().parent().find('li .inner').removeClass('show');
            $this.parent().parent().find('li .inner').slideUp(350);
            $this.next().toggleClass('show');
            $this.next().slideToggle(350);
        }
    });

    // ACORDEON 
    $('.accordion .buttonB').click(function(e) {
        e.preventDefault();

        var $this = $(this);

        if ($this.next().hasClass('show')) {
            $this.next().removeClass('show');
            $this.next().slideUp(350);
        } else {
            $this.parent().parent().find('li .inner').removeClass('show');
            $this.parent().parent().find('li .inner').slideUp(350);
            $this.next().toggleClass('show');
            $this.next().slideToggle(350);
        }
    });


    // ACORDEON MOBILE
    $('.accordion.mobile .buttonA').click(function(e) {
        if ($(window).width() < 799) {
            e.preventDefault();

            if ($(this).next().hasClass('show')) {
                $(this).next().removeClass('show');
                $(this).next().slideUp(350);
            } else {
                $(this).parent().parent().find('li .inner').removeClass('show');
                $(this).parent().parent().find('li .inner').slideUp(350);
                $(this).next().toggleClass('show');
                $(this).next().slideToggle(350);
            }
        } else {
            return false;
        }
    });


    // ACORDEON TABLE
    $('.accordion .buttonC').on('click', function() {
        $(this).toggleClass('active');
    });


    // ACORDEON ACTIVE
    $('.accordion .buttonB').on('click', function() {
        $(this).toggleClass('active');
    });


    // ACORDEON MOBILE ACTIVE 
    $('.accordion.mobile .buttonA').on('click', function() {
        $(this).toggleClass('active');
    });


    // PROFILE
    $("header .up .right section .user > span").click(function() {
        $("header .up .right section .user > div").fadeToggle(350);

    });


    // BORRAR ALERTA
    $(".alert span").click(function() {
        $(".alert").fadeToggle(350);

    });


    // INICIAR PROGRESSBAR //
    function progress(percent, element) {
        var progressBarWidth = percent * element.width() / 100;
        element.find('div').animate({
            width: progressBarWidth
        }, 2000).html("<span>");
    }


    // PORCENTAJE DE PROGRESSBAR //
    progress(50, $('#max50'));
    progress(70, $('#max70'));
    progress(100, $('#max100'));


    // MENU MOBILE
    $('header .down nav span.ico').on('click', function() {
        $('header .down nav ul.mobile').toggleClass('responsive');
    });


    // OFFERS SLIDER
    $(window).load(function() {
        $('.flexslider').flexslider({
            animation: "slide",
            animationLoop: false,
            controlNav: false,
            itemWidth: 180,
            itemMargin: 5,
            minItems: 1,
            maxItems: 4
        });
    });

    // OFFERS SLIDER 2
    (function() {
        var $window = $(window),
            flexslider = { vars: {} };

        function getGridSize() {
            return (window.innerWidth < 600) ? 1 :
                (window.innerWidth < 900) ? 1 : 4;
        }
        /*$(function() {
            SyntaxHighlighter.all();
        });*/
        $window.load(function() {
            $('.offers').flexslider({
                animation: "slide",
                animationLoop: true,
                controlNav: false,
                directionNav: true,
                itemWidth: 210,
                itemMargin: 5,
                minItems: getGridSize(), // use function to pull in initial value
                maxItems: getGridSize() // use function to pull in initial value
            });
        });

        // check grid size on resize event
        $window.resize(function() {
            var gridSize = getGridSize();

            flexslider.vars.minItems = gridSize;
            flexslider.vars.maxItems = gridSize;
        });
    }());

    // POLL SLIDE
    $(function() {
        $('.slide-arrow').click(function() {
            var anchor = this;
            var removeClass = "show";
            var addClass = "hide";
            var diff = "+=600";
            var arrows = "open";
            if ($(anchor).hasClass("hide")) {
                diff = "-=600";
                removeClass = "hide";
                addClass = "show";

            }
            $(".slide-arrow, .panel").animate({
                left: diff
            }, 700, function() {
                // Animation complete.
                $(anchor).html(arrows).removeClass(removeClass).addClass(addClass);
            });
        });
    });


    // POLL OVERLAY
    $('aside .slide-arrow').on('click', function() {
        $('aside').toggleClass('overlay');
    });


    // TABS
    $(".tabMenu a").click(function(event) {
        event.preventDefault();
        $(this).parent().addClass("current");
        $(this).parent().siblings().removeClass("current");
        var tab = $(this).attr("href");
        $(".tabMod > div").not(tab).css("display", "none");
        $(tab).fadeIn();
    });

    $(".tabMenu a").click(function(event) {
        event.preventDefault();
        $(this).parent().addClass("current");
        $(this).parent().siblings().removeClass("current");
        var tab = $(this).attr("href");
        $(".tabMod > fieldset").not(tab).css("display", "none");
        $(tab).fadeIn();
    });

    $('.box').matchHeight();
    $('.txt').matchHeight();
});
