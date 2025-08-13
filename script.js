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

    const backToTop = document.querySelector(".back-to-top");

    backToTop.style.display = "none";

    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            backToTop.style.display = "block";
        } else {
            backToTop.style.display = "none";
        }
    });

    backToTop.addEventListener("click", (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});
