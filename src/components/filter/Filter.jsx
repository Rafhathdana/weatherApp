import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import "./filter.css";
import { useDispatch } from "react-redux";
import { fetchNews } from "../../redux/Slice/news";
export const Filter = () => {
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
  const dispatch = useDispatch();
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
      dispatch(fetchNews({ langCode, page: 1 }));
    }
  };
  return (
    <>
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
            {language.map((item, index) => (
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
  );
};
