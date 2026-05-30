

document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Active Navigation Link
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // 2. Scroll Reveal Animation
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

    // 3. CS50 JS Requirement: Interactive element
    const brand = document.querySelector('.navbar-brand');
    brand.addEventListener('click', function() {
        alert("Thank you for visiting my photography journey!");
    });
    const quizButton = document.getElementById('quiz-btn');
    quizButton.addEventListener('click', function() {
        alert("Starting the personal quiz!");

    });
});
