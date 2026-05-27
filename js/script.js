$('.main-slider').owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    navText: "",
    dots: true,
    autoplay: true,
    rtl: true,
    responsive: {
        // mobile
        0: {
            items: 1
        },
        // tablet
        600: {
            items: 1
        },
        // descktop
        1000: {
            items: 1
        }
    }
})
