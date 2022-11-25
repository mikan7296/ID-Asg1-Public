// window.addEventListener('scroll', (event) => {
//     const scroll = window.scrollY;
//     const header = document.getElementsByClassName("canScroll");

//     if (scroll > 100) {
//         header.classList.add("active-header");
//     }
//     else {
//         header.classList.remove("active-header");
//     }
// })

$(window).scroll(function() {
    console.log($(window).scrollTop());
    if ($(window).scrollTop() > 200) {
        $('.canScroll').addClass('active-header');
    }
    else {
        $('.canScroll').removeClass('active-header');
    }
});