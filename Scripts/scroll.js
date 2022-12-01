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
    if ($(window).scrollTop() > 150) {
        $('.canscroll').addClass('active-header');
    }
    else {
        $('.canscroll').removeClass('active-header');
    }
});

$("#team-logo").hover(function() {
    logo = document.getElementById("team-logo")
    logo.src = "Media/twerk.gif";
}, function () {
   logo.src = "Media/Amogus.jpg";
})
