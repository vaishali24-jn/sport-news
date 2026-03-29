document.addEventListener("DOMContentLoaded", function () {
    const featuredNewsElement = document.getElementById("featured-news-container");
    const newsContainer = document.getElementById("news-container");
    const trendingNewsElement = document.getElementById("trending-news");

    const sportsNews = [
        {
            headline: "Real Madrid Wins El Clasico with a Last-Minute Goal!",
            image: "images/news1.webp",
            summary: "Real Madrid secured a thrilling 2-1 victory over Barcelona, thanks to a last-minute goal from Vinicius Jr.",
            link: "#"
        },
        {
            headline: "Cristiano Ronaldo's Hat-Trick Secures Victory for Al Nassr!",
            image: "images/news2.webp",
            summary: "Cristiano Ronaldo scored three stunning goals in Al Nassr’s 4-2 win. Read full match analysis here...",
            link: "#"
        },
        {
            headline: "Liverpool Signs New Midfielder Ahead of Transfer Deadline",
            image: "images/news3.webp",
            summary: "Liverpool confirmed the signing of a top midfielder before the transfer window closed. Read more about the deal...",
            link: "#"
        },
        {
            headline: "PSG Extends Kylian Mbappe’s Contract Until 2027",
            image: "images/news4.webp",
            summary: "Paris Saint-Germain has officially announced Kylian Mbappe’s contract extension until 2027.",
            link: "#"
        },
        {
            headline: "Manchester United Coach Under Pressure After Latest Defeat",
            image: "images/news5.webp",
            summary: "Manchester United’s poor form continues, raising questions about the future of their head coach.",
            link: "#"
        }
    ];

    function loadFeaturedNews() {
        if (!featuredNewsElement) return;
        featuredNewsElement.innerHTML = "";
        sportsNews.slice(0, 3).forEach(news => {
            const newsItem = document.createElement("div");
            newsItem.classList.add("news-card");
            newsItem.innerHTML = `
                <img src="${news.image}" alt="News Image" class="news-image">
                <div class="news-content">
                    <h3 class="news-headline">${news.headline}</h3>
                    <a href="${news.link}" class="read-more">Read More</a>
                </div>
            `;
            featuredNewsElement.appendChild(newsItem);
        });
    }

    function loadLatestNews() {
        if (!newsContainer) return;
        newsContainer.innerHTML = "";
        sportsNews.forEach(news => {
            const newsItem = document.createElement("div");
            newsItem.classList.add("news-card");
            newsItem.innerHTML = `
                <img src="${news.image}" alt="News Image" class="news-image">
                <div class="news-content">
                    <h3 class="news-headline">${news.headline}</h3>
                    <p class="news-summary">${news.summary}</p>
                    <a href="${news.link}" class="read-more">Read More</a>
                </div>
            `;
            newsContainer.appendChild(newsItem);
        });
    }

    function loadTrendingNews() {
        if (!trendingNewsElement) return;
        trendingNewsElement.innerHTML = "";
        sportsNews.slice(0, 3).forEach(news => {
            const newsItem = document.createElement("li");
            newsItem.innerHTML = `<a href="${news.link}">${news.headline}</a>`;
            trendingNewsElement.appendChild(newsItem);
        });
    }

    loadFeaturedNews();
    loadLatestNews();
    loadTrendingNews();
});
