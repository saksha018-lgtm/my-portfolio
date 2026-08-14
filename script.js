// ================================
// MODULE 3 - JAVASCRIPT FEATURES
// ================================


// 1. MOBILE NAVIGATION MENU
const menuButton = document.getElementById("menu-button");
const navLinks = document.getElementById("nav-links");

if (menuButton && navLinks) {
    menuButton.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });
}


// Close mobile menu when a navigation link is clicked
const navigationLinks = document.querySelectorAll("#nav-links a");

navigationLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("active");
    });
});


// 2. DARK / LIGHT MODE TOGGLE
const themeButton = document.getElementById("theme-button");

if (themeButton) {
    themeButton.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            themeButton.textContent = "☀️ Light Mode";
        } else {
            themeButton.textContent = "🌙 Dark Mode";
        }
    });
}


// 3. SCROLL ANIMATION
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(
    function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    },
    {
        threshold: 0.15
    }
);

sections.forEach(function (section) {
    section.classList.add("hidden");
    observer.observe(section);
});


// 4. CONTACT FORM VALIDATION
const contactForm = document.getElementById("contact-form");

if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();
        const formMessage = document.getElementById("form-message");

        if (name === "" || email === "" || message === "") {
            formMessage.textContent = "Please fill in all fields.";
            formMessage.className = "error-message";
            return;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {
            formMessage.textContent = "Please enter a valid email address.";
            formMessage.className = "error-message";
            return;
        }

        formMessage.textContent = "Message submitted successfully!";
        formMessage.className = "success-message";

        contactForm.reset();
    });
}