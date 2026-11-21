
/* =========================================
   SUNURJA TECHNOLOGIES
   BLOG DETAILS JAVASCRIPT
========================================= */


/* =========================================
   BLOG ARTICLES DATABASE
========================================= */

const blogs = [

    {
        id: 1,
        category: "Installation Guides",
        title: "How Do Solar Panels Generate Electricity?",
        subtitle: "Discover how sunlight is transformed into usable electricity and how solar technology is powering a cleaner future.",
        image: "../assets/images/blog/solar-electricity.jpg",
        author: "SunUrja Team",
        date: "21 Nov 2026",
        readingTime: "5 min read",

        sections: [
            {
                id: "introduction",
                heading: "Introduction",
                content: `
                    <p>
                    Solar energy is becoming one of the most popular
                    renewable energy sources around the world.
                    With increasing awareness about sustainable living,
                    more homeowners and businesses are exploring
                    solar power as an alternative to conventional electricity.
                    </p>

                    <p>
                    But have you ever wondered how sunlight actually
                    becomes electricity? The answer lies in a technology
                    called the photovoltaic effect.
                    </p>
                `
            },

            {
                id: "solar-panels",
                heading: "What Are Solar Panels?",
                content: `
                    <p>
                    Solar panels are devices designed to capture
                    sunlight and convert it into electrical energy.
                    They consist of multiple photovoltaic cells,
                    commonly made using semiconductor materials
                    such as silicon.
                    </p>

                    <p>
                    When sunlight reaches these cells, it creates
                    an electrical response that can be collected
                    and used to power electrical appliances.
                    </p>
                `
            },

            {
                id: "working",
                heading: "How Do Solar Panels Work?",
                content: `
                    <h3>1. Sunlight Absorption</h3>
                    <p>
                    Solar cells absorb sunlight when photons
                    strike their surface.
                    </p>

                    <h3>2. Electricity Generation</h3>
                    <p>
                    The photovoltaic effect generates direct
                    current (DC) electricity through the movement
                    of electrical charges within the solar cells.
                    </p>

                    <h3>3. Power Conversion</h3>
                    <p>
                    A solar inverter converts DC electricity
                    into alternating current (AC), which is used
                    by most household and commercial appliances.
                    </p>

                    <h3>4. Electricity Usage</h3>
                    <p>
                    The generated electricity can be used to
                    operate lights, fans, computers and other
                    electrical equipment.
                    </p>

                    <h3>5. Energy Storage</h3>
                    <p>
                    When a compatible battery storage system
                    is installed, excess electricity can be
                    stored for later use.
                    </p>
                `
            },

            {
                id: "benefits",
                heading: "Benefits of Solar Energy",
                content: `
                    <ul>
                        <li>Uses sunlight, a renewable energy source.</li>
                        <li>Can help reduce conventional electricity consumption.</li>
                        <li>Supports environmentally responsible energy generation.</li>
                        <li>Suitable for residential and commercial applications.</li>
                        <li>Can work with battery storage systems.</li>
                    </ul>
                `
            },

            {
                id: "conclusion",
                heading: "Conclusion",
                content: `
                    <p>
                    Solar panels provide an effective way to
                    convert natural sunlight into useful electricity.
                    As solar technology continues to develop,
                    it offers more opportunities for homes and
                    businesses to adopt renewable energy.
                    </p>

                    <p>
                    Understanding how solar panels work is the
                    first step towards making informed energy decisions.
                    </p>
                `
            }
        ],

        takeaways: [
            "Solar panels convert sunlight into electricity.",
            "Photovoltaic cells are responsible for electricity generation.",
            "Solar inverters convert DC into AC electricity.",
            "Battery systems can store excess solar energy.",
            "Solar power supports cleaner energy generation."
        ],

        related: [2, 3, 4]
    },


    {
        id: 2,
        category: "Installation Guides",
        title: "7 Things to Know Before Installing Rooftop Solar",
        subtitle: "Planning to switch to solar energy? Understand the important factors to consider before installing a rooftop solar system.",
        image: "../assets/images/blog/rooftop-solar.jpg",
        author: "SunUrja Team",
        date: "21 Nov 2026",
        readingTime: "6 min read",

        sections: [
            {
                id: "introduction",
                heading: "Introduction",
                content: `
                    <p>
                    Installing rooftop solar is an important step
                    towards generating your own electricity and
                    adopting sustainable energy.
                    </p>

                    <p>
                    However, selecting the right solar system
                    requires proper planning. Before installation,
                    it is important to understand your energy needs,
                    roof condition and available solar technology.
                    </p>
                `
            },

            {
                id: "energy-needs",
                heading: "1. Understand Your Electricity Requirements",
                content: `
                    <p>
                    Begin by reviewing your monthly electricity bills.
                    Understanding your average energy consumption
                    helps determine the approximate solar system
                    capacity required for your property.
                    </p>
                `
            },

            {
                id: "roof-space",
                heading: "2. Check Available Roof Space",
                content: `
                    <p>
                    Solar panels require sufficient installation space.
                    The roof should have enough usable area without
                    major obstructions such as water tanks,
                    chimneys or other structures.
                    </p>
                `
            },

            {
                id: "sunlight",
                heading: "3. Evaluate Sunlight Exposure",
                content: `
                    <p>
                    Sunlight availability directly influences
                    solar electricity generation. Check whether
                    nearby buildings, trees or other objects
                    create shadows on the roof.
                    </p>
                `
            },

            {
                id: "roof-condition",
                heading: "4. Inspect Your Roof Condition",
                content: `
                    <p>
                    Before installation, assess the roof's
                    structural condition. It should safely
                    support the solar panels and mounting structure.
                    Necessary repairs should be considered beforehand.
                    </p>
                `
            },

            {
                id: "system-type",
                heading: "5. Choose the Right Solar System",
                content: `
                    <p>
                    Understand the differences between on-grid,
                    off-grid and hybrid systems. Your electricity
                    requirements, grid availability and backup
                    preferences will help determine the right option.
                    </p>
                `
            },

            {
                id: "equipment",
                heading: "6. Select Quality Equipment",
                content: `
                    <p>
                    Solar panels, inverters, mounting structures
                    and electrical protection equipment all
                    contribute to system performance.
                    Review product specifications and applicable
                    warranties before making a decision.
                    </p>
                `
            },

            {
                id: "professional",
                heading: "7. Work With Qualified Professionals",
                content: `
                    <p>
                    Professional installation helps ensure
                    appropriate system design, safe electrical
                    connections and proper commissioning.
                    Check the installer's qualifications and
                    experience before proceeding.
                    </p>
                `
            },

            {
                id: "conclusion",
                heading: "Conclusion",
                content: `
                    <p>
                    Rooftop solar installation becomes easier
                    when you understand your requirements and
                    plan every step carefully.
                    </p>

                    <p>
                    A well-planned solar system can help you
                    move towards a more sustainable energy future.
                    </p>
                `
            }
        ],

        takeaways: [
            "Review your monthly electricity consumption.",
            "Check roof space and structural condition.",
            "Evaluate sunlight and shading.",
            "Select an appropriate solar system.",
            "Choose quality equipment and qualified installers."
        ],

        related: [1, 3, 5]
    },


    {
        id: 3,
        category: "Installation Guides",
        title: "Understanding On-Grid, Off-Grid and Hybrid Systems",
        subtitle: "Explore the three major types of solar power systems and understand how each one meets different electricity requirements.",
        image: "../assets/images/blog/solar-systems.jpg",
        author: "SunUrja Team",
        date: "21 Nov 2026",
        readingTime: "7 min read",

        sections: [
            {
                id: "introduction",
                heading: "Introduction",
                content: `
                    <p>
                    Choosing the right solar power system is an
                    important decision when planning a solar installation.
                    Different systems are designed to meet different
                    electricity requirements.
                    </p>

                    <p>
                    The three common configurations are on-grid,
                    off-grid and hybrid solar systems.
                    </p>
                `
            },

            {
                id: "on-grid",
                heading: "1. On-Grid Solar System",
                content: `
                    <p>
                    An on-grid solar system is connected to the
                    conventional electricity grid. Solar panels
                    generate electricity, which can be used by
                    the property.
                    </p>

                    <p>
                    Depending on local regulations and the
                    installed net-metering arrangement, surplus
                    electricity may be exported to the grid.
                    </p>

                    <h3>Key Features</h3>

                    <ul>
                        <li>Connected to the electricity grid.</li>
                        <li>Can support grid export where permitted.</li>
                        <li>Generally does not provide backup during grid outages.</li>
                        <li>Typically does not require batteries.</li>
                    </ul>
                `
            },

            {
                id: "off-grid",
                heading: "2. Off-Grid Solar System",
                content: `
                    <p>
                    An off-grid solar system operates independently
                    of the conventional electricity grid.
                    It commonly uses battery storage to supply
                    electricity when solar generation is unavailable.
                    </p>

                    <h3>Key Features</h3>

                    <ul>
                        <li>Operates independently of the utility grid.</li>
                        <li>Uses batteries for energy storage.</li>
                        <li>Suitable for locations without reliable grid access.</li>
                        <li>Requires proper battery and system sizing.</li>
                    </ul>
                `
            },

            {
                id: "hybrid",
                heading: "3. Hybrid Solar System",
                content: `
                    <p>
                    A hybrid solar system combines grid-connected
                    solar generation with battery storage.
                    It can use solar power, store excess energy
                    and draw electricity from the grid when required.
                    </p>

                    <h3>Key Features</h3>

                    <ul>
                        <li>Combines solar generation and grid connectivity.</li>
                        <li>Can include battery backup.</li>
                        <li>Offers greater energy management flexibility.</li>
                        <li>Requires a compatible hybrid inverter.</li>
                    </ul>
                `
            },

            {
                id: "comparison",
                heading: "Which Solar System Should You Choose?",
                content: `
                    <p>
                    The best system depends on your electricity
                    requirements, grid reliability, backup needs,
                    available budget and local regulations.
                    </p>

                    <p>
                    An on-grid system may suit properties with
                    reliable grid access. Off-grid systems can
                    support locations without grid access, while
                    hybrid systems offer a combination of grid
                    connectivity and battery storage.
                    </p>
                `
            },

            {
                id: "conclusion",
                heading: "Conclusion",
                content: `
                    <p>
                    Understanding these three configurations
                    helps you make a more informed decision
                    when investing in solar energy.
                    </p>
                `
            }
        ],

        takeaways: [
            "On-grid systems connect to the utility grid.",
            "Off-grid systems operate independently using storage.",
            "Hybrid systems combine grid connectivity and batteries.",
            "System selection depends on individual energy needs.",
            "Always review local grid and installation requirements."
        ],

        related: [1, 2, 4]
    },


    {
        id: 4,
        category: "Energy Saving Tips",
        title: "How Solar Energy Can Help Reduce Electricity Bills",
        subtitle: "Discover how generating electricity from sunlight can reduce dependence on conventional power and support smarter energy management.",
        image: "../assets/images/blog/electricity-bills.jpg",
        author: "SunUrja Team",
        date: "21 Nov 2026",
        readingTime: "5 min read",

        sections: [
            {
                id: "introduction",
                heading: "Introduction",
                content: `
                    <p>
                    Electricity is an essential part of everyday life.
                    From household appliances to commercial equipment,
                    energy consumption plays an important role
                    in monthly expenses.
                    </p>

                    <p>
                    Solar energy offers an alternative way to
                    generate electricity using sunlight and can
                    help reduce dependence on conventional power.
                    </p>
                `
            },

            {
                id: "solar-generation",
                heading: "Generate Your Own Electricity",
                content: `
                    <p>
                    Rooftop solar panels convert sunlight into
                    electricity that can be used within your home
                    or business. This allows you to meet part
                    of your energy requirements through solar generation.
                    </p>
                `
            },

            {
                id: "consumption",
                heading: "Reduce Grid Electricity Consumption",
                content: `
                    <p>
                    When solar electricity is available, compatible
                    appliances can operate using the generated power.
                    This can reduce the amount of electricity
                    drawn from the utility grid.
                    </p>
                `
            },

            {
                id: "net-metering",
                heading: "Understand Net Metering",
                content: `
                    <p>
                    Under applicable net-metering arrangements,
                    eligible grid-connected solar systems can
                    export surplus electricity to the grid.
                    The billing treatment depends on local
                    electricity regulations and utility policies.
                    </p>
                `
            },

            {
                id: "smart-usage",
                heading: "Use Electricity More Efficiently",
                content: `
                    <p>
                    Running suitable appliances during daylight
                    hours can help make better use of available
                    solar generation.
                    </p>

                    <ul>
                        <li>Use energy-efficient appliances.</li>
                        <li>Monitor daily electricity consumption.</li>
                        <li>Reduce unnecessary standby power usage.</li>
                        <li>Plan energy-intensive activities during solar generation hours.</li>
                    </ul>
                `
            },

            {
                id: "conclusion",
                heading: "Conclusion",
                content: `
                    <p>
                    Solar energy can support better electricity
                    cost management by generating renewable
                    power at the point of use.
                    </p>

                    <p>
                    Actual savings depend on system capacity,
                    consumption patterns, installation cost,
                    tariffs and applicable electricity policies.
                    </p>
                `
            }
        ],

        takeaways: [
            "Solar panels generate electricity from sunlight.",
            "Solar generation can reduce grid electricity consumption.",
            "Net-metering rules vary by location.",
            "Daytime energy planning can improve solar utilisation.",
            "Actual savings depend on individual circumstances."
        ],

        related: [2, 5, 6]
    },


    {
        id: 5,
        category: "Energy Saving Tips",
        title: "How to Maintain Your Solar Panels",
        subtitle: "Keep your solar energy system performing effectively with practical cleaning, inspection and monitoring practices.",
        image: "../assets/images/blog/solar-maintenance.jpg",
        author: "SunUrja Team",
        date: "21 Nov 2026",
        readingTime: "4 min read",

        sections: [
            {
                id: "introduction",
                heading: "Introduction",
                content: `
                    <p>
                    Solar panels are designed for long-term outdoor
                    operation. However, dust, dirt, bird droppings
                    and environmental conditions can affect
                    their ability to receive sunlight.
                    </p>

                    <p>
                    Regular inspection and appropriate maintenance
                    help keep your solar installation in good condition.
                    </p>
                `
            },

            {
                id: "cleaning",
                heading: "1. Clean Solar Panels Carefully",
                content: `
                    <p>
                    Dust and dirt can accumulate on panel surfaces.
                    Follow the manufacturer's cleaning instructions
                    and use appropriate methods and equipment.
                    </p>

                    <p>
                    Avoid abrasive materials, harsh chemicals
                    and unsafe cleaning practices.
                    </p>
                `
            },

            {
                id: "inspection",
                heading: "2. Inspect the Solar System",
                content: `
                    <p>
                    Periodically check for visible cracks,
                    damaged cables, loose components or
                    unusual physical changes.
                    </p>

                    <p>
                    Electrical inspection and repairs should
                    be handled by qualified professionals.
                    </p>
                `
            },

            {
                id: "monitoring",
                heading: "3. Monitor Energy Generation",
                content: `
                    <p>
                    Use your inverter display or monitoring
                    application to review electricity generation.
                    Unexpected changes may indicate shading,
                    equipment issues or other performance problems.
                    </p>
                `
            },

            {
                id: "professional-maintenance",
                heading: "4. Schedule Professional Maintenance",
                content: `
                    <p>
                    Professional maintenance can help identify
                    electrical issues, inverter problems and
                    other faults that may not be visible during
                    a basic visual inspection.
                    </p>
                `
            },

            {
                id: "conclusion",
                heading: "Conclusion",
                content: `
                    <p>
                    Good maintenance practices help protect
                    your solar investment. Follow manufacturer
                    recommendations and contact qualified
                    technicians whenever professional attention
                    is required.
                    </p>
                `
            }
        ],

        takeaways: [
            "Follow manufacturer cleaning instructions.",
            "Avoid unsafe rooftop cleaning practices.",
            "Inspect visible components periodically.",
            "Monitor electricity generation regularly.",
            "Use qualified professionals for electrical maintenance."
        ],

        related: [1, 2, 4]
    },


    {
        id: 6,
        category: "Solar News",
        title: "The Future of Renewable Energy in India",
        subtitle: "Explore India's renewable energy journey and the growing importance of solar power in supporting a sustainable energy future.",
        image: "../assets/images/blog/renewable-india.jpg",
        author: "SunUrja Team",
        date: "21 Nov 2026",
        readingTime: "6 min read",

        sections: [
            {
                id: "introduction",
                heading: "Introduction",
                content: `
                    <p>
                    India has significant renewable energy potential
                    because of its geography, sunlight availability
                    and growing demand for electricity.
                    </p>

                    <p>
                    Solar energy is an important part of the
                    country's transition towards cleaner
                    electricity generation.
                    </p>
                `
            },

            {
                id: "solar-potential",
                heading: "India's Solar Energy Potential",
                content: `
                    <p>
                    Many regions across India receive substantial
                    sunlight throughout the year, creating
                    opportunities for solar power generation.
                    </p>

                    <p>
                    Solar installations can be developed on
                    residential rooftops, commercial buildings
                    and large-scale solar parks.
                    </p>
                `
            },

            {
                id: "technology",
                heading: "Growth of Solar Technology",
                content: `
                    <p>
                    Improvements in photovoltaic technology,
                    inverters, battery storage and energy
                    monitoring are creating new opportunities
                    for solar power systems.
                    </p>

                    <p>
                    These developments can support more
                    efficient energy generation and management.
                    </p>
                `
            },

            {
                id: "opportunities",
                heading: "Opportunities for Homes and Businesses",
                content: `
                    <ul>
                        <li>Residential rooftop solar installations.</li>
                        <li>Commercial and industrial solar projects.</li>
                        <li>Solar-powered infrastructure.</li>
                        <li>Energy storage and hybrid solutions.</li>
                        <li>Growing opportunities in renewable energy services.</li>
                    </ul>
                `
            },

            {
                id: "challenges",
                heading: "Challenges and the Road Ahead",
                content: `
                    <p>
                    Renewable energy development also requires
                    investment in transmission infrastructure,
                    energy storage, grid management and
                    reliable project execution.
                    </p>

                    <p>
                    Continued technological development and
                    effective planning will be important for
                    expanding clean energy adoption.
                    </p>
                `
            },

            {
                id: "conclusion",
                heading: "Conclusion",
                content: `
                    <p>
                    Solar power has an important role to play
                    in India's renewable energy journey.
                    By supporting innovation and wider adoption,
                    India can continue moving towards a
                    cleaner and more sustainable energy future.
                    </p>
                `
            }
        ],

        takeaways: [
            "India has considerable solar energy potential.",
            "Rooftop and large-scale solar both offer opportunities.",
            "Battery storage supports energy management.",
            "Grid infrastructure remains important.",
            "Solar technology can contribute to a cleaner energy future."
        ],

        related: [1, 3, 4]
    }

];


