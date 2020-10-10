import React from "react";

import ReposShowMore from "./ReposShowMore.component";

export default function RepoItem(props) {
  const { showLess, toggleShow } = props;
  const { name, html_url, description } = props.repo;

  return (
    <>
      <div className="repo-item bg-info">
        <h5>{name}</h5>
        <p className="description">
          Description: {description ? description : "Not Specified"}
        </p>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={html_url}
          className="btn btn-primary"
        >
          See Repo On Github
        </a>
      </div>
      {showLess && (
        <ReposShowMore show={true} text="Show Less" toggleShow={toggleShow} />
      )}
    </>
  );
}
