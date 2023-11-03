import { useState } from "react";
import "./search.css";
import { FaSearch } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { fetchNews, searchNewsByTerm } from "../../redux/Slice/news";

export const Search = () => {
  const [content, setContent] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(searchNewsByTerm(content));
  };
  return (
    <>
      <section className="search-container">
        <div className="search-wrapper">
          <form className="sea">
            <input
              type="text"
              placeholder="Search For News"
              className="search-input"
              onChange={(event) => setContent(event.target.value)}
            />
            <button className="search-button" onClick={() => handleSubmit}>
              <FaSearch className="search-icon" />
            </button>
          </form>
        </div>
      </section>
    </>
  );
};
