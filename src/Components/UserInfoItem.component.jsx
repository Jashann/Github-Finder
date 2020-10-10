import React from "react";

export default function UserInfoItem({ preIconName, title, infoText }) {
  return (
    <div className="single-user-info-item">
      <ion-icon class="pre text-muted" name={preIconName}></ion-icon>
      <h4 className="text">{title}:</h4>
      <h4 className="text-muted text">
        {infoText ? infoText : "Not Specified"}
      </h4>
    </div>
  );
}
