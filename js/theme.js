///////////////////////////////////////////
// Display loading image while page loads
///////////////////////////////////////////

// Wait for window load
$(window).load(function() {
    // Animate loader off screen
    $(".page-loader").fadeOut("slow");
});


(function ($) {

    $(".Modern-Slider").slick({
	    autoplay:true,
	    autoplaySpeed:10000,
	    speed:600,
	    slidesToShow:1,
	    slidesToScroll:1,
	    pauseOnHover:false,
	    dots:true,
	    pauseOnDotsHover:true,
	    cssEase:'linear',
	   // fade:true,
	    draggable:false,
	    prevArrow:'<button class="PrevArrow"></button>',
	    nextArrow:'<button class="NextArrow"></button>', 
	});

    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        var box = $('.header-text').height();
        var header = $('header').height();
        
        if (scroll >= box - header) {
            $("header").addClass("background-header");
        } else {
            $("header").removeClass("background-header");
        }
    });

    $('.search-icon a').on("click", function(event) {
        event.preventDefault();
        $("#search").addClass("open");
        $('#search > form > input[type="search"]').focus();
	});

    $("#search, #search button.close").on("click keyup", function(event) {
        if (
            event.target == this ||
            event.target.className == "close" ||
            event.keyCode == 27
        ) {
            $(this).removeClass("open");
        }
    });

    $("#search-box").submit(function(event) {
        event.preventDefault();
        return false;
    });

})(window.jQuery);