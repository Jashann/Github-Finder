import React, { useContext } from "react";

import { SearchContext } from "../Context/searchContext";

import UserBox from "./UserBox.component";

function UsersList() {
  const { users, totalCount } = useContext(SearchContext);
  return users && users.length > 0 ? (
    <div className="users-list">
      {users.map((user) => (
        <UserBox user={user} key={user.id} />
      ))}
    </div>
  ) : (
    <>
      {totalCount === 0 ? (
        <div className="user-not-exists">
          <h2 className="text-center my-4">The user does not exist.</h2>
        </div>
      ) : null}
    </>
  );
}

export default UsersList;
