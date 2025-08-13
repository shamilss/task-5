document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section, .service-item, .package-item, .destination, .booking, .testimonial, footer");

    sections.forEach(section => {
        section.classList.add("animate");
    });


    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    sections.forEach(section => observer.observe(section));
}); 