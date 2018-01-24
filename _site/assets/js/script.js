function init() {
    var pxChange = 150;

    window.addEventListener('scroll', function(e) {
        if ( $(window).scrollTop() > pxChange) {
            $('nav').addClass('nav-smaller');
        } else if ( $('nav').hasClass('nav-smaller')) {
            $('nav').removeClass('nav-smaller');
        }
    });

}

window.onload =init();

