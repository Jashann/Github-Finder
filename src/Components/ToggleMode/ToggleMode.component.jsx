import React, { useEffect } from "react";
import "./ToggleMode.styles.scss";

import ThemeHandler from "./ToggleMode.UIHandler";

export default function ToggleMode() {
  //
  useEffect(() => {
    ThemeHandler.initializeTheme();
  });

  return (
    <div id="switch-container">
      <label className="switch">
        <input type="checkbox" id="togBtn" />
        <div className="slider round">
          <span className="on">
            <ion-icon name="moon-outline"></ion-icon>
          </span>
          <span className="off">
            <ion-icon name="sunny-outline"></ion-icon>
          </span>
        </div>
      </label>
    </div>
  );
}
