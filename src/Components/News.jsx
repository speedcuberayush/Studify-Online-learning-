import React, { useEffect, useState } from "react";
import "./News.css";

const News = () => {
  const API_KEY = "5891093a27fb4ca4bfa78f9fc0a74103";
  const url = "https://newsapi.org/v2/everything?q=";

  const [articles, setArticles] = useState([]);
  const [selectedNav, setSelectedNav] = useState("India");
  const [searchQuery, setSearchQuery] = useState("");

  const reload = () => {
    window.location.reload();
  };

  useEffect(() => {
    fetchNews(selectedNav);
  }, [selectedNav]);

  const fetchNews = async (query) => {
    try {
      const res = await fetch(`${url}${query}&apiKey=${API_KEY}`);
      const data = await res.json();
      setArticles(data.articles);
    } catch (error) {
      console.error("Error fetching news:", error);
    }
  };

  const onNavItemClick = (id) => {
    setSelectedNav(id);
  };

  const handleSearch = () => {
    if (searchQuery) {
      fetchNews(searchQuery);
      setSelectedNav(null);
    }
  };

  return (
    <div
      className="NewsAPP"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "100vw",
      }}
    >
      <nav className="NewsNAV">
        <div className="main-nav NewsContainer flex">
          <div className="NewsNAVlinks">
            <ul className="flex">
              <li
                className={`hover-link NewsNAVitem ${
                  selectedNav === "India" && "active"
                }`}
                id="India"
                onClick={() => onNavItemClick("India")}
              >
                India
              </li>
              <li
                className={`hover-link NewsNAVitem ${
                  selectedNav === "Finance" && "active"
                }`}
                id="Finance"
                onClick={() => onNavItemClick("Finance")}
              >
                Finance
              </li>
              <li
                className={`hover-link NewsNAVitem ${
                  selectedNav === "Politics" && "active"
                }`}
                id="Politics"
                onClick={() => onNavItemClick("Politics")}
              >
                Politics
              </li>
            </ul>
          </div>
          <div className="search-bar flex">
            <input
              id="search-text"
              type="text"
              className="news-input"
              placeholder="e.g. AI"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button
              id="search-button"
              className="button search-button"
              onClick={handleSearch}
            >
              <svg
                class="svgIcon"
                viewBox="0 0 512 512"
                height="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm50.7-186.9L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"></path>
              </svg>
              Explore
            </button>
          </div>
        </div>
      </nav>

      <main class="NewsMAIN">
        <div className="cards-NewsContainer NewsContainer flex" id="cards-NewsContainer">
          {articles.map((article, index) => (
            <div className="card" key={index}>
              <div className="card-header">
                {article.urlToImage && (
                  <img
                    src={article.urlToImage}
                    alt="news-image"
                    id="news-img"
                  />
                )}
              </div>
              <div className="card-content">
                <h3 id="news-title">{article.title}</h3>
                <h6 className="news-source" id="news-source">
                  {`${article.source.name} · ${new Date(
                    article.publishedAt
                  ).toLocaleString("en-US", {
                    timeZone: "Asia/Jakarta",
                  })}`}
                </h6>
                <p className="news-desc" id="news-desc">
                  {article.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default News;
