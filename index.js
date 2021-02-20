$("#gridToggler").on("click", function () { if ($("#gridToggler").prop('checked') === true){ $(".gridView").css("height", "100%") } else { $(".gridView").css("height", "0") } })


var swiper = new Swiper('.swiper-container', {
    centeredSlides: false,
    autoplay: {
    delay: 6000,
    loop: true,
    },
    pagination: {
    el: '.swiper-pagination',
    clickable: true,
    },
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    },
    breakpoints:{
        320: {
            spaceBetween: 0,
            slidesPerView: 1,
        },
        991: {
            spaceBetween: 30,
            slidesPerView: 2,
        },
        1199: {
            spaceBetween: 30,
            slidesPerView: 3,
        }
    }
});