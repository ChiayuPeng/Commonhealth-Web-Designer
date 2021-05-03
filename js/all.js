//change navbar color on scroll
// window.onscroll = () => {
//     const nav = document.querySelector('nav');
//     if (this.scrollY <= 500) nav.className = '';
//     else nav.className = 'scroll';
// };

//navbar展開
$('.button-toggle').click(function (e) {
    e.preventDefault();
    $(this).toggleClass("active");
    $('.dropdown').toggleClass('opening');
})
$(".nav-wrap").click(function () {
    $(this).toggleClass("opening");
    $('.button-toggle').toggleClass('active');
});


//a scroll
$('a[href^="#"]').on('click', function (event) {

    var target = $(this.getAttribute('href'));

    if (target.length) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1000);
    }

});
