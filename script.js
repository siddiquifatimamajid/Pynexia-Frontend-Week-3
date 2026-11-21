/* =========================================
   THE DAILY EDIT - INTERACTIVE FEATURES
========================================= */

// ARTICLE DATA

const articles = [
    {
        id: 1,
        title: "The Future of Artificial Intelligence and Human Creativity",
        category: "Technology",
        date: "Nov 20, 2026",
        readTime: "7 min read",
        author: "James Wilson",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=900&q=85",
        description: "Exploring how intelligent technology is transforming creative thinking, innovation and the way we work.",
        tags: ["AI", "Innovation", "Future"]
    },
    {
        id: 2,
        title: "Finding Beauty in the Simplicity of Everyday Life",
        category: "Lifestyle",
        date: "Nov 19, 2026",
        readTime: "5 min read",
        author: "Olivia Bennett",
        image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=900&q=85",
        description: "A thoughtful look at intentional living, meaningful routines and appreciating life's quieter moments.",
        tags: ["Mindfulness", "Living", "Wellness"]
    },
    {
        id: 3,
        title: "The New Creative Movement Redefining Modern Design",
        category: "Design",
        date: "Nov 18, 2026",
        readTime: "6 min read",
        author: "Sophia Carter",
        image: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?w=900&q=85",
        description: "Discover the visual ideas, emerging aesthetics and creative approaches influencing contemporary design.",
        tags: ["Creativity", "Visual Arts", "Trends"]
    },
    {
        id: 4,
        title: "Inside the Cultural Spaces Bringing Communities Together",
        category: "Culture",
        date: "Nov 17, 2026",
        readTime: "8 min read",
        author: "Daniel Brooks",
        image: "https://images.unsplash.com/photo-1518998053901-5348d3961a04?w=900&q=85",
        description: "How art, architecture and shared experiences are creating stronger cultural connections.",
        tags: ["Community", "Art", "Society"]
    },
    {
        id: 5,
        title: "A Journey Through the World's Most Beautiful Destinations",
        category: "Travel",
        date: "Nov 16, 2026",
        readTime: "9 min read",
        author: "Emma Thompson",
        image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=900&q=85",
        description: "Explore remarkable landscapes and inspiring places that invite us to see the world differently.",
        tags: ["Adventure", "Destinations", "Travel"]
    },
    {
        id: 6,
        title: "Why Digital Innovation Is Changing Our Daily Lives",
        category: "Technology",
        date: "Nov 15, 2026",
        readTime: "6 min read",
        author: "James Wilson",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=900&q=85",
        description: "From smarter devices to connected experiences, technology continues to reshape modern living.",
        tags: ["Digital", "Technology", "Innovation"]
    },
    {
        id: 7,
        title: "The Art of Creating Spaces That Inspire",
        category: "Design",
        date: "Nov 14, 2026",
        readTime: "5 min read",
        author: "Sophia Carter",
        image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=900&q=85",
        description: "A closer look at the thoughtful details that make interiors feel personal, balanced and inspiring.",
        tags: ["Interior", "Architecture", "Design"]
    },
    {
        id: 8,
        title: "The Stories Behind the World's Creative Traditions",
        category: "Culture",
        date: "Nov 13, 2026",
        readTime: "7 min read",
        author: "Daniel Brooks",
        image: "https://images.unsplash.com/photo-1531058020387-3be344556be6?w=900&q=85",
        description: "Discover the traditions, artistic expressions and stories that preserve cultural identity.",
        tags: ["Heritage", "Tradition", "Art"]
    },
    {
        id: 9,
        title: "Slow Travel: Experiencing Places Beyond the Tourist Trail",
        category: "Travel",
        date: "Nov 12, 2026",
        readTime: "8 min read",
        author: "Emma Thompson",
        image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=900&q=85",
        description: "Experience meaningful journeys by exploring local communities, hidden places and slower adventures.",
        tags: ["Exploration", "Culture", "Journey"]
    }
];


// ARTICLE RENDERING

const articleGrid = document.getElementById("articleGrid");
const filterButtons = document.querySelectorAll(".filter-btn");

function renderArticles(category = "All") {

    if (!articleGrid) return;

    const filteredArticles = category === "All"
        ? articles
        : articles.filter(article => article.category === category);

    if (filteredArticles.length === 0) {
        articleGrid.innerHTML = `
            <p class="empty-message">No stories available in this category.</p>
        `;
        return;
    }

    articleGrid.innerHTML = filteredArticles.map(article => `
        <article class="article-card">

            <div class="article-image">
                <img
                    src="${article.image}"
                    alt="${article.title}"
                    loading="lazy"
                >

                <span class="article-category">
                    ${article.category}
                </span>
            </div>

            <div class="article-details">

                <div class="article-meta">
                    <span>${article.date}</span>
                    <span>${article.readTime}</span>
                </div>

                <h3>${article.title}</h3>

                <p>${article.description}</p>

                <div class="article-meta" style="margin-top: 14px;">
                    <span>BY ${article.author.toUpperCase()}</span>
                </div>

                <div class="article-tags">
                    ${article.tags.map(tag => `
                        <span>#${tag}</span>
                    `).join("")}
                </div>

            </div>

        </article>
    `).join("");
}


// CATEGORY FILTERING

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        const selectedCategory = button.dataset.category;

        filterButtons.forEach(filter => {
            filter.classList.remove("active");
        });

        button.classList.add("active");

        renderArticles(selectedCategory);

    });

});


// MOBILE NAVIGATION

const menuToggle = document.getElementById("menuToggle");
const navigation = document.getElementById("navigation");

if (menuToggle && navigation) {

    menuToggle.addEventListener("click", () => {

        const isOpen = navigation.classList.toggle("open");

        menuToggle.setAttribute("aria-expanded", isOpen);

        menuToggle.textContent = isOpen ? "✕" : "☰";

    });

    navigation.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {

            navigation.classList.remove("open");

            menuToggle.setAttribute("aria-expanded", "false");

            menuToggle.textContent = "☰";

        });

    });

}


// NEWSLETTER SUBSCRIPTION

const newsletterForm = document.getElementById("newsletterForm");
const emailInput = document.getElementById("emailInput");
const newsletterMessage = document.getElementById("newsletterMessage");

if (newsletterForm) {

    newsletterForm.addEventListener("submit", event => {

        event.preventDefault();

        const email = emailInput.value.trim();

        if (!emailInput.checkValidity()) {

            newsletterMessage.textContent = "Please enter a valid email address.";

            return;

        }

        newsletterMessage.textContent =
            "Thank you for subscribing! Welcome to The Daily Edit.";

        newsletterForm.reset();

    });

}


// INITIALIZE WEBSITE

document.addEventListener("DOMContentLoaded", () => {

    renderArticles();

});