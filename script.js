/* =========================================
SREEJA NAGARAJAN — PORTFOLIO JAVASCRIPT
========================================= */

/* ---------- DYNAMIC AGE ---------- */

/*
Birth year: 2009

The age is calculated automatically,
so it won't stay permanently at 17.
*/

const birthDate = new Date(2009, 0, 18);

function calculateAge() {

const today = new Date();

let age = today.getFullYear() - birthDate.getFullYear();

const monthDifference =
    today.getMonth() - birthDate.getMonth();

const dayDifference =
    today.getDate() - birthDate.getDate();


if (
    monthDifference < 0 ||
    (monthDifference === 0 && dayDifference < 0)
) {
    age--;
}

return age;

}

/* ---------- ADD AGE TO PAGE ---------- */

function showAge() {

const ageElements =
    document.querySelectorAll("[data-age]");

ageElements.forEach(function(element) {

    element.textContent = calculateAge();

});

}

/* ---------- RUN AGE FUNCTION ---------- */

showAge();

/* ---------- UPDATE AGE AT MIDNIGHT ---------- */

setInterval(function() {

showAge();

}, 60 * 60 * 1000);

/* ---------- CURRENT YEAR IN FOOTER ---------- */

const yearElements =
document.querySelectorAll("[data-year]");

yearElements.forEach(function(element) {

element.textContent =
    new Date().getFullYear();

});

/* ---------- NAVIGATION ACTIVE EFFECT ---------- */

const sections =
document.querySelectorAll("section[id]");

const navigationLinks =
document.querySelectorAll(".nav-menu a");

window.addEventListener("scroll", function() {

let currentSection = "";

sections.forEach(function(section) {

    const sectionTop =
        section.offsetTop - 150;

    const sectionHeight =
        section.offsetHeight;

    if (
        window.scrollY >= sectionTop &&
        window.scrollY < sectionTop + sectionHeight
    ) {

        currentSection =
            section.getAttribute("id");

    }

});


navigationLinks.forEach(function(link) {

    link.style.color = "";

    const target =
        link.getAttribute("href");

    if (target === "#" + currentSection) {

        link.style.color = "#55cfff";

    }

});

});

/* ---------- SCROLL REVEAL ---------- */

const revealElements =
document.querySelectorAll(
".skill-card, .project-card, .achievement, .quick-card, .language-card"
);

const revealObserver =
new IntersectionObserver(

    function(entries) {

        entries.forEach(function(entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                revealObserver.unobserve(
                    entry.target
                );

            }

        });

    },

    {
        threshold: 0.12
    }

);

revealElements.forEach(function(element) {

element.classList.add("reveal");

revealObserver.observe(element);

});

/* ---------- BUTTON RIPPLE EFFECT ---------- */

const buttons =
document.querySelectorAll(
".primary-button, .secondary-button"
);

buttons.forEach(function(button) {

button.addEventListener("click", function() {

    button.style.transform =
        "scale(0.96)";

    setTimeout(function() {

        button.style.transform = "";

    }, 120);

});
});

/* ---------- CONSOLE MESSAGE ---------- */

console.log(
"Welcome to Sreeja Nagarajan's Portfolio 🚀"
);
