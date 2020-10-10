import React from "react";

import UserInfoItem from "./UserInfoItem.component";

export default function UserInfo({ user }) {
  let {
    company,
    blog,
    location,
    hireable,
    bio,
    public_repos,
    public_gists,
    followers,
    following,
  } = user;
  return (
    <div className="single-user-info">
      <div className="single-user-info-item">
        <ion-icon class="pre text-muted" name="person-outline"></ion-icon>
        <h4 className="text">Hireable:</h4>
        {hireable ? (
          <ion-icon
            class="text-muted"
            name="checkmark-done-circle-outline"
          ></ion-icon>
        ) : (
          <ion-icon class="text-muted" name="close-circle-outline"></ion-icon>
        )}
      </div>
      <UserInfoItem
        preIconName="location-outline"
        title="Location"
        infoText={location}
      />
      <UserInfoItem
        preIconName="people-outline"
        title="Company"
        infoText={company}
      />
      <UserInfoItem preIconName="globe-outline" title="Blog" infoText={blog} />
      <UserInfoItem
        preIconName="chatbubble-outline"
        title="Bio"
        infoText={bio}
      />
      <UserInfoItem
        preIconName="extension-puzzle-outline"
        title="Public Repos"
        infoText={public_repos}
      />
      <UserInfoItem
        preIconName="aperture-outline"
        title="Public Gists"
        infoText={public_gists}
      />
      <UserInfoItem
        preIconName="people-circle-outline"
        title="Followers"
        infoText={followers}
      />
      <UserInfoItem
        preIconName="person-circle-outline"
        title="Following"
        infoText={following}
      />
    </div>
  );
}
