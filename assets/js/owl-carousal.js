$(function() {
    // Owl Carousel
    var owl = $(".owl-carousel");
    owl.owlCarousel({
      items: 3,
      margin: 10,
      loop: true,
      nav: true,
      smartSpeed: 900,
      responsiveClass:true,
        // breakpoint from 0 up
        responsive: {
            0: {
                items: 1,
                loop: true,
                nav: true,
                dots: false,
            },
            650: {
                items: 2,
                loop: true,
                dots: false,
                nav: true,
            },
            1080: {
                items: 3,
                dots: false,
                nav: true,
            }
        }
    });
});


  