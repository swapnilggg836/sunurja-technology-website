
/* =========================================
   SUNURJA TECHNOLOGIES
   BLOG DETAILS JAVASCRIPT
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* =========================================
       GET ARTICLE DATA
    ========================================= */

    const blogs = window.blogs || [];
    const params = new URLSearchParams(window.location.search);
    const articleId = Number(params.get("id"));

    const article = blogs.find(blog => blog.id === articleId);


    /* =========================================
       DOM ELEMENTS
    ========================================= */

    const breadcrumbTitle = document.getElementById("breadcrumbTitle");
    const articleCategory = document.getElementById("articleCategory");
    const articleTitle = document.getElementById("articleTitle");
    const articleSubtitle = document.getElementById("articleSubtitle");
    const articleAuthor = document.getElementById("articleAuthor");
    const articleDate = document.getElementById("articleDate");
    const articleReadingTime = document.getElementById("articleReadingTime");
    const articleImage = document.getElementById("articleImage");
    const articleContent = document.getElementById("articleContent");
    const articleContents = document.getElementById("articleContents");
    const keyTakeaways = document.getElementById("keyTakeaways");
    const relatedArticles = document.getElementById("relatedArticles");


    /* =========================================
       SAFE HTML OUTPUT
    ========================================= */

    function escapeHTML(value) {

        return String(value ?? "").replace(/[&<>"']/g, character => {

            const entities = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#039;"
            };

            return entities[character];

        });

    }


    /* =========================================
       INVALID ARTICLE HANDLING
    ========================================= */

    if (!article) {

        document.title = "Article Not Found | SunUrja Technologies";

        articleTitle.textContent = "Article Not Found";

        articleSubtitle.textContent =
            "The requested article is unavailable. Please explore our other articles.";

        articleCategory.textContent = "Not Found";

        articleContent.innerHTML = `
            <div class="article-error">
                <h2>Article Not Found</h2>
                <p>
                    We couldn't find the requested article.
                    Please return to our blog to explore other articles.
                </p>
                <a href="blog.html" class="read-more">
                    Back to Blog →
                </a>
            </div>
        `;

        articleImage.style.display = "none";

        articleContents.innerHTML = "";
        keyTakeaways.innerHTML = "";
        relatedArticles.innerHTML = "";

        return;

    }


    /* =========================================
       UPDATE PAGE INFORMATION
    ========================================= */

    document.title = `${article.title} | SunUrja Technologies`;

    const metaDescription = document.querySelector(
        'meta[name="description"]'
    );

    if (metaDescription) {
        metaDescription.content = article.description || article.title;
    }


    /* =========================================
       ARTICLE HEADER
    ========================================= */

    breadcrumbTitle.textContent = article.title;

    articleCategory.textContent = article.category;

    articleTitle.textContent = article.title;

    articleSubtitle.textContent =
        article.subtitle || article.description || "";

    articleAuthor.textContent = article.author || "SunUrja Team";

    articleDate.textContent = article.date || "";

    articleReadingTime.textContent = article.readingTime || "";


    /* =========================================
       FEATURED IMAGE
    ========================================= */

    articleImage.src = article.image;

    articleImage.alt = article.title;

    articleImage.onerror = function () {

        this.onerror = null;

        this.src = "../assets/images/blog/solar-electricity.jpg";

    };


    /* =========================================
       ARTICLE CONTENT
    ========================================= */

    function generateArticleContent() {

        articleContent.innerHTML = "";
        articleContents.innerHTML = "";

        // Support article content stored as an array
        if (Array.isArray(article.content)) {

            article.content.forEach((section, index) => {

                const sectionId = `article-section-${index + 1}`;

                const articleSection = document.createElement("section");

                articleSection.className = "article-section";
                articleSection.id = sectionId;

                const paragraphs = Array.isArray(section.paragraphs)
                    ? section.paragraphs
                    : [];

                articleSection.innerHTML = `
    <h2 class="content-heading">${escapeHTML(section.heading)}</h2>
    ${paragraphs.map(p => `<p class="content-paragraph">${escapeHTML(p)}</p>`).join("")}
`;

                articleContent.appendChild(articleSection);

                const listItem = document.createElement("li");

                const link = document.createElement("a");

                link.href = `#${sectionId}`;
                link.textContent = section.heading;

                listItem.appendChild(link);

                articleContents.appendChild(listItem);

            });

        } else {

            // Fallback for existing string-based article content

            const contentSection = document.createElement("section");

            contentSection.className = "article-section";
            contentSection.id = "article-section-1";

            const heading = document.createElement("h2");

            heading.textContent = "Introduction";

            const paragraph = document.createElement("p");

            paragraph.textContent =
                article.content || article.description || "";

            contentSection.append(heading, paragraph);

            articleContent.appendChild(contentSection);

            articleContents.innerHTML = `
                <li>
                    <a href="#article-section-1">Introduction</a>
                </li>
            `;

        }

    }


    /* =========================================
       KEY TAKEAWAYS
       SINGLE CHECKMARK STYLE
    ========================================= */

    function generateTakeaways() {

        keyTakeaways.innerHTML = "";

        const takeaways = article.takeaways || [];

        takeaways.forEach(takeaway => {
    const listItem = document.createElement("li");
    listItem.textContent = takeaway;
    keyTakeaways.appendChild(listItem);
});

    }


    /* =========================================
       RELATED ARTICLES
    ========================================= */

    function generateRelatedArticles() {

        relatedArticles.innerHTML = "";

        const relatedIds = article.relatedArticles || [];

        const related = blogs.filter(blog =>
            relatedIds.includes(blog.id) &&
            blog.id !== article.id
        );

        related.forEach(blog => {

            const relatedCard = document.createElement("article");

            relatedCard.className = "details-related-card";

            relatedCard.innerHTML = `

                <div class="details-related-image">

                    <img
                        src="${escapeHTML(blog.image)}"
                        alt="${escapeHTML(blog.title)}"
                        loading="lazy">

                </div>

                <div class="details-related-content">

                    <span class="blog-category">
                        ${escapeHTML(blog.category)}
                    </span>

                    <h3>
                        ${escapeHTML(blog.title)}
                    </h3>

                    <p>
                        ${escapeHTML(blog.description)}
                    </p>

                    <a
                        href="blog-details.html?id=${blog.id}"
                        class="read-more">

                        Read Article →

                    </a>

                </div>

            `;

            const image = relatedCard.querySelector("img");

            image.onerror = function () {
                this.onerror = null;
                this.src = "../assets/images/blog/solar-electricity.jpg";
            };

            relatedArticles.appendChild(relatedCard);

        });

    }


    /* =========================================
       TABLE OF CONTENTS NAVIGATION
    ========================================= */

    articleContents.addEventListener("click", function (event) {

        const link = event.target.closest("a");

        if (!link) return;

        const targetId = link.getAttribute("href");

        if (!targetId || !targetId.startsWith("#")) return;

        const targetSection = document.querySelector(targetId);

        if (targetSection) {

            event.preventDefault();

            targetSection.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });


    /* =========================================
       INITIALIZE ARTICLE PAGE
    ========================================= */

    generateArticleContent();

    generateTakeaways();

    generateRelatedArticles();

});
