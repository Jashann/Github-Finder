import React, { useState } from "react";
import RepoItem from "./RepoItem.component";
import ReposShowMore from "./ReposShowMore.component";

function Repos({ login, repos }) {
  const [show, setShow] = useState(false);

  function toggleShow() {
    setShow(!show);
  }

  return (
    <div className="repos-container">
      {repos.length > 0 ? (
        <>
          <h2 className="text-center mt-4 mb-5">{login}'s Public Repos</h2>
          {repos.map((repo, key) => {
            if (key < 3 || show)
              return (
                <RepoItem
                  repo={repo}
                  key={repo.id}
                  showLess={repos.length - 1 === key && repos.length >= 3}
                  toggleShow={toggleShow}
                />
              );
            else
              return (
                <ReposShowMore
                  toggleShow={toggleShow}
                  show={!show && key === 3}
                  text="Show All"
                  key={repo.id}
                />
              );
          })}
        </>
      ) : (
        <h2 className="text-center my-4">
          {login} does not public have any repos.
        </h2>
      )}
    </div>
  );
}

export default Repos;
