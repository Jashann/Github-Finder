import React, { useContext } from "react";

import { useRouteMatch, Link } from "react-router-dom";

import { UserContext } from "./../Context/getUserContext";

import UserBox from "./UserBox.component";
import UserInfo from "./UserInfo.component";
import Repos from "./Repos.component";

function SingleUser() {
  const match = useRouteMatch();
  const userName = match.params.username;

  const { user, loading, getUser, repos, reposLoading, getRepos } = useContext(
    UserContext
  );

  if (loading) getUser(userName);
  if (reposLoading) getRepos(userName);

  if (user) {
    const { login } = user;
    return user ? (
      <div id="single-user-container" className="px-2 py-5">
        <Link
          id="icon-back-container"
          className="text-muted d-flex align-items-center"
          to="/Github-Finder"
        >
          <ion-icon name="arrow-back-circle-outline"></ion-icon>{" "}
          <h3 className="m-0 text-muted">Go Back</h3>
        </Link>
        <div id="user-info-container">
          <UserBox user={user} singleUser={true} />
          <UserInfo user={user} />
        </div>

        {repos && <Repos repos={repos} login={login} />}
      </div>
    ) : null;
  }
  return null;
}

export default SingleUser;
