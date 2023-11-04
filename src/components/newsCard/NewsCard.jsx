import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ButtonScroll } from "../buttonScroll/ButtonScroll";
import { searchNewsFetch } from "../../redux/Slice/news";
import "bootstrap/dist/css/bootstrap.min.css";
import "./newsCard.css";
import { FaAngleDown, FaSearch } from "react-icons/fa";

export const NewsCard = () => {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const [loading, setLoading] = useState(true);
  const languageMap = {
    Arabic: "ar",
    German: "de",
    English: "en",
    Spanish: "es",
    French: "fr",
    Hebrew: "he",
    Italian: "it",
    Dutch: "nl",
    Norwegian: "no",
    Portuguese: "pt",
    Russian: "ru",
    Swedish: "sv",
    Chinese: "zh",
  };
  const language = Object.keys(languageMap);
  const [filter, setFilter] = useState("");
  const [displayDropDown, setDisplayDropdown] = useState(false);
  const [content, setContent] = useState("");
  const [lang, setLang] = useState("");

  const handleDropdown = () => {
    setDisplayDropdown(!displayDropDown);
  };

  const handleLanguages = (selected) => {
    const confirmation = window.confirm(
      "Are you sure you want to change the language?"
    );
    if (confirmation) {
      setFilter(selected);
      handleDropdown();
      const langCode = languageMap[selected];
      setLang(langCode);
      setPage(1);
      dispatch(
        searchNewsFetch({
          languageCode: langCode,
          page: 1,
          searchTerm: content,
        })
      );
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setPage(1);
    dispatch(
      searchNewsFetch({ languageCode: lang, page: 1, searchTerm: content })
    );
  };

  const handleScroll = () => {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
    const isScrollingToBottom = scrollTop + clientHeight >= scrollHeight;

    if (isScrollingToBottom && !loading) {
      setLoading(true);
      setPage((prevPage) => prevPage + 1);
      dispatch(
        searchNewsFetch({
          languageCode: lang,
          page: page + 1,
          searchTerm: content,
        })
      ).then(() => {
        setLoading(false);
      });
    }
  };

  useEffect(() => {
    dispatch(
      searchNewsFetch({
        languageCode: lang,
        page: page || 1,
        searchTerm: content,
      })
    ).then(() => {
      setLoading(false);
    });

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lang]); // Include lang and content in the dependency array

  const sortedArticles = state.news.data?.articles
    ? [...state.news.data.articles].sort((a, b) => {
        const dateA = new Date(a.publishedAt);
        const dateB = new Date(b.publishedAt);
        return dateB - dateA;
      })
    : [];

  const handleCardClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <>
      <>
        <section className="search-container">
          <div className="search-wrapper">
            <form className="sea" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Search For News"
                className="search-input"
                onChange={(event) => setContent(event.target.value)}
              />
              <button className="search-button" type="submit">
                <FaSearch className="search-icon" />
              </button>
            </form>
          </div>
        </section>
        <section className="filter-container">
          <div className="filter">
            <input
              type="text"
              className="filter-input"
              value={filter}
              readOnly
              onClick={handleDropdown}
              placeholder="Filter by Language"
            />
            <FaAngleDown
              className={`filter-icon ${displayDropDown ? "rotate-icon" : ""}`}
              onClick={handleDropdown}
            />
          </div>
          {displayDropDown && (
            <div className="dropdown-content">
              {language?.map((item, index) => (
                <div
                  className="dropdown-item"
                  key={index}
                  onClick={() => handleLanguages(item)}
                >
                  {item}
                </div>
              ))}
            </div>
          )}
        </section>
      </>
      <>
        <ButtonScroll />
        <div className="container">
          <div className="row">
            {(sortedArticles || [])?.map((article, index) => (
              <div className="col-md-4 mb-4" key={index}>
                <div
                  className="card news-card h-100"
                  onClick={() => handleCardClick(article.url)}
                >
                  {article.image ? (
                    <img
                      src={article.image}
                      className="card-img-top"
                      alt={article.title}
                    />
                  ) : (
                    <div className="no-image-container">
                      <p className="no-image-text">No Image Found</p>
                    </div>
                  )}
                  <div className="card-body">
                    <h5 className="card-title">{article.title}</h5>
                    <p className="card-source">Source: {article.source.name}</p>
                    <p className="card-author">
                      Desciption: {article.description}
                    </p>
                  </div>
                  <div className="card-footer">
                    <small className="text-muted">
                      Published:
                      {new Date(article.publishedAt).toLocaleDateString()}
                    </small>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {loading && (
          <div className="loading-container">
            <div className="round-loader"></div>
          </div>
        )}
      </>
    </>
  );
};
