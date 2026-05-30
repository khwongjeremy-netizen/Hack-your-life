document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Scroll Reveal Animation
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => observer.observe(el));

    // 2. CS50 JS Requirement: Interactive element
    const brand = document.querySelector('.navbar-brand');
    brand.addEventListener('click', function() {
        alert("Thank you for visiting my photography journey!");
    });
});