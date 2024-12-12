import React from "react";

const SearchFilter = ({ onSearch }) => (
  <input
    type="text"
    className="search-input"
    placeholder="Search profiles..."
    onChange={(e) => onSearch(e.target.value)}
  />
);

export default SearchFilter;