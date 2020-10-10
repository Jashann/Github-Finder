import React from "react";
import { Link } from "react-router-dom";

export default function UserBox({ user, singleUser }) {
  const { login, avatar_url, blog } = user;

  let blogFormattedUrl;
  if (blog) {
    blogFormattedUrl = blog.toLowerCase();
    if (
      !blogFormattedUrl.includes("http://") &&
      !blogFormattedUrl.includes("https://")
    )
      blogFormattedUrl = "https://" + user.blog;
  }

  return (
    <div className="user-card">
      <img src={avatar_url} alt="Profile Img" />
      <h5 className="mt-3 text">{login}</h5>

      {!singleUser ? (
        <Link to={`/user/${login}`} className="btn btn-primary">
          View Profile
        </Link>
      ) : (
        <a
          href={user.html_url}
          rel="noopener noreferrer"
          target="_blank"
          className="btn btn-primary"
        >
          Visit Profile
        </a>
      )}
      {singleUser && blog ? (
        <a
          href={blogFormattedUrl}
          rel="noopener noreferrer"
          target="_blank"
          className="btn btn-info"
        >
          Visit Blog
        </a>
      ) : null}
    </div>
  );
}
