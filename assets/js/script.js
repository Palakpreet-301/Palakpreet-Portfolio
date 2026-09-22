/* =========================================================
   NAVBAR SCROLL EFFECT
========================================================= */

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", function () {

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});


/* =========================================================
   ACTIVE NAVIGATION
========================================================= */

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");

function updateActiveLink() {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            currentSection = section.getAttribute("id");
        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + currentSection) {
            link.classList.add("active");
        }

    });

}


window.addEventListener("scroll", updateActiveLink);


/* =========================================================
   CLOSE MOBILE NAVBAR AFTER CLICK
========================================================= */

const navItems = document.querySelectorAll(".nav-link");

navItems.forEach(link => {

    link.addEventListener("click", function () {

        const menu = document.getElementById("menu");

        if (menu.classList.contains("show")) {

            const bootstrapCollapse =
                bootstrap.Collapse.getInstance(menu);

            if (bootstrapCollapse) {
                bootstrapCollapse.hide();
            }

        }

    });

});


/* =========================================================
   SCROLL REVEAL
========================================================= */

const revealElements = document.querySelectorAll(
    ".section-heading, .about-wrapper, .timeline-item, " +
    ".featured-project, .project-card, .skill-box, " +
    ".certificate-card, .contact-wrapper"
);


revealElements.forEach(element => {
    element.classList.add("reveal");
});


const observer = new IntersectionObserver(
    function (entries, observer) {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);


revealElements.forEach(element => {
    observer.observe(element);
});


/* =========================================================
   CONTACT FORM
========================================================= */

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();


        const name =
            document.getElementById("name").value.trim();

        const email =
            document.getElementById("email").value.trim();

        const message =
            document.getElementById("message").value.trim();


        const subject =
            encodeURIComponent(
                "Portfolio Contact - " + name
            );


        const body =
            encodeURIComponent(
                "Name: " + name +
                "\nEmail: " + email +
                "\n\nMessage:\n" + message
            );


        window.location.href =
            "mailto:kaurpalakpreet61@gmail.com" +
            "?subject=" + subject +
            "&body=" + body;

    });

}