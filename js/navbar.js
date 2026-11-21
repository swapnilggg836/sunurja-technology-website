
/* =========================================
   SUNURJA TECHNOLOGY
   NAVBAR JAVASCRIPT
   Author: Swapnil
   ========================================= */

document.addEventListener("DOMContentLoaded", async function () {

    const navbarContainer = document.getElementById("navbar");

    if (!navbarContainer) return;

    // Detect whether current page is inside pages/
    const isInsidePages = window.location.pathname
        .split("/")
        .includes("pages");

    const rootPath = isInsidePages ? "../" : "";

    // Load navbar component
    try {

        const response = await fetch(
            rootPath + "components/navbar.html"
        );

        if (!response.ok) {
            throw new Error("Navbar component could not be loaded.");
        }

        const navbarHTML = await response.text();

        navbarContainer.innerHTML = navbarHTML;

        initializeNavbar(rootPath);

    } catch (error) {

        console.error("Navbar Error:", error);

    }

});


function initializeNavbar(rootPath) {

    const header = document.getElementById("siteHeader");
    const menuToggle = document.getElementById("menuToggle");
    const navbarMenu = document.getElementById("navbarMenu");

    const navLinks = document.querySelectorAll("[data-nav]");

    if (!header || !menuToggle || !navbarMenu) return;


    // ---------- NAVIGATION PATHS ----------

    const routes = {
        home: "index.html",
        about: "pages/about.html",
        products: "pages/products.html",
        blog: "pages/blog.html",
        contact: "pages/contact.html"
    };

    navLinks.forEach(function (link) {

        const page = link.dataset.nav;

        if (routes[page]) {
            link.href = rootPath + routes[page];
        }

    });


    // ---------- ACTIVE PAGE ----------

    const currentPath = window.location.pathname;

    let currentPage = "home";

    if (currentPath.includes("about")) {
        currentPage = "about";
    } else if (currentPath.includes("products") ||
        currentPath.includes("product-details")) {
        currentPage = "products";
    } else if (currentPath.includes("blog")) {
        currentPage = "blog";
    } else if (currentPath.includes("contact")) {
        currentPage = "contact";
    }

    navLinks.forEach(function (link) {

        if (link.dataset.nav === currentPage) {

            link.classList.add("active");

            if (link.classList.contains("nav-link")) {
                link.setAttribute("aria-current", "page");
            }

        }

    });


    // ---------- MOBILE MENU ----------

    function closeMenu() {

        menuToggle.classList.remove("active");
        navbarMenu.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open navigation menu");

        document.body.classList.remove("menu-open");

    }


    function openMenu() {

        menuToggle.classList.add("active");
        navbarMenu.classList.add("active");

        menuToggle.setAttribute("aria-expanded", "true");
        menuToggle.setAttribute("aria-label", "Close navigation menu");

        document.body.classList.add("menu-open");

    }


    menuToggle.addEventListener("click", function () {

        const isOpen = menuToggle.getAttribute("aria-expanded") === "true";

        if (isOpen) {
            closeMenu();
        } else {
            openMenu();
        }

    });


    // Close menu after clicking a navigation link
    navLinks.forEach(function (link) {

        link.addEventListener("click", closeMenu);

    });


    // Close menu when clicking outside
    document.addEventListener("click", function (event) {

        if (
            !header.contains(event.target) &&
            navbarMenu.classList.contains("active")
        ) {
            closeMenu();
        }

    });


    // Close menu using Escape key
    document.addEventListener("keydown", function (event) {

        if (event.key === "Escape") {
            closeMenu();
        }

    });


    // Close menu when resizing to desktop
    window.addEventListener("resize", function () {

        if (window.innerWidth > 850) {
            closeMenu();
        }

    });


    // ---------- STICKY HEADER EFFECT ----------

    function handleScroll() {

        if (window.scrollY > 30) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }

    }

    window.addEventListener("scroll", handleScroll, {
        passive: true
    });

    handleScroll();

}
