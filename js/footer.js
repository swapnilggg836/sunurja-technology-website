
/* =========================================
   SUNURJA TECHNOLOGY
   FOOTER JAVASCRIPT
   Author: Swapnil
   ========================================= */

document.addEventListener("DOMContentLoaded", async function () {

    const footerContainer = document.getElementById("footer");

    if (!footerContainer) {
        console.warn("Footer container #footer not found on this page.");
        return;
    }

    // Reliable rootPath detection:
    // If the path contains "/pages/" or ends in .html within the pages directory
    const pathname = window.location.pathname.replace(/\\/g, "/");
    const isInsidePages = pathname.includes("/pages/") || pathname.split("/").includes("pages");

    const rootPath = isInsidePages ? "../" : "";

    // Load footer component
    try {

        const response = await fetch(
            rootPath + "components/footer.html"
        );

        if (!response.ok) {
            throw new Error(`Footer component fetch failed: ${response.status} ${response.statusText}`);
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


    // ---------- UPDATE FOOTER LOGO ----------

    const footerLogo = document.querySelector(".footer-logo");

    if (footerLogo) {
        footerLogo.href = rootPath + "index.html";
    }

    const footerLogoImg = document.querySelector(".footer-logo-img");

    if (footerLogoImg) {
        footerLogoImg.src = rootPath + "assets/images/nav/logo.jpeg";
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
