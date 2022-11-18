window.addEventListener('scroll', (event) => {
    const scroll = window.scrollY;
    const header = document.getElementById("header");

    if (scroll > 100) {
        header.classList.add("active-header");
    }
    else {
        header.classList.remove("active-header");
    }
})