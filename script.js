/* =========================================
SREEJA NAGARAJAN — PORTFOLIO JAVASCRIPT
========================================= */

const birthDate = new Date(2009, 0, 18);

function calculateAge() {
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    const dayDifference = today.getDate() - birthDate.getDate();

    if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
        age--;
    }
    return age;
}

function showAge() {
    const ageElements = document.querySelectorAll("[data-age]");
    ageElements.forEach(element => element.textContent = calculateAge());
}

showAge();
setInterval(showAge, 60 * 60 * 1000);

const yearElements = document.querySelectorAll("[data-year]");
yearElements.forEach(element => element.textContent = new Date().getFullYear());

/* NAVIGATION ACTIVE HIGHLIGHT */
const sections = document.querySelectorAll("section[id]");
const navigationLinks = document.querySelectorAll(".nav-menu a");

window.addEventListener("scroll", () => {
    let currentSection = "";
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            currentSection = section.getAttribute("id");
        }
    });

    navigationLinks.forEach(link => {
        link.style.color = "";
        if (link.getAttribute("href") === "#" + currentSection) {
            link.style.color = "#55cfff";
        }
    });
});

/* SCROLL REVEAL ANIMATIONS */
const revealElements = document.querySelectorAll(
    ".skill-card, .project-card, .achievement, .quick-card, .language-card, .education-card"
);

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.12 });

revealElements.forEach(element => {
    element.classList.add("reveal");
    revealObserver.observe(element);
});

/* BUTTON FEEDBACK */
const buttons = document.querySelectorAll(".primary-button, .secondary-button");
buttons.forEach(button => {
    button.addEventListener("click", () => {
        button.style.transform = "scale(0.96)";
        setTimeout(() => button.style.transform = "", 120);
    });
});
