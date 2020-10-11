import React, { useContext, useState } from "react";

import { SearchContext } from "./../Context/searchContext";

const SearchForm = () => {
  const [searchText, setSearchText] = useState("");
  const { searchUsers } = useContext(SearchContext);

  const handleSumbit = (e) => {
    e.preventDefault();
    searchUsers(searchText);
    setSearchText("");
  };

  return (
    <div className="search-container">
      <form onSubmit={handleSumbit} id="search-form">
        <div className="form-group d-flex justify-content-center align-items-center">
          <input
            className="form-control rounded-pill"
            id="readOnlyInput"
            type="text"
            placeholder="Search Users ..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            type="submit"
            className="btn btn-info rounded-pill ml-1 d-flex justify-content-center align-items-center"
          >
            Search Now
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchForm;
