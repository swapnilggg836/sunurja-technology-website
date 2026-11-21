/* =========================================
   SUNURJA TECHNOLOGY
   ANIMATIONS & DYNAMIC EFFECTS ENGINE
   ========================================= */

document.addEventListener("DOMContentLoaded", function () {
    initScrollAnimations();
    initCounterAnimations();
    initProcessTimeline();
    initNavbarScrollEffects();
});

/* -----------------------------------------
   1. SCROLL REVEAL (IntersectionObserver)
   ----------------------------------------- */
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll(".animate-on-scroll");

    if (!animatedElements.length) return;

    const observerOptions = {
        root: null,
        rootMargin: "0px 0px -60px 0px",
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                const delay = element.getAttribute("data-delay") || 0;

                setTimeout(() => {
                    element.classList.add("is-visible");
                }, delay);

                obs.unobserve(element); // animate once
            }
        });
    }, observerOptions);

    animatedElements.forEach(el => observer.observe(el));
}

/* -----------------------------------------
   2. STATS / NUMBER COUNTERS
   ----------------------------------------- */
function initCounterAnimations() {
    const statNumbers = document.querySelectorAll(".stat-number");
    if (!statNumbers.length) return;

    const counterObserver = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.getAttribute("data-target"), 10) || 0;
                const suffix = counter.getAttribute("data-suffix") || "";
                const duration = 2000; // ms
                const startTime = performance.now();

                function updateCount(currentTime) {
                    const elapsed = currentTime - startTime;
                    const progress = Math.min(elapsed / duration, 1);
                    // easeOutQuart easing
                    const easeProgress = 1 - Math.pow(1 - progress, 4);
                    const currentCount = Math.floor(easeProgress * target);

                    counter.textContent = currentCount + suffix;

                    if (progress < 1) {
                        requestAnimationFrame(updateCount);
                    } else {
                        counter.textContent = target + suffix;
                    }
                }

                requestAnimationFrame(updateCount);
                obs.unobserve(counter);
            }
        });
    }, { threshold: 0.5 });

    statNumbers.forEach(stat => counterObserver.observe(stat));
}

/* -----------------------------------------
   3. PROCESS CONNECTING TIMELINE
   ----------------------------------------- */
function initProcessTimeline() {
    const progressBar = document.getElementById("processProgress");
    const container = document.querySelector(".process-timeline-container");
    if (!progressBar || !container) return;

    window.addEventListener("scroll", () => {
        const rect = container.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (rect.top <= windowHeight && rect.bottom >= 0) {
            const visiblePercentage = Math.min(
                100,
                Math.max(0, ((windowHeight - rect.top) / (rect.height + windowHeight * 0.4)) * 100)
            );
            progressBar.style.width = visiblePercentage + "%";
        }
    }, { passive: true });
}

/* -----------------------------------------
   4. EXTRA SMOOTH NAVBAR SCROLL EFFECT
   ----------------------------------------- */
function initNavbarScrollEffects() {
    const header = document.getElementById("siteHeader");
    if (!header) return;

    let lastScroll = 0;
    window.addEventListener("scroll", () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 50) {
            header.classList.add("header-scrolled");
        } else {
            header.classList.remove("header-scrolled");
        }

        lastScroll = currentScroll;
    }, { passive: true });
}
