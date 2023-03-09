(function($){
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
    
        if (scroll >= 100) {
            $(".site-header").addClass("sticky");
        } else {
            $(".site-header").removeClass("sticky");
        }
    });
    MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

var observer = new MutationObserver(function(mutations, observer) {
    // your owl caroussel script
    
   $('#product-slider').owlCarousel({
        loop: true,
        responsiveClass: true,
        items: 4,
        nav: true,
        autoplay:true,
        dots:false,
        responsive:{
            0:{
                items:1
            },
            400:{
                items:2
            },
            767:{
                items:3
            },
            1024:{
                items:4 
            }
        }
    })
});

observer.observe(document, {
    subtree: true,
    attributes: true
});
})(jQuery); 