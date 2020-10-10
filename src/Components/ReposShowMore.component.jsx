import React from "react";

export default function ReposShowMore({ show, toggleShow, text }) {
  return show ? (
    <button onClick={toggleShow} className="btn btn-primary">
      {text}
    </button>
  ) : null;
}
