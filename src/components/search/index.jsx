import React, { useState, useEffect, useCallback } from "react";
import debounce from "lodash/debounce";
import { FaSearch } from "react-icons/fa";

import "./index.css";

const SearchHeader = () => {
  return (
    <div className="search-header-container">
      <h1 className="search-header">Project Header</h1>
      <p className="search-subheader">Search GitHub code, Confluence/JIRA </p>
    </div>
  );
};

const Search = ({ handleSearch }) => {
  const [inputValue, setInputValue] = useState("");

  const debouncedHandleSearch = useCallback(
    debounce((value) => handleSearch(value), 1000),
    []
  );

  return (
    <>
      <SearchHeader />
      <div className="search-container">
        <FaSearch className="search-icon" />
        <input
          className="search-input"
          type="text"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
            debouncedHandleSearch(e.target.value);
          }}
          placeholder="Search..."
        />
      </div>
    </>
  );
};

export default Search;
