$(document).ready(function() {
    // This will fire when document is ready:
    $(window).resize(function() {
        // This will fire each time the window is resized:
        if($(window).width() <= 410) {
            // if larger or equal
            $('header .centerize').addClass('moveSocial');
        } else {
            // if smaller
            $('header .centerize').removeClass('moveSocial');
        }

        if($(window).width() <= 500) {
            // if smaller or equal
            $('.feature-product .nb-col-2').addClass('fullWidth');
            $('.bx, .X').addClass('inlineBlock');
            $('.title-1').addClass('centerRow4Title');
        } else {
            // if bigger
            $('.feature-product .nb-col-2').removeClass('fullWidth');
            $('.bx, .X').removeClass('inlineBlock');
            $('.title-1').removeClass('centerRow4Title');
        }
        if($(window).width() <= 666) {
            // if smaller or equal
            $('.f-col-3').addClass('fullWidth');
            $('.f-col-3').addClass('marginUp');
        } else {
            // if bigger
            $('.f-col-3').removeClass('fullWidth');
            $('.f-col-3').removeClass('marginUp');
        }
    }).resize(); // This will simulate a resize to trigger the initial run.
});
