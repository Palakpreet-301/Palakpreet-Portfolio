window.addEventListener("scroll", function () {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {

        navbar.style.background = "#020617";

    }

    else {

        navbar.style.background = "rgba(15,23,42,.95)";

    }

});