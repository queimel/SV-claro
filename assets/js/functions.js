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

$(document).ready(function() {


    // PROFILE
    $("header .up .right section .user > span").click(function() {
        $("header .up .right section .user > div").fadeToggle(350);

    });

    $('.box').matchHeight();
    $('.descr').matchHeight();

    // MENU MOBILE
    $('header .down nav span.ico').on('click', function() {
        $('header .down nav ul.mobile').toggleClass('responsive');
    });

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
    

});
