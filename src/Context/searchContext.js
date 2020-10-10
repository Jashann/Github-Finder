import React, { createContext, useState } from "react";

export const SearchContext = createContext();

const SearchContextProvider = (props) => {
  const [users, setUsers] = useState(null);
  const [totalCount, setTotalCount] = useState(null);

  const searchUsers = async (searchText) => {
    const response = await fetch(
      `https://api.github.com/search/users?q=${searchText}&client_id=${process.env.GITHUB_CLIENT_ID}&client_secret=${process.env.GITHUB_CLIENT_SECRET}`
    );
    const data = await response.json();
    setTotalCount(data.total_count);
    setUsers(data.items);
  };

  return (
    <SearchContext.Provider value={{ totalCount, users, searchUsers }}>
      {props.children}
    </SearchContext.Provider>
  );
};

export default SearchContextProvider;
