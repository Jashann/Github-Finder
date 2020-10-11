import React from "react";
import { Link } from "react-router-dom";
import logo from "./logo.png";

import ToggleMode from "../ToggleMode/ToggleMode.component";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light justify-content-between">
      <Link className="navbar-brand text-muted" to="/Github-Finder">
        <img id="logo" height="60px" src={logo} alt="Logo" />
      </Link>
      <ToggleMode />
    </nav>
  );
};

export default Navbar;
