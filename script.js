// Reveal animation on scroll
const animatedElements = document.querySelectorAll(".slide-up");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("animate");
        }
    });
});

animatedElements.forEach(el => observer.observe(el));