/* =========================================
   GET SELECTED ARTICLE FROM URL
========================================= */

const urlParams = new URLSearchParams(window.location.search);

const articleId = Number(urlParams.get("id"));

const currentBlog = blogs.find(blog => blog.id === articleId);


/* =========================================
   DOM ELEMENTS
========================================= */

const articleTitle = document.getElementById("articleTitle");

const articleSubtitle = document.getElementById("articleSubtitle");

const articleCategory = document.getElementById("articleCategory");

const articleImage = document.getElementById("articleImage");

const articleAuthor = document.getElementById("articleAuthor");

const articleDate = document.getElementById("articleDate");

const articleReadingTime = document.getElementById("articleReadingTime");

const breadcrumbTitle = document.getElementById("breadcrumbTitle");

const articleContent = document.getElementById("articleContent");

const articleContents = document.getElementById("articleContents");

const keyTakeaways = document.getElementById("keyTakeaways");

const relatedArticles = document.getElementById("relatedArticles");


/* =========================================
   DISPLAY ARTICLE INFORMATION
========================================= */

function displayArticle(blog) {

    document.title = `${blog.title} | SunUrja Technologies`;

    articleTitle.textContent = blog.title;

    articleSubtitle.textContent = blog.subtitle;

    articleCategory.textContent = blog.category;

    articleImage.src = blog.image;

    articleImage.alt = blog.title;

    articleAuthor.textContent = blog.author;

    articleDate.textContent = blog.date;

    articleReadingTime.textContent = blog.readingTime;

    breadcrumbTitle.textContent = blog.title;

    displayArticleContent(blog);

    displayTableOfContents(blog);

    displayTakeaways(blog);

    displayRelatedArticles(blog);

}


