
/* =========================================
   SUNURJA TECHNOLOGY
   FOOTER JAVASCRIPT
   Author: Swapnil
   ========================================= */

document.addEventListener("DOMContentLoaded", async function () {

    const footerContainer = document.getElementById("footer");

    if (!footerContainer) return;

    // Detect whether current page is inside pages/
    const isInsidePages = window.location.pathname
        .split("/")
        .includes("pages");

    const rootPath = isInsidePages ? "../" : "";

    // Load footer component
    try {

        const response = await fetch(
            rootPath + "components/footer.html"
        );

        if (!response.ok) {
            throw new Error("Footer component could not be loaded.");
        }

        const footerHTML = await response.text();

        footerContainer.innerHTML = footerHTML;

        initializeFooter(rootPath);

    } catch (error) {

        console.error("Footer Error:", error);

    }

});


function initializeFooter(rootPath) {

    // ---------- UPDATE FOOTER LINKS ----------

    const footerLinks = document.querySelectorAll("[data-footer-link]");

    const routes = {
        home: "index.html",
        about: "pages/about.html",
        products: "pages/products.html",
        blog: "pages/blog.html",
        contact: "pages/contact.html"
    };

    footerLinks.forEach(function (link) {

        const page = link.dataset.footerLink;

        if (routes[page]) {
            link.href = rootPath + routes[page];
        }

    });


    // ---------- UPDATE FOOTER LOGO LINK ----------

    const footerLogo = document.querySelector(".footer-logo");

    if (footerLogo) {
        footerLogo.href = rootPath + "index.html";
    }


    // ---------- UPDATE SOLUTIONS LINKS ----------

    const solutionLinks = document.querySelectorAll(
        ".site-footer .footer-column ul li a:not([data-footer-link])"
    );

    solutionLinks.forEach(function (link) {

        const href = link.getAttribute("href");

        if (href && href.startsWith("pages/")) {
            link.href = rootPath + href;
        }

    });


    // ---------- UPDATE LEGAL LINKS ----------

    const legalLinks = document.querySelectorAll(".footer-legal-links a");

    legalLinks.forEach(function (link) {

        const href = link.getAttribute("href");

        if (href && href.startsWith("pages/")) {
            link.href = rootPath + href;
        }

    });


    // ---------- DYNAMIC YEAR ----------

    const yearSpan = document.getElementById("footerYear");

    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

}
