/* =========================================
   SUNURJA TECHNOLOGIES
   BLOG ANIMATIONS + VIDEO
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* ---------- VIDEO PLAY BUTTON ---------- */

    const wrapper = document.getElementById("videoWrapper");
    const video = document.getElementById("solarVideo");
    const playBtn = document.getElementById("videoPlay");

    if (wrapper && video && playBtn) {

        playBtn.addEventListener("click", function () {
            video.setAttribute("controls", "");
            wrapper.classList.add("playing");
            video.play();
        });

        video.addEventListener("ended", function () {
            video.removeAttribute("controls");
            wrapper.classList.remove("playing");
            video.currentTime = 0;
            video.load();
        });
    }


    /* ---------- STOP HERE IF USER PREFERS NO MOTION ---------- */

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion || !("IntersectionObserver" in window)) return;


    /* ---------- SCROLL REVEAL ---------- */

    const selectors = [
        ".blog-heading", ".blog-search", ".blog-filters", ".blog-results",
        ".video-section", ".related-heading", ".related-card",
        ".article-header", ".article-featured-image", ".article-section",
        ".article-bottom-cta", ".sidebar-card",
        ".details-related-heading", ".details-related-card"
    ];

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (!entry.isIntersecting) return;

            const el = entry.target;
            el.classList.add("visible");
            observer.unobserve(el);

            // Hand the element back to its normal hover styles
            setTimeout(function () {
                el.classList.remove("reveal", "visible");
                el.style.transitionDelay = "";
            }, 1200);
        });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });

    selectors.forEach(function (selector) {
        document.querySelectorAll(selector).forEach(function (el, index) {
            el.classList.add("reveal");
            el.style.transitionDelay = (index % 3) * 0.12 + "s"; // stagger
            observer.observe(el);
        });
    });


    /* ---------- READING PROGRESS BAR (article page only) ---------- */

    if (document.querySelector(".blog-details-main")) {

        const bar = document.createElement("div");
        bar.className = "reading-progress";
        document.body.appendChild(bar);

        window.addEventListener("scroll", function () {
            const scrollable = document.documentElement.scrollHeight - window.innerHeight;
            const progress = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
            bar.style.width = progress + "%";
        }, { passive: true });
    }

});