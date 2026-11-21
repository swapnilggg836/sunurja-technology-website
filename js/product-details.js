/* =========================================
   SUNURJA TECHNOLOGY
   PRODUCT DETAILS DYNAMIC SCRIPT
   ========================================= */

document.addEventListener("DOMContentLoaded", () => {
    initSubNavScrollSpy();
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
