
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


$("img").mousedown(function(){
    return false;
});