/* =========================================
   DISPLAY ARTICLE CONTENT
========================================= */

function displayArticleContent(blog) {

    articleContent.innerHTML = "";

    blog.sections.forEach(section => {

        const sectionElement = document.createElement("section");

        sectionElement.className = "article-section";

        sectionElement.id = section.id;

        sectionElement.innerHTML = `

            <h2>${section.heading}</h2>

            ${section.content}

        `;

        articleContent.appendChild(sectionElement);

    });

}


/* =========================================
   TABLE OF CONTENTS
========================================= */

function displayTableOfContents(blog) {

    articleContents.innerHTML = "";

    blog.sections.forEach(section => {

        const listItem = document.createElement("li");

        listItem.innerHTML = `

            <a href="#${section.id}">

                ${section.heading}

            </a>

        `;

        articleContents.appendChild(listItem);

    });

}


/* =========================================
   KEY TAKEAWAYS
========================================= */

function displayTakeaways(blog) {

    keyTakeaways.innerHTML = "";

    blog.takeaways.forEach(item => {

        const listItem = document.createElement("li");

        listItem.textContent = item;

        keyTakeaways.appendChild(listItem);

    });

}


/* =========================================
   RELATED ARTICLES
========================================= */

function displayRelatedArticles(blog) {

    relatedArticles.innerHTML = "";

    const relatedBlogs = blogs.filter(item =>

        blog.related.includes(item.id)

    );


    relatedBlogs.forEach(item => {

        const card = document.createElement("article");

        card.className = "details-related-card";

        card.innerHTML = `

            <img
                src="${item.image}"
                alt="${item.title}"
                loading="lazy"
            >

            <div class="related-card-content">

                <span class="blog-category">

                    ${item.category}

                </span>

                <h3>${item.title}</h3>

                <p>${item.subtitle}</p>

                <a href="blog-details.html?id=${item.id}">

                    Read Article →

                </a>

            </div>

        `;

        relatedArticles.appendChild(card);

    });

}


/* =========================================
   INVALID ARTICLE HANDLING
========================================= */

function showArticleNotFound() {

    document.title = "Article Not Found | SunUrja Technologies";

    document.querySelector(".article-layout").innerHTML = `

        <div class="article-not-found">

            <h2>Article Not Found</h2>

            <p>
                Sorry, the article you are looking for
                is unavailable or may have been moved.
            </p>

            <a href="blog.html">
                ← Back to All Articles
            </a>

        </div>

    `;

    articleTitle.textContent = "Article Not Found";

    articleSubtitle.textContent =
        "Explore more solar energy insights from SunUrja Technologies.";

    articleCategory.textContent = "SunUrja Blog";

    articleImage.style.display = "none";

    document.querySelector(".article-meta").style.display = "none";

    document.querySelector(".article-bottom-cta").style.display = "none";

    document.querySelector(".details-related-section").style.display = "none";

}


/* =========================================
   INITIALIZE BLOG DETAILS PAGE
========================================= */

if (currentBlog) {

    displayArticle(currentBlog);

} else {

    showArticleNotFound();

}
