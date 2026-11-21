/* =========================================
   SUNURJA TECHNOLOGY
   PRODUCT DETAILS DYNAMIC SCRIPT
   ========================================= */

document.addEventListener("DOMContentLoaded", () => {
    initSubNavScrollSpy();
    initRevealAnimations();
});

function initSubNavScrollSpy() {
    const navLinks = document.querySelectorAll(".product-nav-link");
    const sections = document.querySelectorAll(".product-detail-section");

    if (!navLinks.length || !sections.length) return;

    window.addEventListener("scroll", () => {
        let currentSectionId = "";
        const scrollPosition = window.pageYOffset + 180;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                currentSectionId = section.getAttribute("id");
            }
        });

        if (currentSectionId) {
            navLinks.forEach(link => {
                link.classList.remove("active");
                if (link.getAttribute("href") === "#" + currentSectionId) {
                    link.classList.add("active");
                }
            });
        }
    }, { passive: true });
}

function initRevealAnimations() {
    const elements = document.querySelectorAll(
        ".product-detail-header, .product-overview, .types-heading, .type-card, .detail-footer-grid, .accessory-grid"
    );

    if (!elements.length) return;

    elements.forEach((element) => element.classList.add("reveal"));

    if (!("IntersectionObserver" in window)) {
        elements.forEach((element) => element.classList.add("is-visible"));
        return;
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.12,
        rootMargin: "0px 0px -40px"
    });

    elements.forEach((element) => observer.observe(element));
}
