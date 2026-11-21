
/* =========================================
   SUNURJA TECHNOLOGIES - BLOG JAVASCRIPT
========================================= */


/* =========================================
   BLOG ARTICLES DATA
========================================= */

const blogs = [

    {
        id: 1,

        category: "Installation Guides",

        title: "How Do Solar Panels Generate Electricity?",

        image: "../assets/images/blog/solar-electricity.jpg",

        author: "SunUrja Team",

        date: "21 Nov 2026",

        readingTime: "5 min read",

        description:
            "Discover how solar panels convert sunlight into electricity through photovoltaic technology and help generate clean, renewable energy.",

        content: "Full article content will be displayed on the blog details page.",

        relatedArticles: [2, 3, 4]
    },

    {
        id: 2,

        category: "Installation Guides",

        title: "7 Things to Know Before Installing Rooftop Solar",

        image: "../assets/images/blog/rooftop-solar.jpg",

        author: "SunUrja Team",

        date: "21 Nov 2026",

        readingTime: "6 min read",

        description:
            "Planning to install rooftop solar? Explore seven important factors including roof space, sunlight exposure, energy needs and installation planning.",

        content: "Full article content will be displayed on the blog details page.",

        relatedArticles: [1, 3, 5]
    },

    {
        id: 3,

        category: "Installation Guides",

        title: "Understanding On-Grid, Off-Grid and Hybrid Systems",

        image: "../assets/images/blog/solar-systems.jpg",

        author: "SunUrja Team",

        date: "21 Nov 2026",

        readingTime: "7 min read",

        description:
            "Understand the differences between on-grid, off-grid and hybrid solar systems and explore which configuration suits different energy requirements.",

        content: "Full article content will be displayed on the blog details page.",

        relatedArticles: [1, 2, 4]
    },

    {
        id: 4,

        category: "Energy Saving Tips",

        title: "How Solar Energy Can Help Reduce Electricity Bills",

        image: "../assets/images/blog/electricity-bills.jpg",

        author: "SunUrja Team",

        date: "21 Nov 2026",

        readingTime: "5 min read",

        description:
            "Discover how generating your own solar electricity can reduce dependence on conventional power and help manage electricity expenses.",

        content: "Full article content will be displayed on the blog details page.",

        relatedArticles: [2, 5, 6]
    },

    {
        id: 5,

        category: "Energy Saving Tips",

        title: "How to Maintain Your Solar Panels",

        image: "../assets/images/blog/solar-maintenance.jpg",

        author: "SunUrja Team",

        date: "21 Nov 2026",

        readingTime: "4 min read",

        description:
            "Learn simple solar panel maintenance practices, including regular cleaning, visual inspections and performance monitoring.",

        content: "Full article content will be displayed on the blog details page.",

        relatedArticles: [1, 2, 4]
    },

    {
        id: 6,

        category: "Solar News",

        title: "The Future of Renewable Energy in India",

        image: "../assets/images/blog/renewable-india.jpg",

        author: "SunUrja Team",

        date: "21 Nov 2026",

        readingTime: "6 min read",

        description:
            "Explore India's renewable energy journey and understand the growing importance of solar power in building a sustainable future.",

        content: "Full article content will be displayed on the blog details page.",

        relatedArticles: [1, 3, 4]
    }

];


/* =========================================
   DOM ELEMENTS
========================================= */

const blogGrid = document.getElementById("blogGrid");

const blogSearch = document.getElementById("blogSearch");

const filterButtons = document.querySelectorAll(".filter-btn");

const blogCount = document.getElementById("blogCount");

const noResults = document.getElementById("noResults");

const clearSearch = document.getElementById("clearSearch");

const resetFilters = document.getElementById("resetFilters");


/* =========================================
   CURRENT FILTER
========================================= */

let currentCategory = "All";


/* =========================================
   DISPLAY BLOG CARDS
========================================= */

function displayBlogs(blogList) {

    blogGrid.innerHTML = "";

    blogCount.textContent =
        `Showing ${blogList.length} ${blogList.length === 1 ? "article" : "articles"}`;


    if (blogList.length === 0) {

        noResults.hidden = false;

        return;

    }

    noResults.hidden = true;


    blogList.forEach(blog => {

        const blogCard = document.createElement("article");

        blogCard.className = "blog-card";


        blogCard.innerHTML = `

            <div class="blog-image">

                <img
                    src="${blog.image}"
                    alt="${blog.title}"
                    loading="lazy"
                >

            </div>


            <div class="blog-content">

                <span class="blog-category">

                    ${blog.category}

                </span>


                <div class="blog-meta">

                    <span>✍ ${blog.author}</span>

                    <span>📅 ${blog.date}</span>

                    <span>◷ ${blog.readingTime}</span>

                </div>


                <h3>${blog.title}</h3>


                <p>${blog.description}</p>


                <a
                    href="blog-details.html?id=${blog.id}"
                    class="read-more"
                >

                    Read More <span>→</span>

                </a>

            </div>

        `;


        blogGrid.appendChild(blogCard);

    });

}


/* =========================================
   FILTER BLOGS BY CATEGORY
========================================= */

function filterBlogs() {

    const searchText = blogSearch.value
        .toLowerCase()
        .trim();


    const filteredBlogs = blogs.filter(blog => {

        const matchesCategory =
            currentCategory === "All" ||
            blog.category === currentCategory;


        const matchesSearch =

            blog.title.toLowerCase().includes(searchText) ||

            blog.description.toLowerCase().includes(searchText) ||

            blog.category.toLowerCase().includes(searchText);


        return matchesCategory && matchesSearch;

    });


    displayBlogs(filteredBlogs);

}


/* =========================================
   CATEGORY BUTTON EVENTS
========================================= */

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn => {

            btn.classList.remove("active");

        });


        button.classList.add("active");


        currentCategory = button.dataset.category;


        filterBlogs();

    });

});


/* =========================================
   SEARCH EVENT
========================================= */

blogSearch.addEventListener("input", () => {

    filterBlogs();

});


/* =========================================
   CLEAR SEARCH
========================================= */

clearSearch.addEventListener("click", () => {

    blogSearch.value = "";

    filterBlogs();

    blogSearch.focus();

});


/* =========================================
   RESET FILTERS
========================================= */

resetFilters.addEventListener("click", () => {

    currentCategory = "All";

    blogSearch.value = "";


    filterButtons.forEach(button => {

        button.classList.remove("active");

        if (button.dataset.category === "All") {

            button.classList.add("active");

        }

    });


    filterBlogs();

});


/* =========================================
   INITIALIZE BLOG PAGE
========================================= */

displayBlogs(blogs);
