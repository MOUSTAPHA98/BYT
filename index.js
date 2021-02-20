$("#gridToggler").on("click", function () { if ($("#gridToggler").prop('checked') === true){ $(".gridView").css("height", "100%") } else { $(".gridView").css("height", "0") } })


var swiper = new Swiper('.top-destinations-swiper', {
    centeredSlides: false,
    autoplay: {
    delay: 6000,
    },
    pagination: {
    el: '.swiper-pagination',
    clickable: true,
    },
    navigation: {
    nextEl: '.top-dest-swiper-button-next',
    prevEl: '.top-dest-swiper-button-prev',
    },
    breakpoints:{
        320: {
            spaceBetween: 20,
            slidesPerView: 1,
        },
        991: {
            spaceBetween: 20,
            slidesPerView: 2,
        },
        1199: {
            spaceBetween: 30,
            slidesPerView: 3,
        }
    },
    loop: true,
});

// 1. Simple mode, it styles document scrollbar:
window.onscroll = function () {
    console.log(window.innerWidth);
    if (window.innerWidth >= 1024){
        $(function() {  
            $("body").niceScroll();
        });
        
        $("body").niceScroll({
            cursorcolor: "#e04622", // change cursor color in hex
            scrollspeed: 500, // scrolling speed
            mousescrollstep: 30, // scrolling speed with 
            cursorwidth: "10px", // cursor width in pixel (you can also write "5px")
            cursorborder: "0", // css definition for cursor border
            smoothscroll: true, // scroll with ease movement
        });
    }
}
