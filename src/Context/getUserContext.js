import React, { useState, createContext } from "react";

export const UserContext = createContext();

const UserContextProvider = (props) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [repos, setRepos] = useState(null);
  const [reposLoading, setReposLoading] = useState(true);

  const getUser = async (username) => {
    const response = await fetch(
      `https://api.github.com/users/${username}?&client_id=${process.env.GITHUB_CLIENT_ID}&client_secret=${process.env.GITHUB_CLIENT_SECRET}`
    );
    const data = await response.json();
    setUser(data);
    setLoading(false);
  };

  const getRepos = async (username) => {
    const response = await fetch(
      `https://api.github.com/users/${username}/repos?&client_id=${process.env.GITHUB_CLIENT_ID}&client_secret=${process.env.GITHUB_CLIENT_SECRET}`
    );
    const data = await response.json();
    setRepos(data);
    setReposLoading(false);
  };

  return (
    <UserContext.Provider
      value={{ user, loading, getUser, repos, reposLoading, getRepos }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
